let number = [2, 4, 6, 8, 10, 12];
for (const num of number) {
    console.log(num);
    
}
for (const key in number) {
    console.log(number[key]);
    
}

const map = new Map();
map.set('name', 'sachin');
map.set('id', '101');
map.set('course', 'javascript');
console.log(map);

for (const [key, value] of map) {
    console.log(`keys:${key},value :${value}`);
    
    
}




