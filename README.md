## Leaflet Collapse Button
A HTML5 collapse button plugin for Leaflet.

[![NPM version](https://img.shields.io/npm/v/leaflet-collapse-button.svg)](https://www.npmjs.com/package/leaflet-collapse-button)

<a href="https://jsfiddle.net/muhammedkalender/wb7qx8ad/">View Demo</a>

![Product Demo](media/demo.gif)

### Usage

``` js
map.addControl(new L.Control.CollapseButton ({
	currentStatus: 1,	
	position: 'topright',	
	title: 'Hide Panel',	
	titleCancel: 'Show Panel',	
	elementId: 'map',	
	targetElementId: 'cards',	
	hideClasses: 'col-md-12',	
	showClasses: 'col-md-8',	
	targetHideClasses: 'hidden',	
	targetShowClasses: 'col-md-4'
}));
```

### Including via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/leaflet-collapse-button@0.0.5/dist/leaflet.collapse-button.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-collapse-button@0.0.5/dist/leaflet.collapse-button.min.css">
```

### Install via NPM
```html
npm i leaflet-collapse-button
```

## License

MIT License

Copyright (c) 2021 Muhammed Kalender

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
