import eslintConfig from '../index';
import main from '../ruleset/main';
import react from '../ruleset/react';
import extras from '../ruleset/extras';

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

  it('should have main rules', () => {
    expect(typeof main).toBe('object');
    expect(main instanceof Object).toBe(true);
  });

  it('should have react rules', () => {
    expect(typeof react).toBe('object');
    expect(react instanceof Object).toBe(true);
  });

  it('should have extras rules', () => {
    expect(typeof extras).toBe('object');
    expect(extras instanceof Object).toBe(true);
  });
});
