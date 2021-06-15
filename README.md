# UNIBO APPLICATION THEME 

This is the official Unibo Application Theme based on [Foundation for Sites](https://get.foundation/).
Unibo Application Theme is suited for the creation and development of application website in University of Bologna network.

Unibo Application Theme inherits all the features, components, mixins, grid systems, and more already present in Foundation 6.
It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 10 or greater recommended, tested with 10)
- [SASS node-sass](https://github.com/sass/node-sass/), © Andrew Nesbitt, license MIT
- [Git](https://git-scm.com/)


### How clone and create a new site from this package

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/unibo/application_theme.git projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn
```

Finally, run `yarn start` to run Gulp. 

Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000/
```

If you need to create compressed, production-ready assets, run.


```
yarn run build
```
## Repository structure 
Here a brief description for repository structure.

```
src
├─ assets         All static files, scss and javascript files.
   ├─ img         * Images used in Application Unibo Theme.
   ├─ js          * All javascript that are not incorporated via webpack and app.js for configuration.
   ├─ scss        * All scss divided into folders by functionality
   └─ webfonts    * Used Fonts in Application Unibo Theme.
├─ data       
└─ layout         List of used template in theme.
   ├─ default     * Default Template for pages created in folder "pages".
   ├─ styleguide  * Template used for styleguide pages.
└─ pages          List of all pages.
   ├─ index       * Main page of the theme, to be updated manually, to view the content list.
   ├─ styleguide  * All styleguide pages.
└─ partials       All html snippets used in pages.
```
## Bug reports and requests for help 
Is something get wrong or it's not what you expected? Please open an issue in this repository on github. Thank you for contributing!

## License software of third part component

The components distributed with Unibo Applicatione Theme that have their own license other than CC0 are listed below. 

  - [Foundation](foundation.zurb.com/) 6.6.3 ©  Zurb Foundation, MIT license.
  - [Cinzel Google Font](https://fonts.google.com/specimen/Cinzel) ©  Google, MIT license.
  - [Font Awesome Free](https://fontawesome.com) 5.15.3 © License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
  - [Monokai Sublime style](http://nn.mit-license.org). Derived from Monokai by noformnocontent http://nn.mit-license.org/
  - [What Input](https://github.com/ten1seven/what-input) is freely available under the MIT License.
  - [Highlight.js](https://highlightjs.org/) is released under the BSD License
  - [jQuery](https://jquery.com/) © jQuery Foundation, MIT license.  
  - [placeimg.com](https://placeimg.com) sample photos from 500px and Flickr, Creative Commons Attribution. 
  - [placeholder.com/](https://placeholder.com/) Free Image Placeholder Service C/O https://placeholder.com/ with dimension informations.
  - Background photo by [artsandcrafts](https://stocksnap.io/author/artsandcrafts), CC0 License.

### Main dependencies for the build and development
  - [NodeJS](https://nodejs.org/en/) (Version 10 or greater recommended, tested with 10)
  - [SASS node-sass](https://github.com/sass/node-sass/), © Andrew Nesbitt, license MIT

## How to use
Using this styleguide is very simple and immediate. Copy the html code of the element you want to use in your application and include the relative scss in app.scss (or your main scss of project).
Example can be found in our [demo site](https://unibo.github.io/application_theme/).

## Copyright and terms of use 
The license of Unibo Applicatione Theme is BSD 3-Clause and is visible in LICENSE file.

If you use Unibo Applicatione Theme for your projects, the link to this repository must be reported in the software interface exposed to the public.

### Logos and Brand 
- Institutional Brand is owned by the University of Bologna and its legal use is permitted under the conditions described at this page [Legal Use of the Institutional Brand by third parties](https://www.unibo.it/en/university/who-we-are/image-identity-brand/legal-use-of-trade-mark-by-third-parties)
- The DSA Logo (`ssologo36x36.png`) is is owned by the University of Bologna - [CeSIA - Settore Sistemi e middleware - Ufficio Unità specialistica Identità digitale](https://www.unibo.it/it/ateneo/organizzazione/amministrazione-generale/1931/2108/2375/index.html) and its use is permitted only for internal university applications that use DSA directory system.
