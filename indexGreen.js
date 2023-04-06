const calculatButton = document.getElementById('checker');

//listener for if the checker is clicked
calculatButton.addEventListener("click",CheckSeven);

function CheckSeven() {
    //getting the input
    ggff= document.getElementById("num").value;
    //if it is 7
    if (ggff==7){
        document.getElementById("result-message").innerHTML="thank you for writing 7, I am very happy now :D";
    }
    //if it is not seven
    else{
        document.getElementById("result-message").innerHTML="I am very sad now :(";
    }

}