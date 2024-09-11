
<template>
    <section  class="pb-5 ">
        <h2 style="text-align: center">Introduction</h2>
        <hr class="center-star">
        <div class="container">
            <div class="row align-items-center">
                <!-- Welcome Intro Start -->
                <div class="col-12 col-md-7 col-lg-6">
                    <div class="">
                        <p class="app-title">Welcome to Yoush, the ultimate private messaging app that combines security with social connection! With private messages, high-quality calls, and seamless group messaging, Yoush ensures your communication is always private and personal. Elevate your experience by sharing your stories with friends through our intuitive story feature. Yoush - where privacy and connection converge effortlessly. Download now and experience the future of private messaging!</p>
                    </div>
                </div>
                <div class="col-12 col-md-5 col-lg-6">
                    <!-- Welcome Thumb -->
                    <div class="welcome-thumb text-center" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                       
                        <img src="assets/img/homepage_hero.png" class="rounded-lg" alt="">
                    </div>
                    <!-- Video Icon -->
                </div>
            </div>
        </div>
        <h2 style="text-align: center">Feature</h2>
        <hr class="center-star">
    </section>
</template>
<script>
export default {
}
</script>
<style>
    .app-title {
        text-align: justify;
        font-size : 16px;
        font-weight: 300;
        color: black ;
    }


    hr {
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

    @media only screen and (max-width: 767px) {
        hr {
                width: 40%;
                &.center-star {
                    &:before {
                        left: 45%;
                    }
                }
            }

        .app-title {
            font-size: 14px;
        }
    }
</style>