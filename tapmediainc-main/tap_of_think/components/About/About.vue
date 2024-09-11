<template>
    <section class="section pt-5" style="height: 100vh; background-color: white;" >
        <!-- <div class="shapes-container">
            <div class='shape-1 blob'></div>
        </div> -->

        <div class="container container-box" style="  position: relative; z-index: 2;">
        
        <div class="text-center">
            <h2>Our Products</h2>
            <hr class="center-star">
        </div>


        <div class="row product-section pl-md-3">
            <div class="col-12 col-md-6 pt-md-4 pl-md-5  product-box ">
                <div class="text-container">
                        <h1 class="tap-title">TAP Online News</h1>
                        <p class="tap-description pt-1 pl-2 pr-2">An online newspaper dedicated to delivering the fastest, most valuable, and accurate information. As a bridge connecting you to the world, our aim is to be the go-to source for news, keeping you well-informed and engaged.</p>
                </div>
            </div>
           

            <div class="col-12 col-md-6 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="" >
                        <img src="assets/img/newspapers.png" class="img-fluid" alt="Tap News Logo">
                    </div>
                </div>
            </div>

        </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    .blob {
        height: 150px;
        width: 150px;
        border-radius: 58% 43% 33% 64% / 50% 38% 53% 50%;
        background: transparent;
        box-shadow: inset 6px 33px 20px 0 #45bbf2, inset 20px 80px 15px 0 #89ddef, 10px 20px 20px 0px #6ae2ea;
        top: 40px;
        left: 20px;
    }

    .blob::before {
        content: '';
        position: absolute;
        border-radius: 37% 54% 46% 46%;
        background: white;
        width: 50px;
        transform: rotate(-30deg);
        height: 15px;
        top: 20px;
        left: 20px;
    }

    .blob::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: white;
        width:10px;
        height: 10px;
        top: 60px;
        left: 20px;
    }

    .title {
    text-align: center;
    }

    .section-title-about {
        color: #2d3e50;
        font-size: 28px;
    }

    hr {
    border: 3px double cornflowerblue;
    }

    .product-section {
    }

    .product-head-title {
        color: black;
        font-size: 30px;
        font-weight: 600;
    }

    .product-info {
        padding: 15px;
        /* background-color: white;  */
        /* border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
        transition: transform 0.3s ease-in-out;
    }

    .product-info:hover {
        transform: scale(1.03);
    }

    .design-image-a img {
        max-width: 200px;
        height: 40px;
        border-radius: 8px;
    }

    .design-image-b img {
        max-width: 200px;
        height: 80px;
        border-radius: 8px;
    }

    .tap-title {
            width: 458px;
            height: 135px;
            font-style: normal;
            font-weight: 500;
            font-size: 50px;
            /* line-height: 67px; */
        }

    .tap-description {
            text-align: justify;
            font-size: 16px;
            font-weight: 300;
            color: black;
            
    }

hr{
  border: 0;
  height: 1px;
  width: 20%;
  position: relative;
  margin: 30px auto;
  
  
  &.center-star{
    background: #39D1B4;
    
    &:before{
      content: "★";
      color: #39D1B4;
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 50%;
      margin: 0 0 0 -3px;
      font-size: 15px;
      line-height: 0;
      text-shadow: 0 0 3px lighten(darken(#fff, 20%), 5%);
    }
  }
}
    .design-image-c {
        border-radius: 15;
        padding-right: 40px;
    }

    .design-image-c img {
        max-width: 500px; 
        max-height: 500px; 
        border-radius: 15;
    }

    .about-title {
        font-size: 30px;
        font-weight: 500;
    }

@media only screen and (max-width: 767px) {
    .blob {
        top: 0px;
        left: 0px;
    }

    hr {
        width: 40%;
        &.center-star {
            &:before {
                left: 45%;
            }
        }
    }

    .tap-description {
        font-size: 14px;
    }

    .tap-title {
            width: 200px;
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
    }

    .blob {
        height: 100px;
        width: 100px;
    }

    .design-image-a img {
        max-width: 200px; /* Make the image fluid within its container */
        height: 40px; /* Maintain the aspect ratio */
    }
    .design-image-b img {
        max-width: 150px; 
        height: 60px; 
    }

    .design-image-c img {
        max-width: 200px; 
        max-height: 200px; 
    }

    .section-title-about {
        color: #2d3e50;
        font-size: 20px;
    }

    .container {
        max-height: 1000px;
    }

    .image-blur {
        /* width: 100px; */
        opacity: 0;
    }


    }

    .product-title {
        font-weight: bold;
    }

    .product-description {
        color: black;
        margin: 10px 0;
        margin-top: 30px;
        line-height: 1.5;
        text-align: justify;
    }
    
    /* 
    .container-box {
        border: 3px solid white;
        box-shadow: 0 6px 6px 2px rgba(137, 133, 133, 0.4);
    } */

    .container-box {
        /* max-height: 550px; */
        /* background-color: white;
        opacity: 0.6; */
    }

    .product-box {
        /* background-color: white; */
        /* opacity: 0.1; */
        /* border: 8px solid linear-gradient(to bottom, #2d3e50, white); */
    }

    .image-blur {
        filter: opacity(90%);
        max-width: 25%;
        /* max-height: 100%; */
    }

</style>

