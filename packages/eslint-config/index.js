module.exports = {
  extends: [
    './ruleset/main',
    './ruleset/react',
    './ruleset/extras',
  ].map(require.resolve),
};
