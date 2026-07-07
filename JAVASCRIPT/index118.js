let number = [20, 45, 67, 89, 100];
const tenDivsibleNumberPrint = number.filter((number) => {
    return number % 10 === 0;
});
console.log(tenDivsibleNumberPrint);
