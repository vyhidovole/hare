let pic10 = document.getElementById('pic10')
let pic20 = document.getElementById('pic20')
let pic30 = document.getElementById('pic30')





const hare = [pic10, pic20, pic30]


pic10.onclick = function () {
   f(0)
}
pic20.onclick = function () {
   f(1)

}
pic30.onclick = function () {
   f(2)
}
function f(x) {
   hare[x].classList.add('roll')
   if (n == x) { hare[x].setAttribute('src', 'img/pic1.png') }
   else {
    setTimeout(function() {roll(x) },500)
   }
  
}

function fback(x) {
   hare[x].setAttribute('src', 'img/pic10.jpg')

}

function roll(x){
   hare[x].classList.remove('roll')
  hare[x].setAttribute('src', 'img/pic2.jpg')
      setTimeout(function () { fback(x) }, 1000)
   }





let n = Math.floor(Math.random() * 3)

console.log(n)



