
$('#myInput').keypress(function(event) {
    if (event.keyCode == 13) {
            event.preventDefault();   
            myFunction();
       }
   });
    
function myFunction(){
    var ten = document.getElementsByClassName("product_name");
    var product = document.getElementsByClassName("sneaker");
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    console.log(filter);
    var filter2;
    for ( var i = 0; i < ten.length; i++)
    {
       filter2 = ten[i].innerText.toUpperCase();
       console.log(filter2);
       if ( filter2.indexOf(filter) != -1)
        {
            product[i].style.display = "block";
        
        }
        else
        {
            product[i].style.display = "none";
          
        }
        
    }
}

function Open(aboutusId)
{
    var s=document.getElementById(aboutusId);
    if(s.style.display=="none"){
        s.style.display="block";
    }
    else
        s.style.display="none";
}

var a = document.getElementById("mybutton");
window.onscroll = function(){
    hide();
} 

function hide(){
    if ( document.documentElement.scrollTop > 80){
        a.style.display = "block";
    }
    else
    { 
        a.style.display = "none";   
    }
}

function backtop(){
    document.documentElement.scrollTop=0;
}