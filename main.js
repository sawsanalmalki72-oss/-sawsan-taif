var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow < 12){
  greeting="صباح الورد و الرضا"
}
else if (hourNow > 18) {
  greeting="يسعد مساك بكل خير"
}
else {
  greeting="اهلا بك في الطائف"
}
document.write(greeting);


document.querySelector('.menu').insertAdjacentHTML('afterbegin', '<div class="hamburger" id="hamBtn">☰ </div>');
document.getElementById('hamBtn').onclick = function() {
  document.querySelector('.menu ul').classList.toggle('show');
};


document.querySelectorAll('img').forEach(img => {
  img.onclick = function() {
    this.style.border = "5px solid #BAD6EB";
    alert("كراً لزيارتك لصور الطائف!"); 
  };
});
