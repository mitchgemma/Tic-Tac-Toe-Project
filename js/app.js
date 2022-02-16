
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
                newNode.textContent = lastMove
                // need to append new node the the correct tile
                tile.appendChild(newNode)
                
                checkWin()
                // now I need to make alternations between Xs and 0s
                if(lastMove === "X"){
                    //add "0" to the board
                    lastMove = "0"
                    // newNode = "0"
                    message.textContent = "X just picked. It is 0's turn."
                }else {
                    //add "X" back to the board
                    lastMove = "X"
                    // newNode =  "X"
                    message.textContent = "0 just picked. It is X's turn."
                }
            }
        })
        // determine winning boards
        // ========================================================================================
        const checkWin = () => {
            const tile1 = document.getElementById("tile1");
            const tile2 = document.getElementById("tile2");
            const tile3 = document.getElementById("tile3");
            const tile4 = document.getElementById("tile4");
            const tile5 = document.getElementById("tile5");
            const tile6 = document.getElementById("tile6");
            const tile7 = document.getElementById("tile7");
            const tile8 = document.getElementById("tile8");
            const tile9 = document.getElementById("tile9");
            



            // const value1 = tile1.firstChild.textContent;
            // const value2 = tile2.firstChild.textContent;        
            // const value3 = tile3.firstChild.textContent;
            // const value4 = tile4.firstChild.textContent;
            // const value5 = tile5.firstChild.textContent;
            // const value6 = tile6.firstChild.textContent;
            // const value7 = tile7.firstChild.textContent;
            // const value8 = tile8.firstChild.textContent;
            // const value9 = tile9.firstChild.textContent;
            console.log("checking for win")
            if (tile1.firstChild && tile2.firstChild && tile3.firstChild){
                const value1 = tile1.firstChild.textContent;
                const value2 = tile2.firstChild.textContent;        
                const value3 = tile3.firstChild.textContent;
            
            if (value1 === "X" && value2 === "X" && value3 === "X"){
                finalMessage.innerHTML = "X wins!";
            } else if (value1 === "0" && value2 === "0" && value3 === "0"){
                finalMessage.innerHTML = "0 wins!";
            }
            ;}
            if (tile4.firstChild && tile5.firstChild && tile6.firstChild){
                
                const value4 = tile4.firstChild.textContent;
                const value5 = tile5.firstChild.textContent;
                const value6 = tile6.firstChild.textContent;
                    if (value4 === "X" && value5 === "X" && value6 === "X"){
                        finalMessage.innerHTML = "X wins!";
            } else if (value4 === "0" && value5 === "0" && value6 === "0"){
                finalMessage.innerHTML = "0 wins!";
        }
            }
            if (tile7.firstChild && tile8.firstChild && tile9.firstChild){
                const value7 = tile7.firstChild.textContent;
                const value8 = tile8.firstChild.textContent;
                const value9 = tile9.firstChild.textContent;

            if (value7 === "X" && value8 === "X" && value9 === "X"){
                finalMessage.innerHTML = "X wins!";
            } else if (value7 === "0" && value8 === "0" && value9 === "0"){
                finalMessage.innerHTML = "0 wins!";
        }
        }
        //now for all the vertical winning combinations

            if (tile1.firstChild && tile4.firstChild && tile7.firstChild){
                const value1 = tile1.firstChild.textContent;
                const value4 = tile4.firstChild.textContent;
                const value7 = tile7.firstChild.textContent;

            if (value1 === "X" && value4 === "X" && value7 === "X"){
                finalMessage.innerHTML = "X wins!";
            } else if (value1 === "0" && value4 === "0" && value7 === "0"){
                finalMessage.innerHTML = "0 wins!";
            }
        }

            if (tile2.firstChild && tile5.firstChild && tile8.firstChild){
                const value2 = tile2.firstChild.textContent; 
                const value5 = tile5.firstChild.textContent;
                const value8 = tile8.firstChild.textContent;
            
                if (value2 === "X" && value5 === "X" && value8 === "X"){
                    finalMessage.innerHTML = "X wins!";
                } else if (value2 === "0" && value5 === "0" && value8 === "0"){
                    finalMessage.innerHTML = "0 wins!";
                }
            }

            if (tile3.firstChild && tile6.firstChild && tile9.firstChild){
                const value3 = tile3.firstChild.textContent; 
                const value6 = tile6.firstChild.textContent;
                const value9 = tile9.firstChild.textContent;
            
                if (value3 === "X" && value6 === "X" && value9 === "X"){
                    finalMessage.innerHTML = "X wins!";
                } else if (value3 === "0" && value6 === "0" && value9 === "0"){
                    finalMessage.innerHTML = "0 wins!";
                }
            }
            
            if (tile1.firstChild && tile5.firstChild && tile9.firstChild){
                const value1 = tile1.firstChild.textContent; 
                const value5 = tile5.firstChild.textContent;
                const value9 = tile9.firstChild.textContent;
            
                if (value1 === "X" && value5 === "X" && value9 === "X"){
                    finalMessage.innerHTML = "X wins!";
                } else if (value1 === "0" && value5 === "0" && value9 === "0"){
                    finalMessage.innerHTML = "0 wins!";
                }
            }

            if (tile3.firstChild && tile5.firstChild && tile7.firstChild){
                const value3 = tile3.firstChild.textContent; 
                const value5 = tile5.firstChild.textContent;
                const value7 = tile7.firstChild.textContent;
            
                if (value3 === "X" && value5 === "X" && value7 === "X"){
                    finalMessage.innerHTML = "X wins!";
                } else if (value3 === "0" && value5 === "0" && value7=== "0"){
                    finalMessage.innerHTML = "0 wins!";
                }
            }




            //function to reset the board
            
            const clearBoard = () => {
                while (tile.firstChild){
                tile.removeChild (tile.firstChild)
                //remove text in p
            }
            message.textContent = " "
        }
        reset.addEventListener('click', clearBoard)
    }
}

    //1 determine winning outcomes
    //2 remove p text
    //3 end game - tiles can't be clicked
    
    //disableTiles()
    
    
    // Every click will alternate between marking an X and O
    // Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
    // A cell should not be able to be replayed once marked.
    // You should not be able to click remaining empty cells after the game is over.
    // Add a reset button that will clear the contents of the board.
    // Display a message to indicate which turn is about to be played.
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.