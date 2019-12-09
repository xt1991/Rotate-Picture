const pictureService = require('_services/pictures.services')

let grid = [
  [0, 16, 255],
  [8, 128, 32],
  [0, 0, 0]
]
// K times
const times = process.argv.slice(2)[0] ? parseInt(process.argv.slice(2)[0]) : 1

for (var i = 0; i < times; i++) {
  grid = pictureService.rotateMatrix(grid)
  console.log(grid)
}
