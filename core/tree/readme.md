# Tree

- Root - The top node in a tree
- Child - A node directly connected to another node when moving away from the Root
- Parent - The converse notion of a child
- Siblings - A group of nodes with the same parent
- Leaf - A node with no children
- Edge - The connection between one node and another

# Binary Tree

- Tree with each node at most 2 children

# Binary Search Tree

Binary Search Tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

## Inserting A Node (iteratively or recursively) / O(log(n)) not guaranteed

- Create a new Node
- Startgin at the root
  - Check if there is a root, if not - the root now becomes that new node
  - if there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Same with the right

## Finding a Node in a BST (iteratively or recursively) / O(log(n)) not guaranteed

- Check if there is a root, if not - we're done searching!
- If there is a root, check if the value of the new node is the value we are looking for.
  If we found it, we're done
- If not, check to see if the value is greater than or less than the value of the root
- If it is greater
  - Check to see if there is a node to the right
    - If there is, move to that node and repeat these steps
    - If there is not, we're done searching
  - If it is less
    - Same with the right
