<template>
    <section class="" >
        <!-- <div class="shapes-container">
            <div class='shape-1 blob'></div>
        </div> -->

        <div class="text-center pt-md-5">
            <h2>About TAPNews</h2>
            <hr class="center-star">
        </div>


        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 order-md-2 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">Understanding the difficulties and needs of the Vietnamese community in the United States, TAP News is launched with the mission of providing diverse, accurate, and up-to-date information about Vietnam, the United States, and countries around the world. TAP News serves as a cultural bridge, where you can</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-else>Hiểu biết về những khó khăn và nhu cầu của cộng đồng người Việt tại Hoa Kỳ, TAP News được ra mắt với nhiệm vụ cung cấp thông tin đa dạng, chính xác và cập nhật về Việt Nam, Hoa Kỳ và các quốc gia trên thế giới. TAP News là cầu nối văn hóa, nơi bạn có thể</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🛡️ <span style="font-weight: bold; font-style: italic;">Stay updated 24/7 :</span> International news, global reports, and hot events within the Vietnamese community in the U.S. are continuously updated.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-else>🛡️ <span style="font-weight: bold; font-style: italic;">Cập nhật 24/7 :</span> Tin tức quốc tế, báo cáo toàn cầu và sự kiện nóng bên trong cộng đồng người Việt tại Mỹ luôn được cập nhật liên tục.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">💬 <span style="font-weight: bold; font-style: italic;">Explore Vietnamese culture :</span> Immerse yourself in stories about Vietnamese culture, cuisine, and life, from homeland to foreign land.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-else>💬 <span style="font-weight: bold; font-style: italic;">Khám phá văn hóa Việt Nam :</span> Đắm chìm trong những câu chuyện về văn hóa, ẩm thực và cuộc sống của người Việt, từ quê hương đến đất nước ngoại.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🔧 <span style="font-weight: bold; font-style: italic;">Understand the United States :</span> Learn about the economy, legal system, and life of Vietnamese people here, helping you integrate quickly and successfully into the new country.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-else>🔧 <span style="font-weight: bold; font-style: italic;">Hiểu về Hoa Kỳ :</span> Tìm hiểu về nền kinh tế, hệ thống pháp luật và cuộc sống của người Việt tại đây, giúp bạn tích hợp nhanh chóng và thành công vào đất nước mới.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Expand your horizons :</span> Access news, culture, cuisine, entertainment, etc., from various countries, enriching your knowledge and understanding of the world.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Mở rộng tầm nhìn :</span> Truy cập tin tức, văn hóa, ẩm thực, giải trí, v.v., từ nhiều quốc gia, làm giàu kiến thức và hiểu biết về thế giới.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Socialize and connect :</span> Join the TAP News community, share experiences, exchange knowledge, and connect with like-minded Vietnamese individuals.</p>
                <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Giao lưu và kết nối :</span> Tham gia cộng đồng TAP News, chia sẻ kinh nghiệm, trao đổi kiến thức và kết nối với những người Việt cùng suy nghĩ.</p>
            </div>
            </div>
           

            <div class="col-12 col-md-6 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/news_feat.jpg" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 order-md-1 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" v-if="language === 'english'">TAP News takes pride in providing you with a rich, multidimensional, and continuously updated information environment, helping you always stay informed about the latest and most important news about Vietnam, the United States, and the world.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>TAP News tự hào cung cấp cho bạn một môi trường thông tin phong phú, đa chiều và luôn được cập nhật liên tục, giúp bạn luôn cập nhật thông tin về những tin tức mới nhất và quan trọng nhất về Việt Nam, Hoa Kỳ và thế giới.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">Highlights of TAP News:</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>Nổi bật của TAP News:</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🛡️ <span style="font-weight: bold; font-style: italic;">Rich and diverse content :</span> Including international news, global reports, culture, economy, cuisine, legal matters, and the lives of Vietnamese people in the U.S. and around the world.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🛡️ <span style="font-weight: bold; font-style: italic;">Nội dung phong phú và đa dạng :</span> Bao gồm tin tức quốc tế, báo cáo toàn cầu, văn hóa, kinh tế, ẩm thực, vấn đề pháp lý và cuộc sống của người Việt tại Mỹ và trên toàn thế giới.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">💬 <span style="font-weight: bold; font-style: italic;">Continuous 24/7 updates :</span> Ensuring you never miss any important news.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>💬 <span style="font-weight: bold; font-style: italic;">Cập nhật liên tục 24/7 :</span> Đảm bảo bạn không bao giờ bỏ lỡ bất kỳ tin tức quan trọng nào.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🔧 <span style="font-weight: bold; font-style: italic;">Accurate, reliable information :</span> Our experienced and professional editorial team always strives to verify information and deliver high-quality articles to you.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🔧 <span style="font-weight: bold; font-style: italic;">Thông tin chính xác, đáng tin cậy :</span> Đội ngũ biên tập viên giàu kinh nghiệm và chuyên nghiệp của chúng tôi luôn cố gắng xác minh thông tin và cung cấp các bài viết chất lượng cao cho bạn.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Interactive, connecting environment :</span> Join the TAP News community to share experiences, exchange knowledge, and connect with like-minded Vietnamese individuals.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Môi trường tương tác, kết nối :</span> Tham gia cộng đồng TAP News để chia sẻ kinh nghiệm, trao đổi kiến thức và kết nối với những người Việt cùng suy nghĩ.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Contributing to community building :</span> Join hands in building a stronger and more cohesive Vietnamese community in the United States.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Đóng góp vào việc xây dựng cộng đồng :</span> Hãy chung tay xây dựng một cộng đồng người Việt mạnh mẽ và gắn kết hơn tại Hoa Kỳ.</p>
                </div>
            </div>
           

            <div class="col-12 col-md-6 order-md-1 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/entertainment.jpg" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 order-md-2 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" v-if="language === 'english'">In addition to providing a rich, multidimensional, and reliable source of information, TAP News also offers the Vietnamese community in the United States an effective online platform for promotion and reaching potential customers through the Classifieds section.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>TAP News không chỉ cung cấp một nguồn thông tin phong phú, đa chiều và đáng tin cậy mà còn cung cấp cho cộng đồng người Việt tại Hoa Kỳ một nền tảng trực tuyến hiệu quả để quảng bá và tiếp cận khách hàng tiềm năng thông qua phần Mục rao vặt.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">Benefits of the Classifieds section on TAP News:</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>Lợi ích của phần Mục rao vặt trên TAP News:</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🛡️ <span style="font-weight: bold; font-style: italic;">Reach potential customers :</span> The Classifieds section makes it easy for you to post information about your products and services to the right target audience, thereby expanding your market and increasing revenue.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🛡️ <span style="font-weight: bold; font-style: italic;">Tiếp cận khách hàng tiềm năng :</span> Phần Mục rao vặt giúp bạn dễ dàng đăng thông tin về sản phẩm và dịch vụ của mình đến đúng đối tượng khách hàng, từ đó mở rộng thị trường và tăng doanh số.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">💬 <span style="font-weight: bold; font-style: italic;">Increase networking opportunities :</span> The Classifieds section acts as a bridge between buyers and sellers, helping you connect with potential customers and build an effective business network.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>💬 <span style="font-weight: bold; font-style: italic;">Tăng cơ hội mạng lưới :</span> Phần Mục rao vặt là cầu nối giữa người mua và người bán, giúp bạn kết nối với khách hàng tiềm năng và xây dựng một mạng lưới kinh doanh hiệu quả.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🔧 <span style="font-weight: bold; font-style: italic;">Brand promotion :</span> The Classifieds section helps you introduce your brand, products, and services to a wide range of Vietnamese people in the United States, enhancing brand recognition and attracting new customers.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🔧 <span style="font-weight: bold; font-style: italic;">Quảng bá thương hiệu :</span> Phần Mục rao vặt giúp bạn giới thiệu thương hiệu, sản phẩm và dịch vụ của bạn đến một loạt người Việt Nam tại Hoa Kỳ, nâng cao nhận thức về thương hiệu và thu hút khách hàng mới.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Support business and stability of life :</span> The Classifieds section is a useful tool for Vietnamese people in the United States to promote services, find customers, generate stable income, and contribute to the development of the community.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Hỗ trợ kinh doanh và ổn định cuộc sống :</span> Phần Mục rao vặt là một công cụ hữu ích cho người Việt Nam tại Hoa Kỳ để quảng bá dịch vụ, tìm kiếm khách hàng, tạo ra thu nhập ổn định và đóng góp vào sự phát triển của cộng đồng.</p>
                </div>
            </div>
           

            <div class="col-12 col-md-6 pt-md-2 product-box " >
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/ads_media.jpg" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>
        <p class="tap-description text-center pb-5 pl-1 pr-1 pt-3" :style="{ 'font-weight': 'bold' }">
            <span v-if="language === 'english'">Please visit our <a href="https://iamtapnews.com/">TAP News</a> website to read the latest news. We are always open to feedback and suggestions from our readers.</span>
            <span v-else>Xin vui lòng truy cập trang web <a href="https://iamtapnews.com/">TAP News</a> của chúng tôi để đọc tin tức mới nhất. Chúng tôi luôn mở cửa để nhận phản hồi và đề xuất từ độc giả.</span>
        </p>       
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
        line-height: 1.4;  
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
