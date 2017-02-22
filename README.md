![alt text](https://github.com/codescheme/svg-icons-css/blob/master/img/lss511.png?raw=true "icons")

![alt text](https://github.com/codescheme/svg-icons-css/blob/master/img/lss512.png?raw=true "css-controlled icon fills")

# CSS-controlled Polychrome SVG Icons

Font-face icons (Font Awesome, etc.) are essentially monochrome and, probably, will always be.
 
By this method of adding selectors to individual paths, SVG presentation attributes can be used as CSS properties and therefore the elements of the resultant 'image' can be configured, edited, independently. Add some Sass and who knows...

(For the time being, presented here in 3 formats: svg data urls, png data urls, and a fallback CSS file with references to .png image files.) 

Entering a different CSS world of ```fill``` rather than ```background``` and ```stroke``` rather than ```border```.
```fill-opacity``` seems to work particularly well, even at present.

```
stroke-dashoffset, stroke-linecap, stroke-linejoin, stroke-mitrelimit, stroke-opacity...
fill-rule, filters...
glyph-orientation-horizontal, glyph-orientation-vertical... 
```

## Installation

A standard ```grunt``` setup, with:

``` 
npm install grunt-grunticon --save-dev
```

Follow the recipe as per https://github.com/filamentgroup/grunticon 

For any production use, best to clean up and minimise the source svgs with ```svgmin```

```
npm install grunt-svgmin --save-dev 
```
 
