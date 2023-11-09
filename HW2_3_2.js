class Button {
    constructor(width, height, type = "button", color = "green") {
        this.width = width
        this.height = height
        this.type = type
        this.color = color
        this.props = {type: this.type, color: this.color, width: this.width, height: this.height}
    };
    onClick() {
        console.log(this.props)

    }
}
let clickButton = new Button (100, 30)

clickButton.onClick();

testButton(clickButton, 70, 30, "button", "green")

function testButton (button, expectedWidth, expectedHeight, expectedType, expectedColor) {
if (
    button.width === expectedWidth && 
    button.height === expectedHeight && 
    button.type === expectedType && 
    button.color === expectedColor
 ) {
    console.log("Correct") 
} else {
    console.log("Incorrect")
}
}