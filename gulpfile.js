const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
const sourceVendor = 'resources/assets/vendor/';
const publicVendor = 'public/vendor/';
const fontDir = 'public/fonts/';
const adminJsDir = 'public/js/admin/';

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js');
mix.copy(
    sourceVendor + 'bootstrap/dist/js/bootstrap.min.js',
    publicVendor + 'bootstrap/bootstrap.min.js'
);
mix.copy(sourceVendor + 'font-awesome/fonts', fontDir);
});
