class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next;
    }
}

var reverseList = function(root) {
    let prev = null
    
    while(root){
        let current = root
        root = root.next
        current.next = prev
        prev = current
    }
    return prev
};

function printFullList(root) {
    while(root) {
        console.log(root.value)
        root = root.next
    }
}

// const root = new Node(1, new Node(2, new Node(2, new Node(1))))

const root = new Node(1, new Node(2, new Node(1)))

var isPalindrome = function(head) {

    let length = 0
    let curr = head
    while(curr) {
        length++
        curr = curr.next
    }

    let secondList = head
    for(let i = 0; i < length/2; i++) {
        secondList = secondList.next
    }

    let currentSecond = reverseList(secondList);
    let currentHead = head;
    printFullList(currentHead)
    console.log('---')
    printFullList(currentSecond)
    
    while (currentSecond) {
        if (currentSecond.value === currentHead.value) {
            currentSecond = currentSecond.next;
            currentHead = currentHead.next;
        } else {
            return false;
        }
    }
    
    return true;
    
};

console.log(isPalindrome(root))
