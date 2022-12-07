-- N = a 'div' length xs
--     where
--         a = 10
--     xs = [1,2,3,4,5]

a = 10
xs = [1,2,3,4,5]
n = fromIntegral (a) / fromIntegral (length xs)
main = print n