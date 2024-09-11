<template>
    <section id="benifits" class="section benifits-area ptb_50 promo-three-section" style="max-height: 90vh;">
        <div class="promo-three pt-md-4"> 
            <div class="row product-section">
            
                <div class="col-12 col-md-6 pl-md-5">
                    <div class="text-container">
                        <h1 class="yoush-title">Yoush Security Application</h1>
                        <p class="yoush-description pt-1">A distinctive platform providing secure and private text, voice, and video conversations. With Yoush, we not only facilitate communication but also ensure peace of mind and security with every connection, fostering trust and reliability.</p>
                        
                        <div class="button-container pt-3">
                            <div class="app-store-btn">
                                <a href="https://apps.apple.com/vn/app/yoush/id1606501045" target="_blank">
                                    <img src="assets/img/ap.png" alt="App Store">
                                </a>
                            </div>
                            <div class="google-play-btn">
                                <a href="https://play.google.com/store/apps/details?id=org.tap.media" target="_blank">
                                    <img src="assets/img/gg.png" alt="Google Play">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6  pt-5 product-box ">
                    <div class="main-image-container phone">
                        <img src="assets/img/phone_2.png" alt="Landing Page Mockup">
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
        font-size: 16px;
        color: black;
        font-weight: 300;
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
    }

    .main-image-container img {
        
    }

    .phone {
        transform: translatey(0px);
        animation: float 6s ease-in-out infinite;
        img { width: 100%; height: auto; }
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

        .yoush-description {
            font-size: 14px;
        }
    }
</style>