<template>
    <section class="" >
        <!-- <div class="shapes-container">
            <div class='shape-1 blob'></div>
        </div> -->

        <div class="text-center pt-md-5">
            <h2>Our Services</h2>
            <hr class="center-star">
        </div>


        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5">
            <div class="col-12 col-md-6 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Advertising</p>
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Quảng Cáo</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">At TAP Media Inc, we are not just an ordinary advertising company. We are your partner in creating superior advertising strategies, highlighting your brand, and connecting with your target customers.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>Tại TAP Media Inc, chúng tôi không chỉ là một công ty quảng cáo thông thường. Chúng tôi là đối tác của bạn trong việc tạo ra các chiến lược quảng cáo xuất sắc, nổi bật thương hiệu của bạn và kết nối với khách hàng mục tiêu của bạn.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🎯 <span style="font-weight: bold; font-style: italic;">Customized Strategies :</span> We understand that every business is unique. With our dedicated team of experts, we create customized advertising strategies tailored to your business goals and target audience.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🎯 <span style="font-weight: bold; font-style: italic;">Chiến Lược Tùy Chỉnh :</span> Chúng tôi hiểu rằng mỗi doanh nghiệp đều là độc đáo. Với đội ngũ chuyên gia cam kết của chúng tôi, chúng tôi tạo ra các chiến lược quảng cáo được tùy chỉnh dựa trên mục tiêu kinh doanh và đối tượng khách hàng của bạn.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🌟 <span style="font-weight: bold; font-style: italic;">Innovative Breakthroughs :</span> We don't just work, we make a difference. From ideation to design and execution, we always seek new ways to make your brand stand out and leave an impression.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🌟 <span style="font-weight: bold; font-style: italic;">Các Đột Phá Sáng Tạo :</span> Chúng tôi không chỉ làm việc, chúng tôi tạo ra sự khác biệt. Từ ý tưởng đến thiết kế và thực thi, chúng tôi luôn tìm cách mới để làm cho thương hiệu của bạn nổi bật và để lại ấn tượng.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">📈 <span style="font-weight: bold; font-style: italic;">Efficiency and Measurement :</span> Measurement is the key to success. We provide powerful analytics tools to track and evaluate the performance of advertising, helping you understand ROI better and adjust strategies flexibly.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>📈 <span style="font-weight: bold; font-style: italic;">Hiệu Quả và Đo Lường :</span> Đo lường là chìa khóa cho thành công. Chúng tôi cung cấp các công cụ phân tích mạnh mẽ để theo dõi và đánh giá hiệu suất của quảng cáo, giúp bạn hiểu rõ hơn về ROI và điều chỉnh chiến lược một cách linh hoạt.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">💼 <span style="font-weight: bold; font-style: italic;">Diverse Services :</span> With a range of advertising services including online advertising, social media advertising, television advertising, and more, we meet all your advertising needs comprehensively.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>💼 <span style="font-weight: bold; font-style: italic;">Dịch Vụ Đa Dạng :</span> Với một loạt các dịch vụ quảng cáo bao gồm quảng cáo trực tuyến, quảng cáo trên mạng xã hội, quảng cáo trên truyền hình và nhiều hơn nữa, chúng tôi đáp ứng tất cả nhu cầu quảng cáo của bạn một cách toàn diện.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🤝 <span style="font-weight: bold; font-style: italic;">Reliable Partner :</span> When you partner with us, you are choosing a reliable and dedicated partner. We are committed to accompanying you on the path to advertising success.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🤝 <span style="font-weight: bold; font-style: italic;">Đối Tác Đáng Tin Cậy :</span> Khi bạn hợp tác với chúng tôi, bạn đang chọn một đối tác đáng tin cậy và tận tụy. Chúng tôi cam kết đồng hành cùng bạn trên con đường đến thành công trong quảng cáo.</p>
                </div>
            </div>


            <div class="col-12 col-md-6 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/ads_service.png" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 order-md-2 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Media Content Production</p>
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Sản Xuất Nội Dung Truyền Thông</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🎥 Explore the Power of Media Content with TAP Media Inc!</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🎥 Khám Phá Sức Mạnh của Nội Dung Truyền Thông với TAP Media Inc!</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🎬 At TAP Media Inc, we believe that every story holds its own value and power. With respect and passion for creative art, we are the ideal partner for producing unique and impressive media content.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🎬 Tại TAP Media Inc, chúng tôi tin rằng mỗi câu chuyện mang giá trị và sức mạnh riêng của nó. Với sự tôn trọng và đam mê với nghệ thuật sáng tạo, chúng tôi là đối tác lý tưởng cho việc sản xuất nội dung truyền thông độc đáo và ấn tượng.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">📽️ <span style="font-weight: bold; font-style: italic;">Boundless Creativity :</span> We are a team of filmmakers, writers, graphic designers, and dedicated content producers. We don't just work; we create. From initial ideas to polished scripts, we dedicate hours to nurturing every little detail.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>📽️ <span style="font-weight: bold; font-style: italic;">Sáng Tạo Vô Hạn :</span> Chúng tôi là một đội ngũ các nhà làm phim, nhà văn, nhà thiết kế đồ họa và các nhà sản xuất nội dung cam kết. Chúng tôi không chỉ làm việc; chúng tôi tạo ra. Từ ý tưởng ban đầu đến kịch bản hoàn chỉnh, chúng tôi dành hàng giờ để nuôi dưỡng mọi chi tiết nhỏ.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">📺 <span style="font-weight: bold; font-style: italic;">Diversification and Flexibility :</span> We specialize in producing all types of media content, from advertising videos, short films, to television programs, music videos, and more. No project is too big or too small for us. We are flexible and ready to adapt to any requirements.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>📺 <span style="font-weight: bold; font-style: italic;">Đa Dạng và Linh Hoạt :</span> Chúng tôi chuyên sản xuất mọi loại nội dung truyền thông, từ video quảng cáo, phim ngắn, đến các chương trình truyền hình, video âm nhạc, và nhiều hơn nữa. Không có dự án nào là quá lớn hoặc quá nhỏ đối với chúng tôi. Chúng tôi linh hoạt và sẵn lòng thích ứng với mọi yêu cầu.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🌟 <span style="font-weight: bold; font-style: italic;">Brand and Vision :</span> We are not just a content production unit; we are your strategic partner. We work closely with you to understand your brand and vision, thereby creating creative and impressive stories.</p>
                    <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🌟 <span style="font-weight: bold; font-style: italic;">Thương Hiệu và Tầm Nhìn :</span> Chúng tôi không chỉ là một đơn vị sản xuất nội dung; chúng tôi là đối tác chiến lược của bạn. Chúng tôi làm việc chặt chẽ với bạn để hiểu rõ thương hiệu và tầm nhìn của bạn, từ đó tạo ra những câu chuyện sáng tạo và ấn tượng.</p>
                </div>
            </div>

           

            <div class="col-12 col-md-6 order-md-1 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/media_service.png" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 pt-md-4 pl-md-5  product-box ">
            <div class="text-container m-md-4">
                <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Public Relations</p>
                <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Quan Hệ Công Chúng</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🌟 Explore the Art of Public Relations with TAP Media Inc! 🌟</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🌟 Khám Phá Nghệ Thuật Quan Hệ Công Chúng với TAP Media Inc! 🌟</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">At TAP Media Inc, we are not just public relations experts; we are creative individuals passionate about building and safeguarding your brand image.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-else>Tại TAP Media Inc, chúng tôi không chỉ là những chuyên gia quan hệ công chúng; chúng tôi là những cá nhân sáng tạo đam mê xây dựng và bảo vệ hình ảnh thương hiệu của bạn.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">📢 <span style="font-weight: bold; font-style: italic;">Building Trust :</span> Public relations is an integral part of every business. We work with the mission of building and maintaining positive relationships with the community, customers, and partners, helping you gain trust and confidence from all stakeholders.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-else>📢 <span style="font-weight: bold; font-style: italic;">Xây Dựng Niềm Tin :</span> Quan hệ công chúng là một phần không thể thiếu của mỗi doanh nghiệp. Chúng tôi làm việc với sứ mệnh xây dựng và duy trì mối quan hệ tích cực với cộng đồng, khách hàng và đối tác, giúp bạn có được sự tin tưởng và tự tin từ tất cả các bên liên quan.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">📰 <span style="font-weight: bold; font-style: italic;">Multifaceted Strategy :</span> We don't create public relations strategies in isolation; we create multidimensional interactive experiences. From media management to events, we design a diverse, flexible, and effective communication style.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-else>📰 <span style="font-weight: bold; font-style: italic;">Chiến Lược Đa Mặt :</span> Chúng tôi không tạo ra chiến lược quan hệ công chúng đơn lẻ; chúng tôi tạo ra những trải nghiệm tương tác đa chiều. Từ quản lý truyền thông đến sự kiện, chúng tôi thiết kế một phong cách giao tiếp đa dạng, linh hoạt và hiệu quả.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🔍 <span style="font-weight: bold; font-style: italic;">Analysis and Measurement :</span> We don't just execute; we evaluate effectiveness. We use powerful analytics tools to measure and evaluate public relations strategies, helping you understand impact and adjust strategies flexibly.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🔍 <span style="font-weight: bold; font-style: italic;">Phân Tích và Đo Lường :</span> Chúng tôi không chỉ thực thi; chúng tôi đánh giá hiệu quả. Chúng tôi sử dụng các công cụ phân tích mạnh mẽ để đo lường và đánh giá chiến lược quan hệ công chúng, giúp bạn hiểu rõ tác động và điều chỉnh chiến lược một cách linh hoạt.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-if="language === 'english'">🌐 <span style="font-weight: bold; font-style: italic;">Success and Future :</span> We don't just focus on today's success; we look ahead to the future. We are your strategic partner in building a sustainable and successful brand image in today's digital age.</p>
                <p class="tap-description pt-md-1 pl-2 pr-2" v-else>🌐 <span style="font-weight: bold; font-style: italic;">Thành Công và Tương Lai :</span> Chúng tôi không chỉ tập trung vào thành công ngày hôm nay; chúng tôi nhìn về tương lai. Chúng tôi là đối tác chiến lược của bạn trong việc xây dựng một hình ảnh thương hiệu bền vững và thành công trong thời đại kỹ thuật số ngày nay.</p>
            </div>
        </div>

           

            <div class="col-12 col-md-6 pt-md-2 product-box " >
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/public_relation_service.png" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
                    </div>
                </div>
            </div>

        </div>

        <div class="row product-section pl-md-3 m-md-5 p-md-5 pt-5 mt-5">
            <div class="col-12 col-md-6 order-md-2 pt-md-4 pl-md-5  product-box ">
                <div class="text-container m-md-4">
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-if="language === 'english'">Event Schedule</p>
                    <p class="tap-description pt-1 pl-2 pr-2 pb-md-4" style="font-size: 20px; font-weight: bold;" v-else>Tổ chức Sự Kiện</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🎉 Discover Creativity in Every Event with TAP Media Inc! 🎉</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🎉 Khám Phá Sự Sáng Tạo Trong Mỗi Sự Kiện với TAP Media Inc! 🎉</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">At TAP Media Inc, we don't just organize events; we create special experiences and unforgettable memories. With creativity, attention to detail, and dedication, we turn ideas into reality and create unique and impressive events.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>Tại TAP Media Inc, chúng tôi không chỉ tổ chức sự kiện; chúng tôi tạo ra những trải nghiệm đặc biệt và những kỷ niệm khó quên. Với sự sáng tạo, chú ý đến chi tiết và sự tận tụy, chúng tôi biến ý tưởng thành hiện thực và tạo ra những sự kiện độc đáo và ấn tượng.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🌟 <span style="font-weight: bold; font-style: italic;">Creativity and Uniqueness :</span> With our professional and creative team, we always seek new ways to make each event unique and impressive. From initial ideas to design details and execution, we take special care of every event.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🌟 <span style="font-weight: bold; font-style: italic;">Sáng Tạo và Độc Đáo :</span> Với đội ngũ chuyên nghiệp và sáng tạo của chúng tôi, chúng tôi luôn tìm cách mới để làm cho mỗi sự kiện trở nên độc đáo và ấn tượng. Từ ý tưởng ban đầu đến các chi tiết thiết kế và thực thi, chúng tôi chăm sóc đặc biệt cho mỗi sự kiện.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🎨 <span style="font-weight: bold; font-style: italic;">Exquisite Design and Decoration :</span> We don't just organize events; we create interesting and beautiful spaces. From space design, decoration to music and lighting choices, every detail is carefully considered to create an attractive and unique space.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🎨 <span style="font-weight: bold; font-style: italic;">Thiết Kế và Trang Trí Tinh Xảo :</span> Chúng tôi không chỉ tổ chức sự kiện; chúng tôi tạo ra những không gian thú vị và đẹp mắt. Từ thiết kế không gian, trang trí đến lựa chọn âm nhạc và ánh sáng, mọi chi tiết được xem xét cẩn thận để tạo ra một không gian hấp dẫn và độc đáo.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🤝 <span style="font-weight: bold; font-style: italic;">Partnerships and Collaboration :</span> We are your partner in realizing every idea. We collaborate closely with you to understand your needs and desires, thereby creating an event that is compatible and successful.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🤝 <span style="font-weight: bold; font-style: italic;">Hợp Tác và Đối Tác :</span> Chúng tôi là đối tác của bạn trong việc thực hiện mọi ý tưởng. Chúng tôi hợp tác chặt chẽ với bạn để hiểu rõ nhu cầu và mong muốn của bạn, từ đó tạo ra một sự kiện phù hợp và thành công.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-if="language === 'english'">🕐 <span style="font-weight: bold; font-style: italic;">Flexibility and Professionalism :</span> We understand that every event has different requirements and timelines. With flexibility and professionalism, we ensure that every detail is handled perfectly, from planning to execution.</p>
                    <p class="tap-description pt-1 pl-2 pr-2" v-else>🕐 <span style="font-weight: bold; font-style: italic;">Tính Linh Hoạt và Chuyên Nghiệp :</span> Chúng tôi hiểu rằng mỗi sự kiện có các yêu cầu và thời gian khác nhau. Với tính linh hoạt và chuyên nghiệp, chúng tôi đảm bảo mọi chi tiết được xử lý hoàn hảo, từ lập kế hoạch đến thực hiện.</p>
                </div>
            </div>

            <div class="col-12 col-md-6 order-md-1 pt-md-2 product-box ">
                <div class="product-info text-center">
                    <div class="m-md-4" >
                        <img src="assets/img/event_service.png" class="img-fluid" alt="Tap News Logo" @click="toggleLanguage">
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
