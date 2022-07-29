import { Paint } from "./paint.js"

const paintBtns = document.querySelectorAll(".paint-btns")
const clearButton = document.querySelector("#clear-btn")
const eraseButton = document.querySelector("#erase-btn")
const redoButton = document.querySelector("#redo-btn")
const btns = document.querySelectorAll(".btns")

let currentlyHolding = false
let currentlyHovering = false
let color = "" || "black"
let eraseColor = document.body.style.backgroundColor
let redoPaint = []

class PaintHandler {
    static deleteAllPaint(){
        const PAINT = document.querySelectorAll("[paint]")
        PAINT.forEach((paint) => document.body.removeChild(paint))
    }
    
    static redo(){ // not completely done; works for now
        for (let i = 0; i < redoPaint.length; i++){
            document.body.removeChild(redoPaint[i])
        }
    }
    
    static erase(){

    }
}

paintBtns.forEach((paintBtn) => {
    paintBtn.addEventListener("mouseover", () => currentlyHovering = true)
    paintBtn.addEventListener("mouseout", () => currentlyHovering = false)
    paintBtn.addEventListener("click", () => color = paintBtn.style.backgroundColor)
})
btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => currentlyHovering = true)
    btn.addEventListener("mouseout", () => currentlyHovering = false)
})

window.addEventListener("mousedown", (event) => {
    if (!currentlyHolding && !currentlyHovering){
        currentlyHolding = true
        redoPaint = []
        const paint = new Paint(color, event.clientX, event.clientY)
        redoPaint.push(paint.paint_model)
    }
})
window.addEventListener("mouseup", (event) => {
    if (currentlyHolding){
        currentlyHolding = false
    }
})
window.addEventListener("mousemove", (event) => {
    if (currentlyHolding && !currentlyHovering){
        const paint = new Paint(color, event.clientX, event.clientY)
        redoPaint.push(paint.paint_model)
    }
})

clearButton.addEventListener("click", PaintHandler.deleteAllPaint)
redoButton.addEventListener("click", PaintHandler.redo)
eraseButton.addEventListener("click", PaintHandler.erase)
