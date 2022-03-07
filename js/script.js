const playButton = document.getElementById('my-play-button');
playButton.addEventListener('click' , function(){
    let difficultyOption = document.getElementById('difficulty');
    console.log(difficultyOption.value);
    const gridElement = document.getElementById('my-container');
    gridElement.innerHTML ='';
    let boxNumber = 0;
    if(difficultyOption.value == 'facile'){
        boxNumber = 100;
        console.log(boxNumber);
    }else if (difficultyOption.value == 'medio'){
        boxNumber = 81;
        console.log(boxNumber);
    }else{
        boxNumber = 49;
        console.log(boxNumber);
    }

    const bombsNumber = bombs(16, boxNumber);
    console.log(bombsNumber);
    
    for(let i = 0; i < boxNumber; i++){
        const gridBox = document.createElement('div');

        gridBox.addEventListener('click' , function(){
            if(bombsNumber.includes(i)){
                gridBox.classList.add('checked-bombs')
            }else{
                gridBox.classList.add('checked');
            }
            
        })
        if(difficultyOption.value == 'facile'){
            gridBox.classList.add('box-facile');
            gridBox.innerHTML += i + 1;
        }else if (difficultyOption.value == 'medio'){
            gridBox.classList.add('box-medio');
            gridBox.innerHTML += i + 1;
        }else{
            gridBox.classList.add('box-difficile');
            gridBox.innerHTML += i + 1;
        }
        gridElement.appendChild(gridBox);
    }
    
});


function bombs (numberBombs, maxCells){
    const arrayBombs = [];
    for(let i = 0; i < numberBombs; i++){
        arrayBombs.push(generateUniqueRandomNumber(arrayBombs, 1, maxCells ));
    }
    return arrayBombs;
}

function generateUniqueRandomNumber (numbArray, min ,max){
    let check = false;
    let randomInt;

    while(!check){
        randomInt = Math.floor(Math.random() * ((max + 1 ) - min) + min);
        if( !numbArray.includes(randomInt)){
            check = true;
        }
    }
    return randomInt;
}


