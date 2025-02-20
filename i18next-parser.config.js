module.exports = {
  locales: ['ru', 'en'],
  output: 'src/locales/$LOCALE.json',
  input: ['src/**/*.{js,ts,tsx}'],
  defaultValue: (lng, ns, key) => key,
  sort: true
};
