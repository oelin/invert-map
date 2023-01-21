# invert-map

Invert JavaScript maps 🔄.


## API

Create a map.

```js
> const map = new Map();
> map.set('foo', 'bar')
> map.set('hello', 'world')
```

Invert it.

```js
> const invert = require('invert-map')
> invert(map)

Map { bar => foo, world => hello }
```
