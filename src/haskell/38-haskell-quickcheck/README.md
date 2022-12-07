# haskell quickcheck in-class problem

**eecs 368 programming language paradigms**

**morgan bergen**

**mon dec  5 18:52 2022**

```haskell
prop_Index_v4 :: (NonEmptyList Integer) -> Property
prop_Index_v4 (NonEmpty xs) = forAll (choose (0, length xs - 1)) $ \n -> xs !! n == head (drop n xs)
```

1.  if the length of `xs` is 3, what values will quickcheck choose form, to test `prop_Index_c4`

```haskell
thirdlast :: [a] -> a
thirdlast (x : xs) = if length xs == 2 then x else thirdlast xs
```

2.  generate a test list of 5 elements that QuickCheck might generate for problem no. 1

```haskell
otherelement :: [a] -> [a]
otherelement [] = []
otherelement [x] = [x]
otherelement (x : y : xs) = otherelement (x : xs)
```

3.  let xs = [1, 2, 3], show `prop_Index_v4` is true for each of the values you determined in problem no. 1.  for example, 

```hakell

-- if n = 0, show
xs !! 0 == head (drop 0 xs)
1 == head [1, 2, 3]
1 == 1
```

```haskell
sumpos :: [Integer] -> Integer
sumpos [] = 0
sumpos (x : xs) = if x >= 0 then x + sumpos xs else sumpos xs
```

