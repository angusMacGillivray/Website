// Function to change light theme
document.getElementById("change-theme-light").addEventListener("click", function(){
    //turning off other themes    
    document.body.classList.remove("dark-theme");
    document.body.classList.remove("green-theme");

    //turning light theme on
    document.body.classList.add("light-theme");

    
})
//function to change to green theme
document.getElementById("change-theme-green").addEventListener("click", function(){
    //turning off other themes
    document.body.classList.remove("light-theme");
    document.body.classList.remove("dark-theme");
    //turning on green theme
    document.body.classList.add("green-theme");
})
//function to change to dark theme
document.getElementById("change-theme-dark").addEventListener("click", function(){
    //turning off other themes
    document.body.classList.remove("light-theme");
    document.body.classList.remove("green-theme");
    // turning on dark theme
    document.body.classList.add("dark-theme");
})