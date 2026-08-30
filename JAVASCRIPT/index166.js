let n = [12, 24, 45, 56, 67];

let target = 24;
let left = 0;
let right = n.length - 1;
let found = false;
while (left<=right) {
    let mid = Math.floor((left + right) / 2);
    if (n[mid] ===target) {
        found = true;
      
        break;

    }
    else if (n[mid] < target) {
        left = mid + 1;
    }
    else {
        right = mid - 1;
    }
   
}
if (found) {
    console.log("target value is found : " + found);


}
else {
    console.log("target value is not found:" + found);

}
