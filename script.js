/*бургер меню */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

function toggleMenu(){
    burger.classList.toggle('open');
    menu.classList.toggle('open');
}
/* Липкое меню*/
window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

/*каталог */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("content-cake");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("catalog");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}
/*показать еще */

window.onload = function () {
  var box=document.getElementsByClassName('box');
  var btn=document.getElementById('button');
  for (let i=3;i<box.length;i++) {
      box[i].style.display = "none";
  }

  var countD = 3;
  btn.addEventListener("click", function() {
      var box=document.getElementsByClassName('box');
      countD += 3;
      if (countD <= box.length){
          for(let i=0;i<countD;i++){
              box[i].style.display = "block";
          }
      }

  })
}


