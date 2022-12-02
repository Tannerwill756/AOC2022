export const x = "";

const input = await Deno.readTextFile("./input.txt");

let currentNumber = '';
let currentTotal = 0;

let highestTotal = 0;

const string = input.replace(/(\r\n|\n|\r)/gm, "-");

// 35,987

for(let i = 0; i < string.length; i++){
    if(string[i] === '-' && string[i+1] === '-'){
        currentTotal = currentTotal + Number(currentNumber);
        if(currentTotal > highestTotal){
            highestTotal = currentTotal;
        }
        currentTotal = 0;
        currentNumber = '';
        continue;
    }
    if(string[i] === '-' && string[i+1] !== '-'){
        currentTotal = currentTotal + Number(currentNumber);
        currentNumber = '';
        continue;
    }
    
    currentNumber = currentNumber + string[i];

}

console.log(highestTotal)