var popup=document.querySelector(".popup"),link=document.querySelector(".btn-contacts"),close=popup.querySelector(".btn-close"),KEY_ESC=27;link.addEventListener("click",function(a){a.preventDefault();popup.classList.add("popup-show")});close.addEventListener("click",function(a){a.preventDefault();popup.classList.remove("popup-show")});window.addEventListener("keydown",function(a){a.keyCode===KEY_ESC&&popup.classList.contains("popup-show")&&popup.classList.remove("popup-show")});