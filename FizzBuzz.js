/*function to print the numbers 1 to 100 replacing all multiples of 3 with the word "Fizz", multiples of 5 with the word "Buzz" 
and the multiples of 3 and 5 with the word"FizzBuzz" */
function PrintFizzBuzz(){
    for(let i=1; i<=100; i++){
        if(i%3 === 0 && i%5 !==0){
            console.log('Fizz \n')
        }else if(i%3 !== 0 && i%5 ===0){
            console.log('Buzz \n')
        }else if(i%3 === 0 && i%5 === 0){
            console.log('FizzBuzz \n')
        }else{
            console.log(i + '\n')
        }
    
    }
}

PrintFizzBuzz();