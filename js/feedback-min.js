var feedbackOpen=document.querySelector(".btn-form"),feedbackPopup=document.querySelector(".modal-content"),feedbackClose=feedbackPopup.querySelector(".modal-content-close");feedbackOpen.addEventListener("click",function(a){a.preventDefault(),feedbackPopup.classList.toggle("modal-content-show")}),feedbackClose.addEventListener("click",function(a){a.preventDefault(),feedbackPopup.classList.remove("modal-content-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&feedbackPopup.classList.contains("modal-content-show")&&feedbackPopup.classList.remove("modal-content-show")});
