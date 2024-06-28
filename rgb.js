var numsquare = 6;
var colors = generateRandomcolours(numsquare);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementsByClassName("colorDisplay")[0];
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
easybtn.addEventListener("click",function()
{
   hardbtn.classList.remove("selected");
   easybtn.classList.add("selected");
   numsquare = 3
   colors = generateRandomcolours(numsquare);
   pickedcolor = pickColor();
   colorDisplay.textContent = pickedcolor;
   for(var i=0; i<squares.length;i++)
    {
        if(colors[i])
            {
                squares[i].style.backgroundColor = colors[i];
            }
        else
        {
            squares[i].style.display = "none";
        }    
    }
});
hardbtn.addEventListener("click",function()
{
    hardbtn.classList.add("selected");
   easybtn.classList.remove("selected");
   numsquare = 6
   colors = generateRandomcolours(numsquare);
   pickedcolor = pickColor();
   console.log(pickedcolor);
   colorDisplay.textContent = pickedcolor;
   for(var i=0; i<squares.length;i++)
    {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";  
    }
});
resetButton.addEventListener("click",function()
{
    colors = generateRandomcolours(6);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    this.textContent = "New Colour";
    messageDisplay.textContent = "";
    for(var i=0; i<squares.length; i++)
        squares[i].style.backgroundColor = colors[i];
// h1.style.backgroundColor = "";
})
colorDisplay.textContent = pickedcolor;
for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clickedcolor = this.style.backgroundColor;
            if(clickedcolor === pickedcolor)
                {
                    // alert("correct");
                messageDisplay.textContent = "Correct"; 
                resetButton.textContent = "play Again";
                changecolors(clickedcolor);
                h1.style.backgroundColor = pickedcolor;
                }
                
            else
              {
                this.style.backgroundColor = "black";
                messageDisplay.textContent = "Try again"; 
              }
        })
    }
    function changecolors(color)
    {
        for(var i=0; i<squares.length; i++)
            squares[i].style.backgroundColor = color;
    }
    function pickColor()
    {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    function generateRandomcolours(num)
    {
        var arr = [];
        for(var i=0; i<num; i++)
            {
               arr.push(randomcolors());  
            }   
            return arr; 
    }
    function randomcolors()
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
         var rem = "rgb("+r+", "+g+", "+b+")";
        return rem;
    }