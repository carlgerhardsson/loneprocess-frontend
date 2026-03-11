import { describe, it, expect, beforeEach } from 'vitest';

describe('LocalStorage State Management', () => {
  const STORAGE_KEY = 'loneportalen_periodData';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and load period data', () => {
    const periodData = {
      '2025-03': {
        '1': { done: false, status: 0, comment: '', checklist: {} },
        '2': { done: true, status: 100, comment: 'Klar', checklist: {} }
      }
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(periodData));
    const loaded = JSON.parse(localStorage.getItem(STORAGE_KEY));

    expect(loaded).toEqual(periodData);
  });

  it('should handle multiple periods independently', () => {
    const periodData = {
      '2025-03': { '1': { done: false, status: 0 } },
      '2025-04': { '1': { done: true, status: 100 } }
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(periodData));
    const loaded = JSON.parse(localStorage.getItem(STORAGE_KEY));

    expect(loaded['2025-03']['1'].done).toBe(false);
    expect(loaded['2025-04']['1'].done).toBe(true);
  });

  it('should persist checklist state per activity', () => {
    const activityState = {
      done: false,
      status: 33,
      comment: 'Test',
      checklist: {
        '101': true,
        '102': false,
        '103': false
      }
    };

    const periodData = { '2025-03': { '1': activityState } };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(periodData));
    
    const loaded = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(loaded['2025-03']['1'].checklist['101']).toBe(true);
    expect(loaded['2025-03']['1'].status).toBe(33);
  });
});