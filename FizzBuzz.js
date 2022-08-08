//function to print the numbers 1 to 100 replacing all multiples of 3 with the word "Fizz"
function PrintFizz(){
    for(let i=1; i<=100; i++){
        if(i%3 === 0){
            console.log('Fizz \n')
        }else{
            console.log(i + '\n')
        }
    
    }
}

PrintFizz();