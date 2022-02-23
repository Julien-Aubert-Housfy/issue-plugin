const mix = require('laravel-mix');
const env = process.env;

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            happyPackMode: mix.inProduction() ? false : true,
                            transpileOnly: mix.inProduction() ? false : true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'components': __dirname + '/resources/assets/ts/components/',
            'mixins': __dirname + '/resources/assets/ts/mixins/',
            'libraries': __dirname + '/resources/assets/ts/libraries/',
            'api': __dirname + '/resources/assets/ts/api/',
            '@': __dirname + '/resources/assets/ts/'
        },
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
    },
    watchOptions: {
        ignored: /node_modules/
    }
});

mix
    .disableNotifications()
    .setPublicPath('public/build') // Define where the "mix-manifest.json" will be stored
    .setResourceRoot('/build')
    .browserSync({
        proxy: env.APP_URL
    })
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}

mix
    .extract()
    .ts('resources/assets/ts/main.ts', 'public/build/js/app.js')
    .sass('resources/assets/sass/app.scss', 'public/build/css/app.css')
    .styles([
        'node_modules/vuetify/dist/vuetify.min.css',
    ], 'public/build/css/vuetify.css');
