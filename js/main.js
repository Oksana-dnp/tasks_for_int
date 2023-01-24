//let wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]];

let bracketsList = ['{', '[', ']', '}'];

 function listValidBrackets(arr) {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    if (arr.length > 2) {
        for (let item of arr) {
            if (isClosingBrackets(item)){
                if (stack.pop() !== brackets[item]) return false

            }
            else {
                stack.push(item);
            }
        }
    }
    return stack.length ===0
}


function isClosingBrackets(char) {
    return ['}',']', ')'].indexOf(char) > -1;    
}

console.log('listValidBrackets-->', listValidBrackets(bracketsList));