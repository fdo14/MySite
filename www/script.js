var x = document.getElementById("modules").querySelectorAll(".col-sm-4");

var id = 1;

function clickLeft(){
  x[id-2].style.display = "block";
  x[id+1].style.display = "none";
  id--;
}

function clickRight(){
  x[id-1].style.display = "none";
  x[id+2].style.visibility = "visible";
  id++;

  var idNewCenterModule = x[id].id
  var idNewRightModule = x[id+1].id
  var idNewLeftModule = x[id-1].id

  var centerClass = document.getElementById(idNewCenterModule);
  centerClass.classList.remove("right");
  document.getElementById(idNewCenterModule).onclick = null;

  var leftClass = document.getElementById(idNewLeftModule);
  leftClass.classList.add("left");
  document.getElementById(idNewLeftModule).setAttribute('onclick','clickLeft()')

  var rightClass = document.getElementById(idNewRightModule);
  rightClass.classList.add("right");




}
