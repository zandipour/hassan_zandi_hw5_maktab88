
function flatern(input){
    let arr = [...input];
    console.log(arr);
    let str=arr.join(",");
   
    let result = str.split(',');
    return result;
}
console.log(flatern([10, [25, 13], [14, [55]], 2]));

