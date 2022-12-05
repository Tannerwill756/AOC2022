export const x = "";

const input = await Deno.readTextFile("./input.txt");

const fixString = input.replace(/(\r\n|\n|\r)/gm, "-");
let string = fixString.split("-")

let oppenent:ObjectType = {
    'A':'Rock',
    'B':'Paper',
    'C':'Scissors'
}
let me:ObjectType = {
    'X':'Rock',
    'Y':'Paper',
    'Z':'Scissors'
}
let winConditions:ObjectType = {
    'X':'C',
    'Y':'A',
    'Z':'B'
}

let xtra:ObjectType = {
    'X':1,
    'Y':2,
    'Z':3
}

let score = 0;

for(let i=0; i < string.length; i++){

    if(oppenent[string[i][0]] === me[string[i][2]]){
        score = score + 3 + xtra[string[i][2]];
    }else if(winConditions[string[i][2]] === string[i][0]){
        score = score + 6 + xtra[string[i][2]];
    }else{
        score = score + xtra[string[i][2]];
    }

}
console.log(score);

// A = Rock      X = Rock = 1pt
// B = Paper     Y = Paper = 2pts
// C = Scissors  Z = Scissors = 3pts

// Win = 6 pts
// Draw = 3 pts
// Loss = 0 pts