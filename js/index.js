//Напиши скрипт, который после нажатия кнопки Start, 
// раз в секунду меняет цвет фона body на случайное значение из массива используя 
// инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.stopBtn.disabled = true;

const bgColorChange = {
  //   isActive: false,
  start() {
    // if (this.isActive) {
    //   return;
    // }
    console.log("упс");
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    this.isActive = true;
    this.timerId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(this.timerId);
    // this.isActive = false;
  },
};

refs.startBtn.addEventListener(
  "click",
  bgColorChange.start.bind(bgColorChange)
);
refs.stopBtn.addEventListener("click", bgColorChange.stop.bind(bgColorChange));
