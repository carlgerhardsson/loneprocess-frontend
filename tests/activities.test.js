import { describe, it, expect } from 'vitest';

describe('Activities', () => {
  const mockActivity = {
    id: 1,
    processNr: '1.1',
    phase: 'fore',
    name: 'Kontrollera driftsbilden',
    person: 'Tua Jonasson',
    done: false,
    status: 0,
    comment: '',
    checklist: [
      { id: 101, name: 'Kontrollera körningsstatus', done: false },
      { id: 102, name: 'Kontrollera period', done: false },
      { id: 103, name: 'Bekräfta AGI-körning', done: false }
    ]
  };

  it('should calculate status based on completed checklist items', () => {
    const total = mockActivity.checklist.length;
    const done = mockActivity.checklist.filter(i => i.done).length;
    const expectedStatus = Math.round((done / total) * 100);
    
    expect(expectedStatus).toBe(0);
    
    // Mark first item as done
    mockActivity.checklist[0].done = true;
    const doneAfter = mockActivity.checklist.filter(i => i.done).length;
    const newStatus = Math.round((doneAfter / total) * 100);
    
    expect(newStatus).toBe(33);
  });

  it('should mark activity as done when all checklist items are complete', () => {
    mockActivity.checklist.forEach(item => item.done = true);
    const allDone = mockActivity.checklist.every(i => i.done);
    
    expect(allDone).toBe(true);
  });

  it('should have correct phase classification', () => {
    expect(['fore', 'kontroll', 'efter']).toContain(mockActivity.phase);
  });
});