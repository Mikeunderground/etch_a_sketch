//grabbing elements in the global scope: container, grid and reset button
const container = document.getElementById('container');
const grids = document.getElementsByClassName('grid');
const reset = document.getElementById('reset');

// event Listern for button call button that calls resetbutton() which rests grid background color
reset.addEventListener("click", resetButton)

// function creats a 256 tile grid. Run once upon page load.
for(let i=0; i<256; i++){
    let div = document.createElement('div');
    let container = document.getElementById('container');
    
    container.appendChild(div);
    div.classList.add("grid");
    
}

// function generate random numbers that call for colors


// func loops over tiles invoking eventlisten of mouseover and calling colorchange function
for(let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseover', colorChange)
   
}

// Changes the background color of tiles
function colorChange(e){
    e.target.style.backgroundColor = 'red';
}

//reset.addEventListener('click', resetGrid())
function resetButton(e){
    // set all gird background back to white
    let squares = container.querySelectorAll('.grid');
    squares.forEach(squares => squares.style.backgroundColor = 'white');

    clearGrid();

    createNewGrid();    

    console.log("reset Button function exe'd");

};

// clears grid
function clearGrid(){
    
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    console.log("clear executed");
};

// func creates grid with inputed number
function createNewGrid(){
    let gridSize = window.prompt("How many rows and columns would you like the grid to have?")
       
    let gridArea = gridSize * gridSize;
    console.log(gridArea);
    
    // resets css of the container ID
    document.getElementById('container').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('container').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // for loop create new grid based on gridArea variable
    for(let i = 0; i < gridArea; i++){
        let div = document.createElement('div');
        let container = document.getElementById('container');
               
        container.appendChild(div);
        div.classList.add("grid");
    }
    
    // implements event listener on grid after grid is created. HAS TO BE DONE BECAUSE IT WONT>
    for(let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', colorChange)
           
    }

    console.log("createNewGrid() exe'd")
};