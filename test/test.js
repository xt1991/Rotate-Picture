const pictureService = require('_services/pictures.services')
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

describe('Rotate Picture', function () {
  it('#grid = [[0, 16, 255],[8, 128, 32],[0, 0, 0]]; times = 1', function () {
    let grid = [
      [0, 16, 255],
      [8, 128, 32],
      [0, 0, 0]
    ]
    // K times
    const times = 1
    const result = []
    for (var i = 0; i < times; i++) {
      grid = pictureService.rotateMatrix(grid)
      result.push(JSON.parse(JSON.stringify(grid)))
    }
    console.log(result)
    const testResult1 = [[0, 8, 0], [0, 128, 16], [0, 32, 255]]
    expect(result[0]).to.eql(testResult1)
  })

  it('#grid = [[0, 16, 255],[8, 128, 32],[0, 0, 0]]; times = 2', function () {
    let grid = [
      [0, 16, 255],
      [8, 128, 32],
      [0, 0, 0]
    ]
    // K times
    const times = 2
    const result = []
    for (var i = 0; i < times; i++) {
      grid = pictureService.rotateMatrix(grid)
      result.push(JSON.parse(JSON.stringify(grid)))
    }
    console.log(result)
    const testResult1 = [[0, 8, 0], [0, 128, 16], [0, 32, 255]]
    const testResult2 = [[0, 0, 0], [32, 128, 8], [255, 16, 0]]
    expect(result[0]).to.eql(testResult1)
    expect(result[1]).to.eql(testResult2)
  })

  it('#grid = [[0, 16, 255],[8, 128, 32],[0, 0, 0]]; times = 3', function () {
    let grid = [
      [0, 16, 255],
      [8, 128, 32],
      [0, 0, 0]
    ]
    // K times
    const times = 3
    const result = []
    for (var i = 0; i < times; i++) {
      grid = pictureService.rotateMatrix(grid)
      result.push(JSON.parse(JSON.stringify(grid)))
    }
    console.log(result)
    const testResult1 = [[0, 8, 0], [0, 128, 16], [0, 32, 255]]
    const testResult2 = [[0, 0, 0], [32, 128, 8], [255, 16, 0]]
    const testResult3 = [[255, 32, 0], [16, 128, 0], [0, 8, 0]]
    expect(result[0]).to.eql(testResult1)
    expect(result[1]).to.eql(testResult2)
    expect(result[2]).to.eql(testResult3)
  })

  it('#grid = [[0, 16, 255],[8, 128, 32],[0, 0, 0]]; times = 4', function () {
    let grid = [
      [0, 16, 255],
      [8, 128, 32],
      [0, 0, 0]
    ]
    // K times
    const times = 4
    const result = []
    for (var i = 0; i < times; i++) {
      grid = pictureService.rotateMatrix(grid)
      result.push(JSON.parse(JSON.stringify(grid)))
    }
    console.log(result)
    const testResult1 = [[0, 8, 0], [0, 128, 16], [0, 32, 255]]
    const testResult2 = [[0, 0, 0], [32, 128, 8], [255, 16, 0]]
    const testResult3 = [[255, 32, 0], [16, 128, 0], [0, 8, 0]]
    const testResult4 = [[0, 16, 255], [8, 128, 32], [0, 0, 0]]
    expect(result[0]).to.eql(testResult1)
    expect(result[1]).to.eql(testResult2)
    expect(result[2]).to.eql(testResult3)
    expect(result[3]).to.eql(testResult4)
  })
})
