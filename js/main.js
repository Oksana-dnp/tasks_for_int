//fizzBuzz

function fizzBuzz(num) {
    for(let i=1; i <= num; i++){
        let text;
        if(i % 3 === 0 || i % 5 === 0){
            i % 5 != 0 ? text = 'fizz' : i % 3 != 0 ? text = 'buzz' : text = 'fizzbuzz';
            console.log(text)
        }
        else{
            console.log(i)
        }
    }    
}
fizzBuzz(22)

 