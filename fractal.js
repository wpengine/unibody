'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Unibody');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
// fractal.web.set('', path.join(__dirname, 'public'));

fractal.web.set('static.path', __dirname + '/public');

/*
 * Customize the fractal theme
 */
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

const myCustomisedTheme = mandelbrot({
    lang: 'en-us',
    skin: "teal",
    panels: ["html", "context", "info", "notes"]
    // any other theme configuration values here
});
fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default


/*
 * Build config
 */
fractal.web.set('builder.dest', __dirname + '/build');
