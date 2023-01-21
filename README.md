# invert-map

Invert JavaScript maps 🔄.

```js
const map = new Map();

map.set('foo', 'bar')
map.set('hello', 'world')

```
const invert = require('invert-map')

invert(map)

Map { bar => foo, world => hello }
```
