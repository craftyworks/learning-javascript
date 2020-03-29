$(document).ready(function () {
  'use strict'
  paper.install(window)
  paper.setup(document.getElementById('mainCanvas'))

  const c = Shape.Circle(200,200,80)
  c.fillColor = 'black'
  const text = new PointText(200,200)
  text.justification = 'center'
  text.fillColor = 'white'
  text.fontSize = 20
  text.content = 'hello world'

  drawCircle()

  paper.view.draw()
})

function drawCircle() {

  const tool = new Tool()
  tool.onMouseDown = function (event) {
    const c = Shape.Circle(event.point.x, event.point.y, 20)
    c.fillColor = 'green'
  }

}

