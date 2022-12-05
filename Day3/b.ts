export const x = "";

const input = await Deno.readTextFile("./input.txt");

const fixString = input.replace(/(\r\n|\n|\r)/gm, "-");
let string = fixString.split("-")

let total = 0;


for(let i = 0; i < string.length;){

    for(let j = 0; j < string[i].length; j++){

        if(string[i+1].includes(string[i][j]) && string[i+2].includes(string[i][j])){

            if(string[i][j] === string[i][j].toUpperCase()){
                total = total + (string[i][j].toLocaleLowerCase().charCodeAt(0) - 96) + 26;
                break;
            }else{
                total = total + (string[i][j].charCodeAt(0) - 96);
                break;
            }
        }
    }
    i = i+3
}

console.log(total)
