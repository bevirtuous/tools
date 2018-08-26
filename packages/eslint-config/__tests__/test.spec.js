import eslintConfig from '../index';

describe('Config', () => {
  it('should be an object', () => {
    expect(typeof eslintConfig).toBe('object');
    expect(eslintConfig instanceof Object).toBe(true);
  });

  it('should have extends property', () => {
    expect(typeof eslintConfig.extends).toBe('object');
    expect(eslintConfig.extends instanceof Array).toBe(true);
  });

  it('should extend 3 groups of rules.', () => {
    expect(eslintConfig.extends.length).toBe(3);
  });
});
