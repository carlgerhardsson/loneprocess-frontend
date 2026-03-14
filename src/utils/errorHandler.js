/**
 * API Error Handler
 * 
 * Centraliserad error handling för API-anrop.
 * Konverterar tekniska felmeddelanden till användarvänliga texter.
 */

/**
 * Hantera API-fel och returnera användarvänligt meddelande
 * 
 * @param {Error} error - Error object från API-anrop
 * @returns {string} Användarvänligt felmeddelande
 */
export function handleAPIError(error) {
  const message = error.message || String(error);
  
  // 401 Unauthorized - Ogiltig API-nyckel
  if (message.includes('401') || message.includes('Unauthorized')) {
    return 'API-nyckeln är ogiltig. Kontakta systemadministratör.';
  }
  
  // 429 Too Many Requests - Rate limit
  if (message.includes('429') || message.includes('Too Many Requests')) {
    return 'För många förfrågningar. Vänligen vänta en minut och försök igen.';
  }
  
  // 404 Not Found
  if (message.includes('404') || message.includes('Not Found')) {
    return 'Resursen kunde inte hittas i API:et.';
  }
  
  // 500 Server Error
  if (message.includes('500') || message.includes('Server Error')) {
    return 'Serverfel uppstod. Försök igen senare eller kontakta support.';
  }
  
  // 503 Service Unavailable
  if (message.includes('503') || message.includes('Service Unavailable')) {
    return 'API:et är för tillfället inte tillgängligt. Försök igen om en stund.';
  }
  
  // Network errors
  if (message.includes('Failed to fetch') || message.includes('Network request failed')) {
    return 'Nätverksfel. Kontrollera din internetanslutning.';
  }
  
  // Timeout errors
  if (message.includes('timeout') || message.includes('timed out')) {
    return 'Förfrågan tog för lång tid. Försök igen.';
  }
  
  // Generic fallback
  return `Ett fel uppstod: ${message}`;
}

/**
 * Visa felmeddelande till användaren (kan anpassas)
 * 
 * @param {Error} error - Error object
 * @param {Function} displayFn - Optional custom display function
 */
export function displayError(error, displayFn = null) {
  const userMessage = handleAPIError(error);
  
  if (displayFn && typeof displayFn === 'function') {
    displayFn(userMessage);
  } else {
    // Default: browser alert (kan ersättas med toast notification)
    alert(userMessage);
  }
  
  // Log tekniskt felmeddelande för debugging
  console.error('[Error]', error);
}

/**
 * Retry logic med exponential backoff
 * 
 * @param {Function} fn - Async function att retry:a
 * @param {number} maxRetries - Max antal retries (default: 3)
 * @param {number} baseDelay - Base delay i ms (default: 1000)
 * @returns {Promise} Result från function
 */
export async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      // Om sista försöket - throw error
      if (attempt === maxRetries - 1) {
        throw error;
      }
      
      // Om rate limit (429) - vänta längre
      const isRateLimit = error.message && error.message.includes('429');
      const delay = isRateLimit ? 60000 : baseDelay * Math.pow(2, attempt);
      
      console.log(`[Retry] Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
