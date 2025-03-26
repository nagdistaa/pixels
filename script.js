
const container = document.querySelector(".container");

let containerSize = window.innerWidth 
let pixelSize = 20;

let rowsNumber = containerSize / pixelSize
let colsNumber = containerSize / pixelSize

for (let row = 0; row < rowsNumber; row++) {
    for (let col = 0; col < colsNumber; col++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.top = `${row * pixelSize}px`;
        pixel.style.left = `${col * pixelSize}px`;
        pixel.onclick = (e)=>{
            pixel.classList.toggle("active");
           
        }
        container.appendChild(pixel);
    }
}
