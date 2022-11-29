# declaring haskell types

Morgan Bergen

Fri Nov 11 22:45:41 CST 2022

eecs 368 programming language paradigms

consider the following types of binary trees:

Let us say that such a tree is balanced if the number of leaves in the left and right subtree of every node differs by at most one.


```Haskell
data Tree a = Leaf a | Node (Tree a) (Tree a)
-- define a function that returns the number of leaves in a tree

leaves :: Tree a -> Int
-- here we will write out a recursive preorder traversal method
leaves (Leaf _) = 1
leaves (Node l _ r) = leaves l + leaves r

-- use the leaves function, to define a function.  That which decides if the tree is balanced or not
balanced :: Tree a -> Bool
balanced (Leaf _) = True
balanced (Node l _ r) = abs (leaves l - leaves r) <= 1 && balanced l && balanced r
```
