# Replacement of about://newtab in React.js
## Demo
https://aerfio.github.io/newtab_page
## Local instalation
To run it locally use those commands inside project folder:
### `npm install`
and then
### `npm start`

# Features

## Searchbox

Search box uses google.pl, unless you use one of special flags:
* `!y` searches Youtube
* `!t` translates what you wrote from english to polish languege
* `!p` the other way

## 4chan redirecting

Type `chan` and then name of the board you want, without `/`, for example:

#### `chan wg` 

redirects you to [https://boards.4chan.org/wg/](https://boards.4chan.org/wg/)

## Terminal

Type in `t` or `term` into searchbox to show terminal in which you have just type `help` to know available commands. 

## Two independent note boxes

Because I use the one in the top-left corner as long-term notes, and those under `Todo` button for temporary shit.

## Neat studies classes plan

Hover over top right corner of screen (there's grey handle). Because I tend to forget this shit easily, so I need fast way to remember it.

## Additional notes

Don't forget that if you want to have working weather forecast in terminal then you have to fill `/src/modules/OpenWeatherMapApi.js` with your own api key and city.

Also fill in `/src/modules/links/links.js` with your own links.
