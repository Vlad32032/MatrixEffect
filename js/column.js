const characters = "123456789"

class Column {
constructor(x, fontSize, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.context = context;
}

    drawSymbol() {
        const charactersIndex = Math.floor(Math.random() * characters.length);
        const symbol = characters[charactersIndex];

        this.context.fillText(symbol, this.x, this.y)
        this.y += this.fontSize;
    }
}