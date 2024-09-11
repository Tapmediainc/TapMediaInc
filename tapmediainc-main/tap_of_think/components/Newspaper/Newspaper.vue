<template>
    <section class="section ptb_50 pl-2 pr-2" style="min-height: 100%;">
        <div class="news-container">
            <h2 class="about-title">Introduction</h2>
            <hr class="center-star">
            <div class="row ">
                <div class="col logo">
                    <a href="https://iamtapnews.com">
                        <img src="assets/img/logotapnews.png" alt="Landing Page Mockup">
                    </a>                
                </div>
            <div class="col">
                <p class="tap-description pt-1 pl-1 pr-1">To support digital transformation technology and help people access digital technology more quickly, we have launched a newspaper called Tap News (including an online newspaper, television channel, and soon-to-be-released mobile app). This aims to meet the demand for rapid, accurate, multidimensional information updates that are easily accessible on all devices.</p>
                <p class="tap-description pt-1 pl-1 pr-1">TAP Media is pleased to introduce TAP News to our valued readers - a reputable and unique online news platform dedicated to the Vietnamese community in the United States and worldwide. Launched in 2021, TAP News provides diverse content in the form of articles, images, and videos, offering you an authentic perspective on the lives of Vietnamese people around the world, along with continuously updated international news and global features 24/7.</p>
                 <p class="tap-description pt-1 pl-1 pr-1">TAP News is committed to delivering accurate, truthful, and objective information to readers, without bias towards any particular group or organization. With a team of experienced and passionate journalists and editors, we strive to provide you with high-quality articles, vivid images, and impressive videos.</p>
                <p class="tap-description pt-1 pl-1 pr-1">TAP News - Where the Vietnamese community worldwide connects. Come to TAP News to stay updated on the latest news, discover inspiring stories, and join hands in building a stronger Vietnamese community every day.</p>
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
    .news-container {
        padding: 10%;
    }

    .tap-description {
        font-size: 16px;
        color: black;
        font-weight: 300;
    }

    .logo {
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .logo img {
        max-height: 100px;
        max-width: 280px;
    }

    .about-title {
        text-align: center;
    }

    hr {
    border: 0;
    height: 1px;
    width: 20%;
    position: relative;
    margin: 30px auto;
    
    .tap-description {
        text-align: justify;
    }
    
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

    .about-description {
        font-size: 16px;
        color: black;
        font-weight: 300;
    }

    @media (max-width: 700px) {
        .news-container {
            padding: 2%;
        }

        .tap-description {
            font-size: 14px;
        }

        .about-description {
            font-size: 14px;
            line-height: 1.5;
        }

        .logo img {
            max-height: 200px;
            max-width: 200px;
        }
    }
</style>