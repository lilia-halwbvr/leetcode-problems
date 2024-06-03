class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
function printFullList(root) {
    while (root) {
        console.log(root.value)
        root = root.next
    }
}


const root = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

printFullList(root)

var hasCycle = function(head) {
    if(!head || head.next) return false

    while(head.next) {

        if(head.next === head) {
            return true
        }

        head.next = head.next.next
        head = head.next
    }

    return false
};
