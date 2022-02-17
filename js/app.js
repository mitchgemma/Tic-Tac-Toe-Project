
const reset = document.getElementById('reset')
const container = document.getElementById('container')
let message = document.getElementById('message')
let finalMessage = document.getElementById('final-message')
// A user should be able to click on different squares to make a move.

    
    let lastMove = "X"
    
    
    // loops through child divs of the container
const createBoard = () => {
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
//MOVE RESET HERE
const clearBoard = () => {
    while (tile.firstChild){
    tile.removeChild (tile.firstChild)
    //remove text in p
}
message.textContent = " "
finalMessage.textContent = " "
}
reset.addEventListener('click', clearBoard)
    }
}
createBoard();
    
        
        const tile1 = document.getElementById("tile1");
        const tile2 = document.getElementById("tile2");
        const tile3 = document.getElementById("tile3");
        const tile4 = document.getElementById("tile4");
        const tile5 = document.getElementById("tile5");
        const tile6 = document.getElementById("tile6");
        const tile7 = document.getElementById("tile7");
        const tile8 = document.getElementById("tile8");
        const tile9 = document.getElementById("tile9");
        
        const checkWin = () => {
            
            if (tile1.firstChild && tile2.firstChild && tile3.firstChild && tile4.firstChild && tile5.firstChild &&
                    tile6.firstChild && tile7.firstChild && tile8.firstChild && tile9.firstChild){
                    finalMessage.innerHTML = "It's a tie!"
                }                                

                   
            const disableTiles = () => {
                const disable1 = document.createElement ('p')
                disable1.textContent = " "
                tile1.appendChild(disable1)
                
                const disable2 = document.createElement ('p')
                disable2.textContent = " "
                tile2.appendChild(disable2)

                const disable3 = document.createElement ('p')
                disable3.textContent = " "
                tile3.appendChild(disable3)

                const disable4 = document.createElement ('p')
                disable4.textContent = " "
                tile4.appendChild(disable4)

                const disable5 = document.createElement ('p')
                disable5.textContent = " "
                tile5.appendChild(disable5)

                const disable6 = document.createElement ('p')
                disable6.textContent = " "
                tile6.appendChild(disable6)

                const disable7 = document.createElement ('p')
                disable7.textContent = " "
                tile7.appendChild(disable7)

                const disable8 = document.createElement ('p')
                disable8.textContent = " "
                tile8.appendChild(disable8)

                const disable9 = document.createElement ('p')
                disable9.textContent = " "
                tile9.appendChild(disable9)
            }
               
            if (tile1.firstChild && tile2.firstChild && tile3.firstChild){
                const value1 = tile1.firstChild.textContent;
                const value2 = tile2.firstChild.textContent;        
                const value3 = tile3.firstChild.textContent;
            
            if (value1 === "X" && value2 === "X" && value3 === "X"){
                finalMessage.innerHTML = "X wins!";
                disableTiles()
            } else if (value1 === "0" && value2 === "0" && value3 === "0"){
                finalMessage.innerHTML = "0 wins!";
                disableTiles()
            }

            ;}
            if (tile4.firstChild && tile5.firstChild && tile6.firstChild){
                
                const value4 = tile4.firstChild.textContent;
                const value5 = tile5.firstChild.textContent;
                const value6 = tile6.firstChild.textContent;
                    if (value4 === "X" && value5 === "X" && value6 === "X"){
                        finalMessage.innerHTML = "X wins!";
                        disableTiles()
            } else if (value4 === "0" && value5 === "0" && value6 === "0"){
                finalMessage.innerHTML = "0 wins!";
                disableTiles()
        }
            }
            if (tile7.firstChild && tile8.firstChild && tile9.firstChild){
                const value7 = tile7.firstChild.textContent;
                const value8 = tile8.firstChild.textContent;
                const value9 = tile9.firstChild.textContent;

            if (value7 === "X" && value8 === "X" && value9 === "X"){
                finalMessage.innerHTML = "X wins!";
                disableTiles()
            } else if (value7 === "0" && value8 === "0" && value9 === "0"){
                finalMessage.innerHTML = "0 wins!";
                disableTiles()
        }
        }
        //now for all the vertical winning combinations

            if (tile1.firstChild && tile4.firstChild && tile7.firstChild){
                const value1 = tile1.firstChild.textContent;
                const value4 = tile4.firstChild.textContent;
                const value7 = tile7.firstChild.textContent;

            if (value1 === "X" && value4 === "X" && value7 === "X"){
                finalMessage.innerHTML = "X wins!";
                disableTiles()
            } else if (value1 === "0" && value4 === "0" && value7 === "0"){
                finalMessage.innerHTML = "0 wins!";
                disableTiles()
            }
        }

            if (tile2.firstChild && tile5.firstChild && tile8.firstChild){
                const value2 = tile2.firstChild.textContent; 
                const value5 = tile5.firstChild.textContent;
                const value8 = tile8.firstChild.textContent;
            
                if (value2 === "X" && value5 === "X" && value8 === "X"){
                    finalMessage.innerHTML = "X wins!";
                    disableTiles()
                } else if (value2 === "0" && value5 === "0" && value8 === "0"){
                    finalMessage.innerHTML = "0 wins!";
                    disableTiles()
                }
            }

            if (tile3.firstChild && tile6.firstChild && tile9.firstChild){
                const value3 = tile3.firstChild.textContent; 
                const value6 = tile6.firstChild.textContent;
                const value9 = tile9.firstChild.textContent;
            
                if (value3 === "X" && value6 === "X" && value9 === "X"){
                    finalMessage.innerHTML = "X wins!";
                    disableTiles()
                } else if (value3 === "0" && value6 === "0" && value9 === "0"){
                    finalMessage.innerHTML = "0 wins!";
                    disableTiles()
                }
            }
            
            if (tile1.firstChild && tile5.firstChild && tile9.firstChild){
                const value1 = tile1.firstChild.textContent; 
                const value5 = tile5.firstChild.textContent;
                const value9 = tile9.firstChild.textContent;
            
                if (value1 === "X" && value5 === "X" && value9 === "X"){
                    finalMessage.innerHTML = "X wins!";
                    disableTiles()
                } else if (value1 === "0" && value5 === "0" && value9 === "0"){
                    finalMessage.innerHTML = "0 wins!";
                    disableTiles()
                }
            }
            
            if (tile3.firstChild && tile5.firstChild && tile7.firstChild){
                const value3 = tile3.firstChild.textContent; 
                const value5 = tile5.firstChild.textContent;
                const value7 = tile7.firstChild.textContent;
                
                if (value3 === "X" && value5 === "X" && value7 === "X"){
                    finalMessage.innerHTML = "X wins!";
                    
                    disableTiles()
                } else if (value3 === "0" && value5 === "0" && value7=== "0"){
                    finalMessage.innerHTML = "0 wins!";
                    disableTiles()
                }
            }   
        }