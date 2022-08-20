/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let currentNode = new ListNode();
  let sum = 0;
  let carry = 0;
  const result = currentNode;

  while (l1 || l2 || carry != 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    currentNode.next = new ListNode((sum + carry) % 10);
    currentNode = currentNode.next;

    if (sum + carry > 9) carry = 1;
    else carry = 0;

    sum = 0;
  }

  return result.next;
};
