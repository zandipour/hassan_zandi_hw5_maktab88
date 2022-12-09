function search(str , key){
    if (typeof str !== "string"|| typeof key !== "string"){
        return "please inter valid value!!!"
    }
    let uperStr = str.toUpperCase();
    let uperKey = key.toUpperCase();
    let arr = uperStr.split(" ");
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === uperKey){
            return true
        }else{
            return false
        }
        
    }
}
console.log(search("hello world" , "Hello"));