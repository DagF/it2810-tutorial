const path = require('path');
const dir = path.join(__dirname, 'src');

module.exports = {
    title: 'My Great Style Guide',
    updateWebpackConfig(webpackConfig) {

        // Your source files folder or array of folders, should not include node_modules
        console.log(dir)
        webpackConfig.module.loaders.push(
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: dir,
                loader: 'babel'
            },
            // Other loaders that is needed for your components
            {
                test: /\.css$/,
                include: dir,
                loader: 'style!css?modules&importLoaders=1'
            },
            {
                test: /\.scss$/,
                include: dir,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                include: dir,
                loader: 'ignore-loader'
            }
        );
        return webpackConfig;
    },
    components: dir + '/common/**/*.jsx'
};