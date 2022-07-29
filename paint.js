export class Paint {
    constructor(color, posX, posY){
        this.color = color
        this.posX = posX
        this.posY = posY
        this.width = 25
        this.height = 25
        this.model = this.create()
    }
    create(){
        const paint = document.createElement("div")
        const type = document.createAttribute("paint")
        paint.setAttributeNode(type)

        paint.style.backgroundColor = this.color
        paint.style.position = "absolute"
        paint.style.width = this.width + "px"
        paint.style.height = this.height + "px"
        paint.style.borderRadius = "50%"
        paint.style.left = (this.posX - (this.width / 2)) + "px"
        paint.style.top = (this.posY - (this.width / 2)) + "px"

        document.body.appendChild(paint)
        return paint
    }
    get paint_model(){
        return this.model
    }
}
