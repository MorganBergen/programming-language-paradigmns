import qualified Data.Sequence as Seq
import qualified Data.Foldable as Fol
import qualified Data.List as List
import Data.Maybe

-- initialize player to player1 and then switch to player2
data Player = One | Two deriving (Show, Eq)

-- change player returns the player
change :: Player -> Player

-- change player returns the player
change One = Two

-- change player returns the player
change Two = One

-- a sequence of integers, which allow us to update single elements easily
type Board = Seq.Seq Int

-- this is the type of the game state
initialBoard :: Board

-- initial board structure
initialBoard = Seq.fromList [5, 4, 3, 2, 1]

-- the move method checks if the movement can be executed
-- the move will return the updated board in case it is possible
move :: Board -> (Int, Int) -> Maybe Board

move board (row, stars) 
 | and [(Seq.index board row) >= stars, row < 5] = Just (Seq.adjust(\x -> x - stars) row board) 
 | otherwise = Nothing

-- the display methods transform a board into a nice, enumerated string of asterisks
display :: Board -> String

-- display the board
display board = List.intercalate "\n" (zipWith (++) numbers (stars board))

-- display the stars
 where numbers = ["1: ", "2: ", "3: ", "4: ", "5: "]

-- concat and repeat the stars for each row
stars board = [(concat . take n) (repeat "*") | n <- Fol.toList board]

-- control input output and the game loop
main :: IO ()

-- main function which contains nim 
main = nim

-- nim function definition with the game loop
nim = do 

 -- initial greeting
 putStrLn ("welcome to nim")

 -- display the initial board 
 putStrLn (display initialBoard)

 -- start the game loop
 turn initialBoard One

 -- the turn method displays the player and asks for a movement, then checks if there was a problem performing that movement and continues the game this is the main game loop
turn :: Board -> Player -> IO ()

-- turn function definition
turn board player = do 

 putStrLn ("\nplayer " ++ show player ++ " turn")

 -- putStrLn("\n its your turn player " ++ (show Player) ++ "!")

 -- ask for a movement
 putStrLn("choose a row to remove stars")

 -- read the input
 row <- getLine

 -- ask for the number of stars to remove
 putStrLn "how many stars do you want to remove?"

 -- read the input
 stars <- getLine

 -- check if the movement is possible
 let newBoard = move board ((read row) - 1, read stars)

 -- if the movement is possible, display the new board and continue the game
 if newBoard == Nothing then do 

  putStrLn("invalid move")

  -- if the movement is not possible, display an error message and ask for a new movement
  turn board player else isOver (fromJust newBoard) (change player)

-- isOver checks if the board is empty and checks whether the game is over or the next turn must be called

isOver :: Board -> Player -> IO ()

-- isOver function definition
isOver board player = do 

 -- check if the board is empty
 if board == Seq.fromList [0, 0, 0, 0, 0] 

 -- if the board is empty display the winner 
 then putStrLn ("congratultions, player " ++ (show player) ++ ", you win") 

 -- otherwise continue the game
 else do
  
  -- display the new board
  putStrLn("")

  -- display the new board
  putStrLn (display board) 

  -- then continue the game
  turn board player
