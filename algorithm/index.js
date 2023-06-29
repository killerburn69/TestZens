function arrayCheck(array){
    const newArr = array.sort((a,b)=>a-b)
    let min = newArr[0]+newArr[1]+newArr[2]+newArr[3]
    let max = newArr[1]+newArr[2]+newArr[3]+newArr[newArr.length - 1]
    console.log(min);
    console.log(max);
}
arrayCheck([5,4,2,6,9])