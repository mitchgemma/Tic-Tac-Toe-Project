
const reset = document.getElementById('reset')
const container = document.getElementById('container')
let message = document.getElementById('message')
let finalMessage = document.getElementById('final-message')

// A user should be able to click on different squares to make a move.

    
    let lastMove = "X"
    
    
    // loops through child divs of the container
    for (let i = 0; i < container.childNodes.length; i++){
        const tile = container.childNodes[i]
        // console.log(tile)
        //  event listener that creates p element for x or 0
        tile.addEventListener ('click', () =>  {
            // if a tile has a child node, do not let it create another p element
            if (tile.childNodes.length === 0){
                let newNode = document.createElement ('p');
                
                
                //test displayed within newNode
                newNode.innerHTML = lastMove
                // need to append new node the the correct tile
                tile.appendChild(newNode)
                
                // now I need to make alternations between Xs and 0s
                if(lastMove === "X"){
                    //add "0" to the board
                    lastMove = "0"
                    // newNode = "0"
                    message.innerHTML = "X just picked. It is 0's turn."
                }else {
                    //add "X" back to the board
                    lastMove = "X"
                    // newNode =  "X"
                    message.innerHTML = "0 just picked. It is X's turn."
                }
            }
        })
        //function to reset the board
        const clearBoard = () => {
            while (tile.firstChild){
                tile.removeChild (tile.firstChild)
            }
        }
        reset.addEventListener('click', clearBoard)
    }
    
    // not best way to go about game ending - was not able to spend a lot of time
    
//     const tile1 = document.getElementById("tile1");
//     const tile2 = document.getElementById("tile2");
//     const tile3 = document.getElementById("tile3");
//     const tile4 = document.getElementById("tile4");
//     const tile5 = document.getElementById("tile5");
//     const tile6 = document.getElementById("tile6");
//     const tile7 = document.getElementById("tile7");
//     const tile8 = document.getElementById("tile8");
//     const tile9 = document.getElementById("tile9");


// if (tile1.innerHTML === "X" && tile2.innerHTML === "X" && tile3.innerHTML === "X" || tile1 === "0" && tile2 === "0" && tile3 === "0"){
//     finalMessage.innerHTML = "X wins!"
// }
    
    
    
    
    
    
    
    
    
    
    
    // Every click will alternate between marking an X and O
    // Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
    // A cell should not be able to be replayed once marked.
    // You should not be able to click remaining empty cells after the game is over.
    // Add a reset button that will clear the contents of the board.
    // Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.