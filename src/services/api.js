/**
 * Löneprocess API Client
 * 
 * Hanterar all kommunikation med Löneprocess Backend API.
 * Inkluderar smart caching (1 minut) för att hålla nere API-kostnader.
 * 
 * @see https://github.com/carlgerhardsson/loneprocess-api
 */

const API_BASE = 'https://loneprocess-api-922770673146.us-central1.run.app';
const API_KEY = 'wXWoaJ13LTuPVcxqmzLYFKz9euJw_h4V7PkWnEfvONs';

/**
 * Löneprocess API Client
 * 
 * Features:
 * - Automatisk caching (60 sekunder)
 * - Error handling
 * - Rate limiting support
 * - TypeScript-kompatibla response types
 */
class LoneprocessAPI {
  constructor() {
    this.baseURL = API_BASE;
    this.apiKey = API_KEY;
    this.cache = new Map();
    this.cacheTimeout = 60000; // 1 minut (kostnadskrav)
    this.requestCount = 0;
    this.lastRequestTime = null;
  }

  /**
   * Generisk request-metod med caching och error handling
   * 
   * @param {string} endpoint - API endpoint (e.g., '/api/v1/activities')
   * @param {object} options - Fetch options
   * @returns {Promise} - JSON response data
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const method = options.method || 'GET';
    
    // Check cache först (endast för GET requests)
    if (method === 'GET') {
      const cacheKey = `${method}:${endpoint}`;
      const cached = this.cache.get(cacheKey);
      
      if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
        console.log('[API] Cache hit:', cacheKey, `(age: ${Math.floor((Date.now() - cached.timestamp) / 1000)}s)`);
        return cached.data;
      }
    }
    
    // Rate limiting warning (för development)
    if (this.lastRequestTime) {
      const timeSinceLastRequest = Date.now() - this.lastRequestTime;
      if (timeSinceLastRequest < 1000) {
        console.warn('[API] Warning: Multiple requests within 1 second. Consider using cache!');
      }
    }
    
    try {
      console.log(`[API] ${method} ${endpoint}`);
      
      const response = await fetch(url, {
        ...options,
        headers: {
          'X-API-Key': this.apiKey,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      this.requestCount++;
      this.lastRequestTime = Date.now();

      if (!response.ok) {
        const error = await response.json().catch(() => ({
          detail: response.statusText
        }));
        throw new Error(error.detail || `HTTP ${response.status}`);
      }

      const data = await response.json();
      
      // Cache response (endast GET)
      if (method === 'GET') {
        const cacheKey = `${method}:${endpoint}`;
        this.cache.set(cacheKey, {
          data,
          timestamp: Date.now()
        });
        console.log('[API] Cached response:', cacheKey);
      }
      
      return data;
    } catch (error) {
      console.error('[API] Request failed:', error);
      throw error;
    }
  }

  /**
   * Rensa cache (används vid updates)
   */
  clearCache() {
    console.log('[API] Cache cleared');
    this.cache.clear();
  }

  /**
   * Hämta cache-statistik (för debugging)
   */
  getCacheStats() {
    const entries = Array.from(this.cache.entries());
    const now = Date.now();
    
    return {
      totalEntries: entries.length,
      freshEntries: entries.filter(([, v]) => now - v.timestamp < this.cacheTimeout).length,
      oldestEntry: entries.length > 0 ? Math.max(...entries.map(([, v]) => now - v.timestamp)) / 1000 : 0,
      requestCount: this.requestCount,
      lastRequest: this.lastRequestTime ? new Date(this.lastRequestTime).toISOString() : null
    };
  }

  // ==========================================
  // ACTIVITIES ENDPOINTS
  // ==========================================

  /**
   * Lista alla aktiviteter
   * @returns {Promise<Array>} Array of activities
   */
  getActivities() {
    return this.request('/api/v1/activities');
  }

  /**
   * Hämta specifik aktivitet
   * @param {number} id - Activity ID
   * @returns {Promise<Object>} Activity object
   */
  getActivity(id) {
    return this.request(`/api/v1/activities/${id}`);
  }

  /**
   * Skapa ny aktivitet
   * @param {Object} data - Activity data
   * @returns {Promise<Object>} Created activity
   */
  createActivity(data) {
    this.clearCache(); // Clear cache när vi skapar
    return this.request('/api/v1/activities', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Uppdatera aktivitet
   * @param {number} id - Activity ID
   * @param {Object} data - Updated data
   * @returns {Promise<Object>} Updated activity
   */
  updateActivity(id, data) {
    this.clearCache(); // Clear cache när vi uppdaterar
    return this.request(`/api/v1/activities/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * Ta bort aktivitet
   * @param {number} id - Activity ID
   * @returns {Promise<void>}
   */
  deleteActivity(id) {
    this.clearCache(); // Clear cache när vi tar bort
    return this.request(`/api/v1/activities/${id}`, {
      method: 'DELETE',
    });
  }

  // ==========================================
  // LÖNEPERIODS ENDPOINTS
  // ==========================================

  /**
   * Lista alla löneperioder
   * @returns {Promise<Array>} Array of payroll periods
   */
  getLoneperiods() {
    return this.request('/api/v1/loneperiods');
  }

  /**
   * Hämta specifik löneperiod
   * @param {number} id - Period ID
   * @returns {Promise<Object>} Period object
   */
  getLoneperiod(id) {
    return this.request(`/api/v1/loneperiods/${id}`);
  }

  // ==========================================
  // HEALTH CHECK
  // ==========================================

  /**
   * Health check (kräver INTE API-nyckel)
   * @returns {Promise<Object>} Health status
   */
  async checkHealth() {
    try {
      const response = await fetch(`${this.baseURL}/health`);
      if (response.ok) {
        return await response.json();
      }
      throw new Error(`Health check failed: ${response.status}`);
    } catch (error) {
      console.error('[API] Health check failed:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const api = new LoneprocessAPI();

// Export class för testing
export { LoneprocessAPI };
