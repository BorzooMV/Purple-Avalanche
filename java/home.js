var elParent = document.getElementById('parent');

var firstTxt = document.createElement('h1');
firstTxt.className='txtInside1 txtInside';
firstTxt.innerHTML = 'Wraps';
var left = document.getElementById('left');

var secondTxt = document.createElement('h1');
secondTxt.className='txtInside2 txtInside';
secondTxt.innerHTML = 'Disks';
var center = document.getElementById('center');

var thirdTxt = document.createElement('h1');
thirdTxt.className='txtInside3 txtInside';
thirdTxt.innerHTML = 'Balls';
var right = document.getElementById('right');





function appear(e){
  if (e.target === left) {
    elParent.appendChild(firstTxt);
  }else if (e.target === center) {
    elParent.appendChild(secondTxt);
  }else if (e.target === right){
    elParent.appendChild(thirdTxt);
  }
}

function disappear(e){
  if (e.target === left) {
    elParent.removeChild(firstTxt);
  }else if (e.target === center) {
    elParent.removeChild(secondTxt);
  }else if (e.target === right){
    elParent.removeChild(thirdTxt);
  }
}


elParent.addEventListener('mouseover',function(e){
  appear(e);
},false);
elParent.addEventListener('mouseout',function(e){
  disappear(e);
},true);
