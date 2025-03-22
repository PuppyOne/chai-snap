module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => /chore\(release\):.*\[skip ci\]/i.test(message)],
};
