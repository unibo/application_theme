# UNIBO APPLICATION TEMPLATE - based on ZURB Template

This is the official Unibo Application Template for use with [Foundation for Sites](https://get.foundation/). 
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
- [SASS node-sass](https://github.com/sass/node-sass/), © Andrew Nesbitt, licenza MIT
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

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000/
```

To create compressed, production-ready assets, run.


```
yarn run build
```

## License software of third part component

The components distributed with Unibo Applicatione Theme that have their own license other than CC0 are listed below. 

  - [Foundation](foundation.zurb.com/) ©  Zurb Foundation, licenza MIT
  - [Slick](http://kenwheeler.github.io/slick/) ©  kenwheeler, licenza MIT
  - [Cinzel Google Font](https://fonts.google.com/specimen/Cinzel) ©  Google, licenza MIT
  - [Font Awesome Free](https://fontawesome.com) 5.15.3 © License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
  - [Monokai Sublime style](http://nn.mit-license.org). Derived from Monokai by noformnocontent http://nn.mit-license.org/
    What Input[https://github.com/ten1seven/what-input] is freely available under the MIT License.
    Highlight.js[https://highlightjs.org/] is released under the BSD License
    jQuery[https://jquery.com/] © jQuery Foundation, licenza MIT    

### Principali dipendenze per la fase di compilazione e sviluppo
  - [NodeJS](https://nodejs.org/en/) (Version 10 or greater recommended, tested with 10)
  - [SASS node-sass](https://github.com/sass/node-sass/), © Andrew Nesbitt, licenza MIT
    
La licenza di Unibo Applicatione Theme è BSD 3-Clause ed è visibile nel file LICENSE.