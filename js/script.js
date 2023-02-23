// Сделанно по видео из YouTube автор: Yura Koch
// https://www.youtube.com/watch?v=m5mOufSAX9Q

// Сохраняем в переменные Ноды для canvas и для его контекста

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

// задаем ширину и высоту canvas раную выстое экрана

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Определяем размер шрифту и задаем стиль тексту

const fontSize = 12;
context.font = `bold ${fontSize}px monospace`;

// Сохраняем в переменную символы для отображения

const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン"

// Создаем класс, для отрисовки колонки с символами

class Column {
    constructor(x, fontSize, canvasHeight, context) {
        this.x = x; // положение по X будет высчитываться из размера шрифта и ширины экрана 
        this.y = 0;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.context = context;
    }
    
    // метод отрисовки символа
    drawSymbol() {
        if (this.y === 0 && Math.random() < 0.97) {
            return
        }; // случайно пропускает запуск метода, если отрисовка начинаеться заново, для рандомного появления символов

        // тут мы получаем случайное число из длины наших символов и создаем переменную со случайным символом
        const charactersIndex = Math.floor(Math.random() * characters.length);
        const symbol = characters[charactersIndex];
        
        // выбираем цвет символа и отрисовываем символ в текщем положении координат
        
        this.context.fillStyle = "green";
        this.context.fillText(symbol, this.x, this.y)
        
        //  и проверяем Y, если он больше высоты экрана, обнуляем и символы рисуються снова
        if (this.y > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y += this.fontSize;
        }

    }
};

// Создаем пустой масств и высчитываем количество колонок для текущего экрана

const columns = [];
const columnsCount = canvas.width / fontSize;

// при помощи цикла, закидываем нужное нам количество колонок, исходя из просчитанного ранее

for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * fontSize, fontSize, canvas.height, context));
};

// Создаем функцию для отрисовки кадров

function animate() {
    // выбираем цвет и закрашиваем весь фон что-бы перекрыть предидущий символ прозрачным черным
    context.fillStyle = "rgba(0, 0, 0, 0.10)"; 
    context.fillRect(0, 0, canvas.width, canvas.height);

    // вызываем метод прорисовки символа у каждного объекта из нашего масива колонок
    columns.forEach(column => column.drawSymbol());

    // и через время снова вызываем эту функцию заново
    setTimeout(() => {requestAnimationFrame(animate)}, 40);
};  

// вызываем функцию анимации
animate();