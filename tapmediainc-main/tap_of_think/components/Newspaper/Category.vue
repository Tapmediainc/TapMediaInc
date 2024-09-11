
<template>
    <section id="benifits" class="section benifits-area ptb_50 " style="max-height: 100vh;">
        <h2 class="about-title">Category</h2>
        <hr class="center-star">
        <div class="row justify-content-center align-items-center ">
            <div class="col-12 col-md-6 text-center">            
                    <img class="" src="assets/img/organization.png"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    .category-description {
        font-size: 16px;
        color: black ;
        font-weight: 300;
    }

    .promo-three {
        margin: 0;
        width: 100vw;
        height: 100vw;
        padding-left: 15vw;
        padding-right: 15vw;
        font-family: Lato, sans-serif;
        color: #54575A;
        background: linear-gradient(to bottom, #FFFFFF 0%, #F3F8F7 49.91%, #FFF9F5 94.19%);
    }

    .tap-container {
        max-width: 500px;
        margin: 0 auto;
    }

    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }

    .promo-three-product-description {
        color:white;
        text-align: justify;
    }

    .design-image-d img {
        max-width: 600px;
        max-height: 300px;
    }

    .category {
        max-width: 800px;
        max-height: 800px;
    }

    .yoush-title {
        width: 458px;
        height: 135px;
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        
        /* line-height: 67px; */
    }

    .yoush-description {
        text-align: justify;
        
    }
    

    .button-container {
        display: flex;
        padding-top: 5px;
    }

    .app-store-btn img {
        width: 100px;
        height: 40px;
    }

    .app-store-btn {
        padding-right: 5px;
        
    }

    .google-play-btn {
       
    }

    .google-play-btn img {
        width: 120px;
        height: 40px;
    }

    .main-image-container {
        transform: translatey(0px);
        animation: float 6s ease-in-out infinite;
        img { width: 100%; height: auto; }
    }

    .main-image-container img {
    }




    @media only screen and (max-width: 767px) {
        .design-image-d img {
            max-width: 300px;
            max-height: 150px;
        }

        .yoush-title {
            width: 200px;
            font-style: normal;
            font-weight: 500;
            font-size: 25px;
        }


        #benifits {
            min-height: 90vh;
        }

        .category-description {
            font-size: 14px;
        }

        hr {
            width: 50%;
        }


    }
</style>