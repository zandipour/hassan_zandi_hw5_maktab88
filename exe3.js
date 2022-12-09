function separator(input){
    if(typeof input !== "number"){
        return "bad value!!!"
    }
    let number = input.toLocaleString("en-US");
    console.log(number);

}
separator(-20301548);