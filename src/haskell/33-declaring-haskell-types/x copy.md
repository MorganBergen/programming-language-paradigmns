
-- define a function that returns the number of leaves in a tree
leaves :: Tree a -> Int
-- here we will write out a recursive preorder traversal method
	a = leaves (leaves (leaf 1) 3 (leaf 4)) 5
		   (leaves (leaf 6) 7 (leaf 9)) 

-- use the leaves function, to define a function.  That which decides if the tree is balanced or not
balanced :: Tree a -> Bool
	occurs :: Eq => a -> Tree a -> Bool
	occurs x (Leaf y) = x == y
	occurs x (Node l y r) = x == y || occurs x l || occurs x r
