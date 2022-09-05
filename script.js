const containerEl =  document.querySelector('.container');

const positive = ["Nothing is Impossible", "You are 'Amazing'", "Choose to shine", "live what you love" , "Short & Sweet"];

let positiveIndex = 0;
let positiveChar = 0;
updateText();

function updateText(){
    positiveChar++;
    containerEl.innerHTML = `<h1>${positive[positiveIndex].slice(0, positiveChar)}</h1>`;
    if(positiveChar == positive[positiveIndex].length){
        positiveIndex++;
        positiveChar = 0;
    }

    if(positiveIndex == positive.length){
        positiveIndex = 0;
    }
    setTimeout(updateText, 400);
}