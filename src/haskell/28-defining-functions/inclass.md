# in-class exercise

Morgan Bergen

EECS 368 programming language paradigmns

Mon Oct 31 23:11:00 CDT 2022

### defining functions in haskell

consider a function safetail that behaves in the same way as a tail
except that safetail maps the empty list to the empty list
whereas tail gives an error in this case
define safetail using:
- a conditional expression
- guarded equations
- pattern matching

hint use the library function null :: [a] -> Bool can be used to test if
a list is empty.


```Haskell
{
    -- https://downloads.haskell.org/~ghc/9.4.2/docs/users_guide/9.4.2-notes.html
    -- @author      Morgan Bergen
    -- @date        Mon Oct 31 15:11:02 CDT 2022

    -- @brief       in class problems for defining haskell functions
    -- @file        main.hs
}

-- conditional expression

safetail :: [a] -> [a]
safetail xs = if null xs then [] else tail xs

-- guarded equations

safetail :: [a] -> [a]
safetail xs | null xs = []
            | otherwise = tail xs

-- pattern matching

safetail :: [a] -> [a]
safetail [] = []
safetail (_:xs) = tail xs

```
