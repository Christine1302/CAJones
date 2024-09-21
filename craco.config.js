// module.exports = {
//   style: {
//     postcss: {
//       plugins: [
//         require('tailwindcss'),
//         require('autoprefixer'),
//       ],
//     },
//   },
// }

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Babel loader for modern JavaScript (to fix the minification issue)
      webpackConfig.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules\/(?!(@remix-run\/router))/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      });

      // Terser for minification (optional, in case react-scripts minification fails)
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              ecma: 2020, // Adjust to the ECMAScript version you're targeting
              parse: {},
              compress: {},
              mangle: true,
              output: {
                comments: false,
              },
            },
          }),
        ];
      }

      return webpackConfig;
    },
  },
};
