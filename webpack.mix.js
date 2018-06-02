let mix = require('laravel-mix');
// mix.webpackConfig({
//     module: {
//         rules: [
//             {
//                 test: /\.styl/,
//                 loader: "stylus-loader"
//             }
//         ]
//     }
// });

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/assets/js/app.js', 'public/js')
    .stylus('resources/assets/sass/app.styl', 'public/css');
