exports.flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
)

exports.rotateMatrix = matrix => (
  this.flipMatrix(matrix.reverse())
)
