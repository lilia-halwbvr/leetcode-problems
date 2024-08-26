var postorder = function (root) {
    let stack = [root]
    let ans = []

    while (stack.length) {
        let curr = stack.pop()
        if (!curr) continue
        ans.push(curr.val)
        stack.push(...curr.children)
    }
    return ans.reverse()
};