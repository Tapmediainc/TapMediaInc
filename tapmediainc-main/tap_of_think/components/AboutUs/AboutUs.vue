<template>
    <section class="section about-us ptb_50 pl-2 pr-2">
        <div class="container">
            <h2 class="about-title">Introduction</h2>
            <hr class="center-star">
            <div class="row pt-5">
                <p class="about-description" style="text-align: justify;">TAP Media is a multimedia communications and technology conglomerate established in 2021 in the city of Las Vegas, Nevada, USA. In the era of Industry 4.0 and artificial intelligence, the world is gradually adapting to these advancements. TAP Media provides a space for multimedia communication and technology, simultaneously constructing an efficient information bridge for the community in the digital age.</p>
                <p class="about-description" style="text-align: justify;">To support digital transformation and enable quicker access to digital technology for everyone, we have introduced a newspaper called Tap News (comprising an online newspaper, television channel, and soon-to-be-launched mobile app). It aims to meet the demand for rapid, accurate, multidirectional information updates that are easily accessible on all devices.</p>
                <p class="about-description" style="text-align: justify;">Despite the positive aspects of advanced technology, there is a risk of personal information being stolen. In response, we have launched the YOUSH chat app with end-to-end encryption technology. End-to-end encryption (E2EE) is a simple way to encrypt data, preventing third parties from viewing it as it is transmitted from one device to another.</p>
                <p class="about-description" style="text-align: justify;">In the upcoming period, we plan to introduce the TAP social network – a secure environment allowing users to share their information and emotions. It promises to be a forum connecting people worldwide while ensuring maximum user data protection, without limiting usage by countries.</p>
                <p class="about-description" style="text-align: justify;">Furthermore, TAP Media is preparing to establish representative offices in several states of the United States, Taiwan, South Korea, and Vietnam. TAP Media is committed to providing customers with the best services and products, contributing to societal development, and shaping the promising future of multimedia communication and technology.</p>
                </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    .about-title {
        text-align: center;
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

    .about-description {
        font-size: 16px;
        color: black;
        font-weight: 300;
    }

    @media (max-width: 700px) {
        .about-description {
            font-size: 12px;
            line-height: 1.5;
            padding-left: 5%;
            padding-right: 5%;
        }
    }
</style>