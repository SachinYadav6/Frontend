/* immeditely invoke function expression*/
(function () {
    console.log('db connected');
    
})()
    ;
(() => {
    console.log('db connected 2');
    
})();

/*IIFE with parameter*/
    ((name) => {
        console.log(name);
        
    })('sachin kumar');
