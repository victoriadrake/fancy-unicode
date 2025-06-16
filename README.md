# fancy-unicode: Turn boring plain text into pretty Unicode characters.

Read about [how a substitution cipher algorithm works here!](https://victoria.dev/archive/a-unicode-substitution-cipher-algorithm/)

Okay I'll level with you: I made this so I could have fun changing my Twitter name into neat looking fonts.

## Screenshot

![Main page](/screenshot.png)

## Making changes

This page uses Sass as a CSS preprocessor. Here are the [installation instructions](https://sass-lang.com/install) and the [usage reference](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass).

Watch changes to the Sass files with: 

```sh
sass --watch sass/min.sass:css/min.css
```

Compile the Sass files to compressed CSS with:

```sh
sass sass/min.sass:css/min.css --style compressed
```

## License
Copyright (C) 2018-2025 Victoria Drake

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
