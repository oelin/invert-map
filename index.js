module.exports = function invert(map) {

        const inverse = new Map()

        for (let key of map.keys()) {
                inverse.set(map.get(key), key)
        }

        return inverse
}
