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

console.log(result)