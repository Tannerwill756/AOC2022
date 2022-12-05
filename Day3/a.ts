export const x = "";

const input = await Deno.readTextFile("./input.txt");

const fixString = input.replace(/(\r\n|\n|\r)/gm, "-");
let string = fixString.split("-")

let total = 0;

string.forEach(string => {

    let middle = Math.floor(string.length / 2);
    let first = string.slice(0, middle);
    let second = string.slice(middle); 
    
    for (let i = 0; i < first.length; i++){
        if(second.includes(first[i])){
            if(first[i] === first[i].toUpperCase()){
                total = total + (first[i].toLocaleLowerCase().charCodeAt(0) - 96) + 26;
                break;
            }else{
                total = total + (first[i].charCodeAt(0) - 96);
                break;
            }

        }
        
    }
})

console.log(total)
