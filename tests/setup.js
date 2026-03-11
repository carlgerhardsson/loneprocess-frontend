// Test setup file
import { beforeAll, afterEach } from 'vitest';

// Mock localStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
global.sessionStorage = new LocalStorageMock();

// Mock fetch
global.fetch = vi.fn();

beforeAll(() => {
  console.log('🧪 Test suite starting...');
});

afterEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.clearAllMocks();
});