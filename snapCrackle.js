function snapCrackle(maxValue) {
  
let stringValor =''
    

for(let i=1; i<= maxValue; i++) {
      
        if(i%2 !== 0 && i%5 !== 0) {
        stringValor += ' Snap ,'
        }

        else if(i%5 == 0 && i%2 == 0){
        stringValor += ' Crackle ,'
        }

        else if(i%5 == 0 && i%2 !== 0) {
        stringValor += ' SnapCrackle ,'
        }
        else {
        stringValor += ` ${i} , `
        }


    }return stringValor
}
console.log(snapCrackle(12))