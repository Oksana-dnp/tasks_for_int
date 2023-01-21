//classNames


let classNamesList = ['header', 'block', 'task', 'block', 'text', 'link', 'task', 'link', 'task', 'link' ];



let classNamesCount = {};


for(let item of classNamesList){

    if(classNamesCount[item]){
        classNamesCount[item]+=1;
    }else {
        classNamesCount[item] = 1;
  
    }
}


let result = Object.keys(classNamesCount).sort((a,b)=>{
   return classNamesCount[b] - classNamesCount[a]
}
)


//simple Numbers

function getPrime(num) {
    let seive = [];
    let primes = [];

    for(let i=2; i <= num; i++){
        console.log('i-->', seive[i])
        if(!seive[i]) {
            primes.push(i);
            for(let j = i*2; j <= num; j+=i){
                seive[j] = true;
            }
        }
    }
    console.log('seive-->', typeof(seive))

    return primes
}

console.log(getPrime(160))

function isPrime(num) {
    let result = [];
    test: for(; num > 1; num--){
        for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
            if (num % i === 0) {
                continue test;
            }
        }
        result.push(num)
    }
    return result
}

console.log(isPrime(49))


//crossing two arrays

let input1 = [4, 9, 4, 5];
let input2 = [9, 4, 9, 8, 4];

function findCrossArr(nums1, nums2){
    let result = [];

    let map = nums1.reduce((accum, item)=>{
        accum[item] = accum[item] ? accum[item] + 1 : 1;
        return accum
    }, {})
    console.log('map',map)
    for(let i=0; i < nums2.length; i++){
        let current = nums2[i];
        console.log('current-->', current);
        
        let count = map[current];
        console.log('count-->', map[current])
        if(count && count > 0){
            result.push(current);
            map[current] -=1;
        }

    }

    return result;
}
console.log('same__>', findCrossArr(input1, input2));

