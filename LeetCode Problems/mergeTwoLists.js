var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    // declare a variable for a dummy list
    let dummy = new ListNode(-Infinity);
    let p1 = list1, p2 = list2, prev = dummy;
    while(p1 && p2) {
        if (p1.val <= p2.val) {
            prev.next = p1;
            prev = p1
            p1 = p1.next;
        } else {
            prev.next = p2;
            prev = p2;
            p2 = p2.next;
        }
    }
    if (p1 === null) prev.next = p2;
    else prev.next = p1;
    return dummy.next;
};