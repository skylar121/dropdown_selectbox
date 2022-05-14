const title = document.querySelector(".favorite");
const list = document.querySelector(".list");
function toggleShow(event) {
  list.classList.toggle('show');
  if(list.classList.contains('show')) {
      title.style.backgroundImage = "url(/images/icon-Triangle-up.png)";
  } else {
      title.style.backgroundImage = "url(/images/icon-Triangle-down.png)";
  };
};

title.addEventListener('mousedown', toggleShow);

document.querySelectorAll("button").forEach(element => {
  element.addEventListener('mousedown', () => {
    title.textContent = element.textContent;              
  });
});
      
title.addEventListener('blur', toggleShow);