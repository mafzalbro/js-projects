const canvas = document.getElementById('canvas')

const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;

canvas.height = canvasHeight
canvas.width = canvasWidth

canvas.style.background = "#eee"

const context = canvas.getContext('2d')


const createCircle = (x, y, name) => {
    context.beginPath()
    context.font = "20px Arial"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(name, x, y)
    context.lineWidth = 1
    context.arc(x, y, 50, 0, Math.PI * 2, false)
    // context.arc(100, 100, 30, 100, 40, false)
    context.stroke()
    context.closePath()
}

const names = ["Ali", "Afzal", "Footer", "Kakoo"]

names.forEach((name, i) => {
    i = i === 0 ? 1 : ++i
    createCircle(100, i * 100, name)   
})