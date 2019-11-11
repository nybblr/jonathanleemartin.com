module.exports = {
  map: false,
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({
      stage: 3
    }),
    require('cssnano')({
      preset: [
        'default', {
          mergeLonghand: false
        }
      ]
    })
  ]
};
