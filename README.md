# fancy-unicode: Turn boring plain text into pretty Unicode characters.
[![Netlify Status](https://api.netlify.com/api/v1/badges/d74f9973-6bc5-4a95-bbe2-85b12cd0adf2/deploy-status)](https://app.netlify.com/sites/fancy-unicode/deploys) __Deploying to [fancyunicode.com](https://fancyunicode.com/)!__

Okay I'll level with you: I made this so I could have fun changing my Twitter name into neat looking fonts.

## Screenshot

![Main page](/screenshot.png)

## Making changes

Simon uses Sass as a CSS preprocessor. Here are the [installation instructions](https://sass-lang.com/install) and the [usage reference](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass).

Watch changes to the Sass files with: 

```
sass --watch sass/min.sass:static/css/min.css
```

Compile the Sass files to compressed CSS with:

```
sass sass/min.sass:static/css/min.css --style compressed
```

## License
Copyright (C) 2018-2019 Victoria Lai

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.