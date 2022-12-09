let array = ["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e",
    "x-z-p-j"];
let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];
let result = [];
function add() {
    let str = array.join("-");
    // console.log(str);
    for (let i = 0; i < str.length; i += 2)
        arr.push(str[i]);
    // console.log(arr);
    function loop() {
        for (let j = 0; j < arr.length; j = j + 4)
            arr2.push(arr[j]);
        // console.log(arr2);
        for (let index = 0; index < arr2.length; index++) {

            arr3 = arr2.filter(function (item, pos) {
                return arr2.indexOf(item) == pos;
            })

            return arr3;
        }
    }
    console.log(loop());
    arr.shift();
    // console.log(arr);
    function loop1() {
        for (let j = 0; j < arr.length; j = j + 4)
            arr4.push(arr[j]);
        // console.log(arr4);
        for (let index = 0; index < arr4.length; index++) {

            arr5 = arr4.filter(function (item, pos) {
                return arr4.indexOf(item) == pos;
            })

            return arr5;
        }
    }
    console.log(loop1());
    arr.shift();
    function loop2() {
        for (let j = 0; j < arr.length; j = j + 4)
            arr6.push(arr[j]);
        // console.log(arr6);
        for (let index = 0; index < arr6.length; index++) {

            arr7 = arr6.filter(function (item, pos) {
                return arr6.indexOf(item) == pos;
            })

            return arr7;
        }
    }
    console.log(loop2());
    arr.shift();
    function loop3() {
        for (let j = 0; j < arr.length; j = j + 4)
            arr8.push(arr[j]);
        // console.log(arr8);
        for (let index = 0; index < arr8.length; index++) {

            arr9 = arr8.filter(function (item, pos) {
                return arr8.indexOf(item) == pos;
            })

            return arr9;
        }
    }
    console.log(loop3());


    result = [[...arr3], [...arr5], [...arr7], [...arr9]];


    console.log(result);

}
add();
