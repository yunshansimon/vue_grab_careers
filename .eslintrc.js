module.exports = {
  parser:'babel-eslint',
  plugins: [
    'html'
  ],
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6
  }
}
