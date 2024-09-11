<template>
    <section class="section download-area ptb_100">
        <div class="shapes-container d-none d-sm-block">
            <div class="shape-2"></div>
            <div class="shape-3"></div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <div class="download-text text-center">
                        <h2 v-if="language === 'english'">Download App</h2>
                    <h2 v-else>Tải Ứng Dụng</h2>
                    <hr class="center-star">
                    <p class="my-3 pt-md-5 download-description" v-if="language === 'english'">To start using Yoush, download the app from your device's app store. For Android users, open the Google Play Store, search for "Yoush Private Messenger," and tap "Install." iOS users should open the App Store, search for "Yoush Private Messenger," and tap "Get." Once installed, open the app. If prompted, grant necessary permissions for optimal functionality. Congratulations, you've successfully downloaded Yoush and are ready to proceed with registration and setup.</p>
                    <p class="my-3 pt-md-5 download-description" v-else>Để bắt đầu sử dụng Yoush, tải ứng dụng từ cửa hàng ứng dụng của thiết bị của bạn. Đối với người dùng Android, mở Google Play Store, tìm kiếm "Yoush Private Messenger" và nhấn "Cài Đặt." Người dùng iOS nên mở App Store, tìm kiếm "Yoush Private Messenger" và nhấn "Tải Xuống." Sau khi cài đặt xong, mở ứng dụng. Nếu được yêu cầu, cấp quyền cần thiết để có chức năng tối ưu. Chúc mừng bạn đã tải ứng dụng Yoush thành công và sẵn sàng tiến hành đăng ký và thiết lập.</p>
                    <div class="button-group store-buttons">
                        <a href="#" class="btn btn-bordered">
                            <i class="icofont icofont-brand-android-robot dsp-tc"></i>
                            <p class="dsp-tc" v-if="language === 'english'">GET IT ON
                                <br> <span>Google Play</span></p>
                            <p class="dsp-tc" v-else>TIẾP TỤC VỚI
                                <br> <span>Google Play</span></p>
                        </a>
                        <a href="#" class="btn btn-bordered">
                            <i class="icofont icofont-brand-apple dsp-tc"></i>
                            <p class="dsp-tc" v-if="language === 'english'">AVAILABLE ON
                                <br> <span>Apple Store</span></p>
                            <p class="dsp-tc" v-else>CÓ SẴN TRÊN
                                <br> <span>Apple Store</span></p>
                        </a>
                        <a href="#" class="btn btn-bordered d-none d-lg-inline-block">
                            <i class="icofont-brand-windows dsp-tc"></i>
                            <p class="dsp-tc" v-if="language === 'english'">AVAILABLE ON
                                <br> <span>Windows Store</span></p>
                            <p class="dsp-tc" v-else>CÓ SẴN TRÊN
                                <br> <span>Windows Store</span></p>
                        </a>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            language: 'english' // Default language is English
        };
    },
    methods: {
        toggleLanguage() {
            // Toggle between English and Vietnamese
            this.language = (this.language === 'english') ? 'vietnamese' : 'english';
        }
    }
}
</script>

<style>

    .download-description {
        font-size: 16px;
        font-weight: 300;
        color: black;
        text-align: justify;
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

@media only screen and (max-width: 767px) {
    hr {
        width: 40%;
        &.center-star {
            &:before {
                left: 45%;
            }
        }
    }

    .download-description {
        font-size: 14px;
    }
}
</style>