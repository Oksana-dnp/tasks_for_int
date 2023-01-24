/* 

let bracketsList = ['{', '[', ']', '}'];

 function listValidBrackets(arr) {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

        for (let item of arr) {
            if (isClosingBrackets(item)){
                if (stack.pop() !== brackets[item]) return false

            }
            else {
                stack.push(item);
            }
        }
    
    return stack.length ===0
}


function isClosingBrackets(char) {
    return ['}',']', ')'].indexOf(char) > -1;    
}

console.log('listValidBrackets-->', listValidBrackets(bracketsList)); */

let wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]];

const leastBrickes = function(wall){
    let map = {};
    let max = 0;

   wall.forEach(row => {
    let sum=0;

    for(let i=0; i < row.length -1; i++){
        sum += row[i];
       map[sum] = map[sum] ? map[sum] +1 : 1;
        max = Math.max(max, map[sum]);
    } 
   
   });
    return wall.length - max
}

console.log('obj-->', leastBrickes(wall))

