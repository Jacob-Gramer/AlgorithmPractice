var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;

    let current = head;
    while (current !== null) {
        let p2 = current.next;
        while (p2 !== null && p2.val === current.val) {
            p2 = p2.next;
        }
        current.next = p2;
        current = p2;
    }
    return head;
};