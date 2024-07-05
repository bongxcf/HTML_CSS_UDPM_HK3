function openTable(evt, tabname) {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}

var tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}


function register() {
  alert("Chúc mừng bạn đã đăng ký thành công");
  
}


const grid = document.querySelector('.truncate-text');

function truncateText() {
  if (grid.offsetWidth < grid.scrollWidth) {
    grid.style.overflow = 'hidden';
    grid.style.textOverflow = 'ellipsis';
    grid.style.whiteSpace = 'nowrap';
  } else {
    grid.style.overflow = 'visible';
    grid.style.textOverflow = 'initial';
    grid.style.whiteSpace = 'normal';
  }
}

window.addEventListener('load', truncateText);
window.addEventListener('resize', truncateText);


