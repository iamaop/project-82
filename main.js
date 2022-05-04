var mouse_event="empty";
console.log(mouse_event);

canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var color=document.getElementById('color').value;
var width=document.getElementById("width").value;
var rudias=document.getElementById("rudias").value;
var mouse_event="mousedown";


canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
   rudias=document.getElementById("rudias").value;
    mouse_event='mousedown';

}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
 mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event='mouseleave';
    console.log(mouse_event)
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event='mouseleave';
    console.log(mouse_event)
}

canvas.addEventListener("mousemove", my_mousemove); 
function my_mousemove(e) 
{ current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouse_event=="mousedown")
    {
        console.log("Current position of x and y coordinates = ");
        console.log("x = "+current_position_of_mouse_x+"y = " +current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,rudias,0,2 *Math.PI);
ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;

    last_position_of_y = current_position_of_mouse_y;

}

function clear_canvas(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}