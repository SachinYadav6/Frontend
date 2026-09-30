const course = {
    courName: "js in hindi",
    price: "999",
    courseInstructer:"Hitesh"
}
console.log(course);

// destructering of object

const { courName, courseInstructer, price } = course;
console.log(courseInstructer);

const { courName:name, courseInstructer:head, price:total_price } = course;
console.log(total_price);


