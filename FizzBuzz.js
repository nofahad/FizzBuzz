/*function to print the numbers 1 to 100 replacing all multiples of 3 with the word "Fizz", multiples of 5 with the word "Buzz" 
and the multiples of 3 and 5 with the word "FizzBuzz". Replaces multiples of 7 with "Bang", multiples of 7 and 3 with "FizzBang
, multples of 7 and 5 with "BuzzBang". Replaces multiples of 11 with Bong*/

function PrintFizzBuzzBangBong(){
    for(let i=1; i<=100; i++){
        if(i%3 === 0 && i%5 !==0 && i%7 !==0 && i%11 !==0){ 
            console.log('Fizz \n')
        }else if(i%3 !== 0 && i%5 ===0 && i%7 !==0 && i%11 !==0){ 
            console.log('Buzz \n')
        }else if(i%15 === 0){ 
            console.log('FizzBuzz \n')
        }else if(i%7 === 0 && i%3 !==0 && i%5 !==0 && i%11 !==0){ 
            console.log('Bang \n')
        }else if(i%21 === 0){ 
            console.log('FizzBang \n')
        }else if(i%35 === 0){ 
            console.log('BuzzBang \n')
        }else if(i%11 === 0){ 
            console.log('Bong \n')
        }else{ 
            console.log(i + '\n')
        }
    
    }
}

PrintFizzBuzzBangBong();