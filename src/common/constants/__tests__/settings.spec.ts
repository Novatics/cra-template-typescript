import { DEBOUNCE_DELAY, PER_PAGE_OPTIONS } from '../settings';

describe('Imported constants', () => {
  it('Check value set in DEBOUNCE_DELAY', () => {
    expect(DEBOUNCE_DELAY).toEqual(500);
  });

  it('Count the number of element using in PER_PAGE_OPTIONS', () => {
    expect(PER_PAGE_OPTIONS.length).toEqual(4);
  });
});
