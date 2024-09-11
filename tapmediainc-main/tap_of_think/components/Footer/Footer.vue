<template>
    <footer class="section footer-area footer-bg">
        <!-- Footer Top -->
        <div class="footer-top ptb_100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3 pr-md-5">
                        <!-- Footer Items -->
                        <div class="footer-items">
                            <!-- Logo -->
                            <a class="navbar-brand" href="#">
                                <img class="logo" src="assets/img/image-removebg-preview.png" alt="">
                            </a>
                            <p class="text-white-50 mt-1 mb-1">TAP Media Inc</p>
                            <p class="text-white-50 mt-1 mb-1">Address: 7280 Spring Flower Ave, Las Vegas, NV 89117</p>
                            <p class="text-white-50 mt-1 mb-1">Tel: +13605050505</p>
                            <p class="text-white-50 mt-1 mb-1">Email: contact@tapmediainc.com</p>
                            <!-- <div class="social-icons d-flex">
                                <a class="facebook" href="#">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="twitter" href="#">
                                    <img src="assets/img/yoush.png"/>
                                </a>
                                <a class="google-plus" href="#">
                                    <i class="fab fa-google-plus-g"></i>
                                    <i class="fab fa-google-plus-g"></i>
                                </a>
                                <a class="vine" href="#">
                                    <i class="fab fa-vine"></i>
                                    <i class="fab fa-vine"></i>
                                </a>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 pt-3 pl-md-5">
                        <!-- Footer Items -->
                        <div class="footer-items ">
                            <!-- Footer Title -->
                            <h3 class="footer-title text-white mb-2">Useful Links</h3>
                            <ul>
                                <li class="py-2"><a class="text-white-50" href="/">Home</a></li>
                                <li class="py-2"><a class="text-white-50" href="/about">About Us</a></li>
                            
                                <li class="py-2"><a class="text-white-50" href="#">News</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="footer-items iframe-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.6018127286434!2d-115.25322512448122!3d36.12755750532778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0cd19a32aad%3A0xf3c6a032ee52307d!2s7280%20Spring%20Flower%20Ave%2C%20Las%20Vegas%2C%20NV%2089117%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1709125983209!5m2!1sen!2s" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <!-- <div class="col-12 col-sm-6 col-lg-3">
                        <div class="footer-items">
                            <h3 class="footer-title text-white mb-2">Product Help</h3>
                            <ul>
                                <li class="py-2"><a class="text-white-50" href="#">FAQ</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">Privacy Policy</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">Support</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">Terms &amp; Conditions</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> -->
                    <!-- <div class="col-12 col-sm-6 col-lg-3">
                        <div class="footer-items">
                            <h3 class="footer-title text-white mb-2">Download</h3>
                            <ul>
                                <li class="py-2"><a class="text-white-50" href="#">For Windows</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">For Linux</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">For IOS</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">For Android</a></li>
                                <li class="py-2"><a class="text-white-50" href="#">For Mac</a></li>
                            </ul>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Copyright Area -->
                        <div class="copyright-area  text-center py-4">
                            <!-- Copyright Left -->
                            <div class="copyright-left text-white-50 copyright-align">&copy; Copyright © 2021 - 2024 - TAP Media Inc.</div>
                            <!-- Copyright Right -->
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    @media only screen and (max-width: 767px) {
    .iframe-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-items > iframe{
        height: 250px;
        width: 250px;
    }

    .tap-logo {
        margin-top: -20px;
    }

    .copyright-align {
        text-align: center;
    }
}
</style>