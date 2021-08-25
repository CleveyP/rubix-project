//rubix js file


let interval = null;




const submitButton = document.getElementById("submit-button");
const rubix = document.getElementsByClassName("grid")[0];
patternDefault();


//pattern functions

function patternX(color1, color2){
    const tiles = rubix.children;
    for(let i=0; i<tiles.length; i++){
        if(i%2===0){
            tiles[i].style.backgroundColor = color1;
        }
        else {
            tiles[i].style.backgroundColor = color2;
        }
    }
}
function patternDefault(){
    const tiles = rubix.children;
    tiles[0].style.backgroundColor = "yellow";
    tiles[1].style.backgroundColor = "green";
    tiles[2].style.backgroundColor = "red";

    tiles[3].style.backgroundColor = "black";
    tiles[4].style.backgroundColor = "white";
    tiles[5].style.backgroundColor = "blue";

    tiles[6].style.backgroundColor = "orange";
    tiles[7].style.backgroundColor = "purple";
    tiles[8].style.backgroundColor = "gray";
}
function patternE(color1, color2){
    const tiles = rubix.children;
    tiles[0].style.backgroundColor = color1;
    tiles[1].style.backgroundColor = color1;
    tiles[2].style.backgroundColor = color1;

    tiles[3].style.backgroundColor = color2;
    tiles[4].style.backgroundColor = color2;
    tiles[5].style.backgroundColor = color2;

    tiles[6].style.backgroundColor = color1;
    tiles[7].style.backgroundColor = color1;
    tiles[8].style.backgroundColor = color1;
}

function patternIII(color1, color2){
    const tiles = rubix.children;
    tiles[0].style.backgroundColor = color1;
    tiles[1].style.backgroundColor = color2;
    tiles[2].style.backgroundColor = color1;

    tiles[3].style.backgroundColor = color1;
    tiles[4].style.backgroundColor = color2;
    tiles[5].style.backgroundColor = color1;

    tiles[6].style.backgroundColor = color1;
    tiles[7].style.backgroundColor = color2;
    tiles[8].style.backgroundColor = color1;
}

function patternEXE(color1, color2, pattern){
    if(pattern === "X"){
        patternX(color1, color2);
    }
    else if(pattern === "E"){
        patternE(color1, color2);
    }
    else if(pattern === "III")
    {
        patternIII(color1, color2);
    }
    else {
        console.log("something went wrong with the pattern fucntion");
    }
}

function getFormData(formId){
    
    return new FormData(document.getElementById(formId));
}

function applyFormData(formData){
    let color1, color2, pattern;
    color1 = formData.get("color-1");
    color2 = formData.get("color-2");
    pattern = formData.get("pattern");
//apply this data to the grid items

    if(!rubix.classList.contains("spin")){

        rubix.classList.add("spin");
        
    }
    patternEXE(color1, color2, pattern);
    if (interval) {
        clearInterval(interval);
        interval = null;
    } 

    interval = setInterval( function() {
        rubix.classList.remove("spin");
       
    }, 2000);

    
  

}

submitButton.addEventListener("click", function(e){
    e.preventDefault();
    applyFormData(getFormData("the-form"));
   /* window.onbeforeunload = function() {
        return "Dude, are you sure you want to leave? Think of the kittens!";
    }*/
});
