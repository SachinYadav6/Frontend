class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
        
    }
}
const node1 = new Node(10); // node me data pass krte hai node ke through ok
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);
const node5 = new Node(50);
// connection create
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let current = node1;

while (current !== null) {
    /* Isliye loop mein print pehle, move baad mein:*/
    console.log(current.data);// value niklana 
    current = current.next;//current.next se aage move karte hain.
}

