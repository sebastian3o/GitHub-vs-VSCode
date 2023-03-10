
var images = new Array(9);



function  ChangeImage()
{
    let path = document.getElementById("source").value
    document.getElementById("imagine").src = path
}
function Random()
{
    document.getElementById("rand").innerHTML= Math.floor((Math.random()*7+1)).toString()

}

function ChangeImage()
{
    id = document.getElementById("rand").textContent
    id= parseInt(id)+1
    
  document.getElementById("i"+ parseInt(id)).src = "cosmos.jpg";
}

function schimbaMarimea()
{
    let size = document.getElementById("s").options[document.getElementById("s").selectedIndex].value;
    //prompt(size)
   
  let h = size.substring(size.indexOf('x') + 1);
  let w=  size.substring(0, size.indexOf('x'));
  
   
    for(let i=0;i<8;i++)
    {
document.querySelectorAll("img")[i].width= w;
document.querySelectorAll("img")[i].width= h;
    }
}