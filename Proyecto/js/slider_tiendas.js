
var slider = document.getElementById('slider');
var active = document.getElementById('active');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var line4 = document.getElementById('line4');

var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');

line1.onclick = function(){
    slider.style.transform = 'translateX(0)';
    active.style.top = '0px';
}
li1.onclick = function(){
    slider.style.transform = 'translateX(0)';
    active.style.top = '0px';
}


line2.onclick = function(){
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '80px';
}
li2.onclick = function(){
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '80px';
}

li3.onclick = function(){
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '160px';
}
line3.onclick = function(){
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '160px';
}

li4.onclick = function(){
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '240px';
}
line4.onclick = function(){
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '240px';
}