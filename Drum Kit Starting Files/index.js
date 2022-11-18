
//DETECTING BUTTON PRESS
numberOfButtons = document.querySelectorAll(".drum").length
for ( var a = 0; a < numberOfButtons; a++) {
    document.querySelectorAll(".drum")[a].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
    
    })
    
}
//DETECTING KEYBOARD
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
})
function makeSound(key){
  switch (key) {
    case "w":
        var crashh= new Audio("sounds/crash.mp3");
        crashh.play();
        break;

        case "a":
            var kickbs= new Audio("sounds/kick-bass.mp3");
            kickbs.play();
            break;

            case"s":
               var snar = new Audio('sounds/snare.mp3');
                 snar.play();
                   break;

                   case"d":
                     var tom1 = new Audio('sounds/tom-1.mp3');
                       tom1.play();
                         break;
                        
                         case "j":
                            var tom2=new Audio("sounds/tom-2.mp3");
                            tom2.play();
                            break;

                            case "k":
                                var tom3=new Audio("sounds/tom-3.mp3");
                                tom3.play();
                                break;

                                case "l":
                                    var tom4=new Audio("sounds/tom-4.mp3");
                                    tom4.play();
                                    break;
        

    default:console.log(buttonInnerHTML);
        break;
  }
}

function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout (function(){
  activeButton.classList.remove("pressed");
},100);
}