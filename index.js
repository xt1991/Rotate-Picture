const pictureService = require('_services/pictures.services')

let grid = [
  [0, 16, 255],
  [8, 128, 32],
  [0, 0, 0]
]
// K times
const K = 1

for (var i = 0; i < K; i++) {
  grid = pictureService.rotateMatrix(grid)
  console.log(grid)
}
