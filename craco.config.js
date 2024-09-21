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

module.exports = {
  style: {
    postcss: {
      mode: "extends", // Ensure this is set to "extends"
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      // Optional custom webpack configurations
      return webpackConfig;
    },
  },
};
