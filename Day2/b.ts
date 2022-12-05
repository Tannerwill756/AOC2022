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
    'C':'X',
    'A':'Y',
    'B':'Z'
}
let loseConditions:ObjectType = {
    'C':'Y',
    'A':'Z',
    'B':'X'
}

let xtra:ObjectType = {
    'X':1,
    'Y':2,
    'Z':3
}

let score = 0;

for(let i=0; i < string.length; i++){

    if(string[i][2] === 'Y'){
        if(string[i][0] === 'A'){
            score = score + 3 + xtra['X'];
        }
        if(string[i][0] === 'B'){
            score = score + 3 + xtra['Y'];
        }
        if(string[i][0] === 'C'){
            score = score + 3 + xtra['Z'];
        }
    }else if(string[i][2] === 'Z'){
        score = score + 6 + xtra[winConditions[string[i][0]]];
    }else{
        score = score + xtra[loseConditions[string[i][0]]];
    }

}
console.log(score);

// A = Rock      X = Rock = 1pt         X = Lose
// B = Paper     Y = Paper = 2pts       Y = Draw
// C = Scissors  Z = Scissors = 3pts    Z = Win

// Win = 6 pts
// Draw = 3 pts
// Loss = 0 pts