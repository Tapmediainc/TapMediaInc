
<template >
  <div class="service-slider">
    <!-- list Items -->
    <div class="service-list">
        <div class="service-item active">
            <img src="assets/img/mobile_app.png">
            <div class="service-content">
                <p></p>
                <h2>Software Development and Mobile Applications</h2>
                <p>
                   
                </p>
            </div>
        </div>
        <div class="service-item">
            <img src="assets/img/management_app.png">
            <div class="service-content">
                <p></p>
                <h2>Development and Operation of Chat Applications</h2>
                <p>
                   
                </p>
            </div>
        </div>
        <div class="service-item">
            <img src="assets/img/web_design.png">
            <div class="service-content">
                <p></p>
                <h2>Website, Logo, and Banner Design</h2>
                <p>
                </p>
            </div>
        </div>
    </div>
    <!-- button arrows -->
    <div class="arrows">
        <button id="prev"><</button>
        <button id="next">></button>
    </div>
    </div>
</template>
  
<script>

export default {
mounted() {
let items = document.querySelectorAll('.service-slider .service-list .service-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.service-slider .service-list .service-item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

svg{
width: 25px;
}


/* css slider */
.service-slider{
height: 100vh;
margin-top: -50px;
position: relative;
}
.service-slider .service-list .service-item{
position: absolute;
inset: 0 0 0 0;
overflow: hidden;
opacity: 0;
transition: .5s;
}
.service-slider .service-list .service-item img{
width: 100%;
height: 100%;
object-fit: cover;
}
.service-slider .service-list .service-item::after{
content: '';
width: 100%;
height: 100%;
position: absolute;
left: 0;
bottom: 0;
/* background-image: linear-gradient(
    to top, #000 40%, transparent
); */
}
.service-slider .service-list .service-item .service-content{
position: absolute;
left: 10%;
top: 20%;
width: 500px;
max-width: 80%;
z-index: 1;

}
.service-slider .service-list .service-item .service-content p:nth-child(1){
text-transform: uppercase;
letter-spacing: 10px;
color: rgb(14, 109, 141);
}
.service-slider .service-list .service-item .service-content h2{
font-size: 60px;
margin: 0;
color: rgb(14, 109, 141);
}
.service-slider .service-list .service-item.active{
opacity: 1;
z-index: 10;
}
@keyframes showContent {
to{
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
}
}
.service-slider .service-list .service-item.active p:nth-child(1),
.service-slider .service-list .service-item.active h2,
.service-slider .service-list .service-item.active p:nth-child(3){
transform: translateY(30px);
filter: blur(20px);
opacity: 0;
animation: showContent .5s .7s ease-in-out 1 forwards;
color: rgb(14, 109, 141);
}
.service-slider .service-list .service-item.active h2{
animation-delay: 1s;
}
.service-slider .service-list .service-item.active p:nth-child(3){
animation-duration: 1.3s;
}
.arrows{
position: absolute;
top: 30%;
right: 50px;
z-index: 100;
}
.arrows button{
background-color: #eee5;
border: none;
font-family: monospace;
width: 40px;
height: 40px;
border-radius: 5px;
font-size: x-large;
color: #eee;
transition: .5s;
}
.arrows button:hover{
background-color: #eee;
color: black;
}
.thumbnail{
position: absolute;
bottom: 50px;
z-index: 11;
display: flex;
gap: 10px;
width: 100%;
height: 250px;
padding: 0 50px;
box-sizing: border-box;
overflow: auto;
justify-content: center;
}
.thumbnail::-webkit-scrollbar{
width: 0;
}
.thumbnail .item{
width: 150px;
height: 220px;
filter: brightness(.5);
transition: .5s;
flex-shrink: 0;
}
.thumbnail .item img{
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
}
.thumbnail .item.active{
filter: brightness(1.5);
}
.thumbnail .item .content{
position: absolute;
inset: auto 10px 10px 10px;
}
@media screen and (max-width: 678px) {
.thumbnail{
    justify-content: start;
}
.service-slider .service-list .service-item .service-content h2{
    font-size: 20px;
}
.arrows{
    top: 10%;
}

.service-slider .service-list .service-item img{
    width: 120%;
    height: 100%;
    object-fit: scale-down;
}
}
</style>
