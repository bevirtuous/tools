import Config from '../index';

describe('Unit Tests', () => {
  it('exports an object as config', () => {
    expect(typeof Config).toBe('object');
    expect(Config instanceof Object).toBe(true);
  });

  it('defines the relevant file extends', () => {
    expect(Config.moduleFileExtensions instanceof Array).toBe(true);
    expect(Config.moduleFileExtensions.length).toBe(3);
    expect(Config.moduleFileExtensions.includes('js')).toBe(true);
    expect(Config.moduleFileExtensions.includes('jsx')).toBe(true);
    expect(Config.moduleFileExtensions.includes('json')).toBe(true);
  });

  it('defines module name mapper config', () => {
    expect(Config.moduleNameMapper instanceof Object).toBe(true);
    expect(Object.keys(Config.moduleNameMapper).length).toBe(1);
  });
});
