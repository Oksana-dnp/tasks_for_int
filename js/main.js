//anagramma

let a = 'hello';
let b = 'oLeh';

function checkAnagram(str1,str2){
    
    return [...(str1.toLowerCase())].sort().toString() === [...(str2.toLowerCase())].sort().toString();

}
console.log(checkAnagram(a,b));


//IsPrime 

function getPrime(num) {
    //create two arrays , one  for not prime numbers, one for prime numbers
    let seive = [];
    let primes = [];
    //create the loop
    for (let i = 2; i <= num; i++) {
        if (!seive[i]) {
            primes.push(i);
            //ми маємо виключити всі цифри, які діляться на i, наприклад при першій ітерації, всі, що діляться на 2 і додати їх в масив "сито"
            for (let j = i * 2; j <= num; j += i) {
                seive[j] = true;
            }
        }
    }
    return primes;
}


console.log('getPrime(11) ', getPrime(800))


//merge intervals

let arr = [[1,3], [15,18],[2,6], [7,10]]
console.log(arr[0].length-1)
//[[1,6],[8,10],[15,18]]
let interval2 = [[1,4], [4,5]];

function merge(intervals){

    if(intervals.length < 2) return intervals;

    intervals.sort((a,b) => a[0] - b[0]);

    let result = [intervals[0]];
    for(let interval of intervals){
        //recent равно последнему интервалу в міссиве result
        //массивы копируются по сслыке
        let recent = result[result.length - 1];
 
        if(recent[1] >= interval[0]){
          /*   console.log('recent[1]', recent[1]);
            console.log('interval[0]-->',interval[0]) */
            //проверям оставить последний єлемент в recent  текущий или заменить на крайний следующего интервала
            //массив скопирован по ссылке, поэтому меняя  recent[1], автоматически меняем крайний интервал в  result[result.length - 1];)
            recent[1] = Math.max(recent[1], interval[1]);
        }else{
            result.push(interval)
        }

    } 
        return result
}

console.log('merge-->',merge(arr))

//brackets

function isValid(str) {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
 
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        if (isClosingBrackets(current)) { 
            if(brackets[current] !== stack.pop())   return false         

        }
    else {
        stack.push(current)
    }
}
return  stack.length === 0;
    
}

function isClosingBrackets(char) {
    return [')', '}', ']'].indexOf(char) > -1;
}


let brackets =  '])'

console.log('res-->',isValid(brackets))

let row1 = [1, 2, 2, 1];
let row2 = [3, 1 ,2];

function crossLineCount(arr, arr2) {
    let a = arr.map((item, index, array)=>{
        return item[index] + item[]
    })
    
}

