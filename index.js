const _ = require('lodash')
const redis = require('redis')
const fs = require('fs')

function getMultisetCombinations(k, objects, callback) {
    var j = k, j_1 = k, q = k
    var r = objects.length - 1
    var a = _.range(0, k).map(function () { return 0 })
    while (true) {
        callback(_.range(0, k).map(function (i) { return objects[a[i]] }))
        j = k - 1
        while (j >= 0 && a[j] == r)--j
        if (j < 0) break
        j_1 = j
        while (j_1 <= k - 1) {
            a[j_1] = a[j_1] + 1
            var q = j_1
            while (q < k - 1) {
                a[q + 1] = a[q]
                ++q
            }
            ++q
            j_1 = q
        }
    }
}

getMultisetCombinations(8, [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
], (results) => {
    fs.writeFile('test.bin', _.join(results), _.noop)
})
