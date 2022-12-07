export const x = "";

const input = await Deno.readTextFile("./input.txt");

const str = input.replace(/(\r\n|\n|\r)/gm, " ");
let str1 = str.split(" ");



let arr = [];

for(let i = 0; i <str1.length; i++){
    if(str1[i] !== ""){
        arr.push(str1[i].split(","));
    }
    
}


let fnum1 = 0;
let fnum2 = 0;
let snum1 = 0;
let snum2 = 0;

let totalContained = 0;


for(let i = 0; i <arr.length; i++){
    for(let j = 0; j < 2; j++){
        let indv = arr[i][j].split('-')
        
        if(fnum1 === 0){
            fnum1 = Number(indv[0]);
            fnum2 = Number(indv[1]);
        }else{
            snum1 = Number(indv[0]);
            snum2 = Number(indv[1]);

            if(fnum1 >= snum1 && fnum1 <= snum2){
                totalContained++
            }else if(fnum2 >= snum1 && fnum2 <= snum2){
                totalContained++
            }else if(snum1 >= fnum1 && snum1 <= fnum2){
                totalContained++
            }else if(snum2 >= fnum1 && snum2 <= fnum2){
                totalContained++
            }
            fnum1 = 0;
            fnum2 = 0;
            snum1 = 0;
            snum2 = 0;
        }
    }

}
    
console.log(totalContained)

