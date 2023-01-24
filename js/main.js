function findUniqueChar(str){
    let repeatChar = {};
    for(char of str){
        repeatChar[char] =  repeatChar[char]?  repeatChar[char] + 1 : repeatChar[char]= 1;
    }
    console.log('repeatChar',repeatChar)
    for(let i = 0; i < str.length; i++){
        let current = str[i];
        if(repeatChar[current] === 1) return current;
    }    
   return "This string does't have any unique char"
} 

const message = 'heelloo!';
console.log('findUniqueChar(message)-->',findUniqueChar(message)); 