let num = [7, 8, 3, 2, 1];
for (let i = 0; i < num.length;i++
){

    for (let j = 0; j < num.length - i - 1; j++){
        if (num[j] > num[j + 1]) {
            let temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
            
        }
    }

}
for (let i = 0; i < num.length; i++){
    console.log(num[i]);
    
}