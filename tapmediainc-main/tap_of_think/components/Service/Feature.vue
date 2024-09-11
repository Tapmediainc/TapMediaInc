<template>
    <section class="" >
        <!-- <div class="shapes-container">
            <div class='shape-1 blob'></div>
        </div> -->

        <div class="text-center pt-md-5">
            <h2>Our Services</h2>
            <hr class="center-star">
        </div>


        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Software Development and Mobile Applications</p>
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Phát Triển Phần Mềm và Ứng Dụng Di Động</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">TAP Media Inc Group is a prominent name in the field of software development and mobile applications. With a professional and dedicated team, we are committed to providing customers and partners with advanced and unique technology solutions.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>Tập Đoàn TAP Media Inc là một cái tên nổi bật trong lĩnh vực phát triển phần mềm và ứng dụng di động. Với đội ngũ chuyên nghiệp và tận tâm, chúng tôi cam kết mang đến cho khách hàng và đối tác các giải pháp công nghệ tiên tiến và độc đáo.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🛠️ <span style="font-weight: bold; font-style: italic;">Innovation and Advancement :</span> At TAP Media Group, we are passionate and innovative creators, always at the forefront of applying the latest technology to our products and services. We continuously explore and develop breakthrough solutions, from mobile applications to multi-platform software.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🛠️ <span style="font-weight: bold; font-style: italic;">Sáng Tạo và Tiến Bộ :</span> Tại Tập Đoàn TAP Media, chúng tôi là những nhà sáng tạo đam mê và luôn ở hàng đầu trong việc áp dụng công nghệ mới nhất vào sản phẩm và dịch vụ của chúng tôi. Chúng tôi liên tục khám phá và phát triển các giải pháp đột phá, từ ứng dụng di động đến phần mềm đa nền tảng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">📈 <span style="font-weight: bold; font-style: italic;">Custom Solutions :</span> We understand that every business has unique needs. With dedication and customization, we develop custom software solutions and mobile applications tailored to the business goals and specific requirements of each customer.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>📈 <span style="font-weight: bold; font-style: italic;">Giải Pháp Tùy Chỉnh :</span> Chúng tôi hiểu rằng mỗi doanh nghiệp có nhu cầu riêng biệt. Với sự tận tâm và tùy chỉnh, chúng tôi phát triển các giải pháp phần mềm và ứng dụng di động tùy chỉnh phù hợp với mục tiêu kinh doanh và yêu cầu cụ thể của từng khách hàng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Networking and Expansion :</span> We are not just a service provider; we are your strategic partner in expanding and developing your business across all technology platforms. We help you connect with target audiences and customers worldwide.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Kết Nối và Mở Rộng :</span> Chúng tôi không chỉ là nhà cung cấp dịch vụ; chúng tôi là đối tác chiến lược của bạn trong việc mở rộng và phát triển doanh nghiệp của bạn trên tất cả các nền tảng công nghệ. Chúng tôi giúp bạn kết nối với đối tượng khách hàng và khách hàng trên toàn thế giới.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌟 <span style="font-weight: bold; font-style: italic;">Mission and Vision :</span> Our mission is to deliver value and create the best experiences for users. Our vision is to become a reputable name and a source of inspiration in the fields of information technology and communications.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌟 <span style="font-weight: bold; font-style: italic;">Sứ Mệnh và Tầm Nhìn :</span> Sứ mệnh của chúng tôi là mang lại giá trị và tạo ra những trải nghiệm tốt nhất cho người dùng. Tầm nhìn của chúng tôi là trở thành một cái tên uy tín và nguồn cảm hứng trong lĩnh vực công nghệ thông tin và truyền thông.</p>
                </div>
            </div>

           

            <div class="col-12 col-md-6 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/mobile_app_service.jpg" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 order-md-2 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Development and Operation of Chat Applications</p>
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Phát Triển và Vận Hành Ứng Dụng Chat</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">TAP Media Inc Group is a reputable name in the development and operation of secure chat applications. We are committed to providing the safest and most secure online communication experience for users.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>Tập Đoàn TAP Media Inc là một cái tên uy tín trong việc phát triển và vận hành các ứng dụng chat an toàn. Chúng tôi cam kết mang đến trải nghiệm trò chuyện trực tuyến an toàn và bảo mật nhất cho người dùng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🛡️ <span style="font-weight: bold; font-style: italic;">Robust Security :</span> Security and data protection are always our top priorities. We implement the most advanced security measures to ensure that all user data and conversations are safely and privately protected.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🛡️ <span style="font-weight: bold; font-style: italic;">Bảo Mật Mạnh Mẽ :</span> An ninh và bảo vệ dữ liệu luôn là ưu tiên hàng đầu của chúng tôi. Chúng tôi triển khai các biện pháp bảo mật tiên tiến nhất để đảm bảo rằng tất cả dữ liệu và cuộc trò chuyện của người dùng đều được bảo vệ an toàn và riêng tư.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">💬 <span style="font-weight: bold; font-style: italic;">Excellent Communication Experience :</span> Not only focusing on security, but we also ensure that users' communication experience is excellent. Features and interfaces are designed to be flexible and user-friendly, allowing users to connect and chat without any barriers.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>💬 <span style="font-weight: bold; font-style: italic;">Trải Nghiệm Giao Tiếp Xuất Sắc :</span> Không chỉ tập trung vào bảo mật, chúng tôi còn đảm bảo rằng trải nghiệm giao tiếp của người dùng là xuất sắc. Các tính năng và giao diện được thiết kế linh hoạt và thân thiện với người dùng, cho phép người dùng kết nối và trò chuyện mà không gặp bất kỳ rào cản nào.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🔧 <span style="font-weight: bold; font-style: italic;">Continuous Development :</span> We continuously strive to develop our chat applications to meet the increasing demands of users. New features, security updates, and optimal performance are always our top priorities in the development and operation process.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🔧 <span style="font-weight: bold; font-style: italic;">Phát Triển Liên Tục :</span> Chúng tôi liên tục nỗ lực phát triển các ứng dụng chat của mình để đáp ứng nhu cầu ngày càng tăng của người dùng. Các tính năng mới, cập nhật bảo mật và hiệu suất tối ưu luôn là ưu tiên hàng đầu của chúng tôi trong quá trình phát triển và vận hành.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Networking and Interaction :</span> We are not just developers, but also partners of users in creating a safe and exciting online communication environment. We always listen to feedback and suggestions from users to continuously improve our products.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Kết Nối và Tương Tác :</span> Chúng tôi không chỉ là nhà phát triển, mà còn là đối tác của người dùng trong việc tạo ra một môi trường giao tiếp trực tuyến an toàn và hấp dẫn. Chúng tôi luôn lắng nghe phản hồi và đề xuất từ người dùng để liên tục cải thiện sản phẩm của mình.</p>
                </div>
            </div>

           

            <div class="col-12 col-md-6 order-md-1 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/chat_app_service.jpg" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Website, Logo, and Banner Design</p>
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Thiết Kế Website, Logo, và Banner</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">TAP Media Inc Group is a reliable and reputable address in the field of website, logo, and banner design. With creativity, dedication, and professional skills, we are committed to bringing customers and partners high-quality and impressive design products.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>Tập Đoàn TAP Media Inc là một địa chỉ đáng tin cậy và uy tín trong lĩnh vực thiết kế website, logo, và banner. Với sự sáng tạo, tận tụy, và kỹ năng chuyên môn, chúng tôi cam kết mang đến cho khách hàng và đối tác những sản phẩm thiết kế chất lượng và ấn tượng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🖥️ <span style="font-weight: bold; font-style: italic;">Professional Website Design :</span> We not only create beautiful websites but also ensure compatibility, optimization for mobile devices, and the best user experience. From business websites to online stores, we ensure that each project carries the unique signature of the customer.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🖥️ <span style="font-weight: bold; font-style: italic;">Thiết Kế Website Chuyên Nghiệp :</span> Chúng tôi không chỉ tạo ra các website đẹp mắt mà còn đảm bảo tính tương thích, tối ưu hóa cho thiết bị di động, và trải nghiệm người dùng tốt nhất. Từ các website doanh nghiệp đến cửa hàng trực tuyến, chúng tôi đảm bảo mỗi dự án mang dấu ấn độc đáo của khách hàng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🎨 <span style="font-weight: bold; font-style: italic;">Creative Logo and Banner Design :</span> Logos and banners are symbols of brands, essential elements in creating impressions and brand recognition. We not only design visually appealing logos and banners but also provide creative solutions that align with the essence and message of the brand.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🎨 <span style="font-weight: bold; font-style: italic;">Thiết Kế Logo và Banner Sáng Tạo :</span> Logo và banner là biểu tượng của thương hiệu, yếu tố quan trọng trong việc tạo ấn tượng và nhận diện thương hiệu. Chúng tôi không chỉ thiết kế logo và banner hấp dẫn về mặt hình ảnh mà còn cung cấp các giải pháp sáng tạo phù hợp với bản chất và thông điệp của thương hiệu.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌟 <span style="font-weight: bold; font-style: italic;">Dedication and Flexibility :</span> We always listen to and understand the needs of customers to provide the best solutions. Flexibility and dedication in every detail help us create unique and quality design products.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌟 <span style="font-weight: bold; font-style: italic;">Tận Tâm và Linh Hoạt :</span> Chúng tôi luôn lắng nghe và hiểu rõ nhu cầu của khách hàng để cung cấp các giải pháp tốt nhất. Linh hoạt và tận tâm trong từng chi tiết giúp chúng tôi tạo ra những sản phẩm thiết kế độc đáo và chất lượng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Networking and Expansion :</span> We are not just service providers; we are your strategic partners in building and developing brand images across all media platforms. We help you connect with target audiences and expand your business market.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Kết Nối và Mở Rộng :</span> Chúng tôi không chỉ là nhà cung cấp dịch vụ; chúng tôi là đối tác chiến lược của bạn trong việc xây dựng và phát triển hình ảnh thương hiệu trên tất cả các nền tảng truyền thông. Chúng tôi giúp bạn kết nối với đối tượng khách hàng mục tiêu và mở rộng thị trường kinh doanh.</p>
                </div>
            </div>

           

            <div class="col-12 col-md-6 pt-md-2 product-box " >
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/web_dev_service.jpg" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
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
