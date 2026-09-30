/*
json format 
{
   name: "sachin",
    isloogedin: false,
    college:"MITS"
}
[{},{},{},{},{},{},{}]
*/
let json_api = [
    {
        id:"A123@abc",
        name: "SHREEKANT",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "SONAKASHI",
        isloogedin: false,
        college: "MITS"
    },

     {
        id: "A123@abc",
        name: "SURESH",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "NTR",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "SHUVAM",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "SONAM",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "ARODA",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "MOHIT",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "ROHIT",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "ANJALI",
        isloogedin: false,
        college: "MITS"
    },
    {
        id:"A123@abc",
        name: "SANDEEP",
        isloogedin: false,
        college: "MITS"
    },
    {
        id:"A123@abc",
        name: "SOURAV",
        isloogedin: false,
        college: "MITS"
    },
    {
        id: "A123@abc",
        name: "RAHUL",
        isloogedin: false,
        college: "MITS"
    }

]
// console.log(json_api);

const items = json_api.map((item) =>item.name);
console.log(items);

