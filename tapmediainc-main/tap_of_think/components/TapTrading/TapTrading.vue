<template>
    <div class="container">
   <section class="section ptb_50 pl-2 pr-2" style="min-height: 100%;">
        <div class="feature-description mb-2 mg-t mg-b mg-l mg-r">
            <h2 class="about-title">TAP Trading</h2>
            <div class="divider">
            <span class="star">★</span>
            </div>
            <h3>Who We Are</h3>    
            <p>TAP Trading Company, a subsidiary of TAP Media Inc, is a premier commercial trading enterprise based in the United States. Specializing in the import and export of a diverse range of products, TAP Trading Company leverages extensive global networks to connect suppliers and buyers, ensuring seamless international trade. Our dedication to quality, efficiency, and customer satisfaction positions us as a trusted partner in the global marketplace. With a robust infrastructure and a team of seasoned professionals, we navigate the complexities of international commerce to deliver exceptional value to our clients.</p>
            <h3>What We Do</h3>
            <p>At TAP Trading, we pride ourselves on offering a comprehensive selection of high-quality products tailored to meet the needs of our diverse clientele. Our product portfolio includes:</p>
            <p>1.	Animal Feeds: High-quality nutritional feeds for cattle, pigs, and other livestock to promote optimal health and growth.</p>
            <p>2.	Chicken Feeds: Specialized feeds for poultry at various stages, including starter, layer, and broiler feeds to support healthy development and productivity.</p>
            <p>3.	Fertilizers: A range of organic and inorganic fertilizers to enhance soil fertility and boost crop yields.</p>
            <p>4.	Frozen Seafood: Sustainably sourced fish, shrimp, and shellfish, processed under strict quality control standards for freshness and nutritional value.</p>
            <p>5.	Asian Foods: Authentic Asian staples such as rice, noodles, spices, sauces, snacks, and beverages sourced from trusted suppliers across the region.</p>
            <p>6.	Custom Products: Sourcing and providing additional products as required by clients, tailored to match specific needs and market demands.
            </p>
            <h3>Committed to Excellence</h3>
            <p>We are committed to fostering long-term relationships with our partners by delivering reliable products and first-rate service. Our expertise in international logistics and regulatory compliance ensures that our products reach their destinations efficiently and in perfect condition. Partner with us for all your trading needs and experience the excellence that TAP Trading has to offer.</p>
            <h3>We Invite Your Inquiries</h3>
            <p>Please contact us for information: </p>
            <h3>Krystal Nguyen</h3>
            <p>Business Coordinator</p>
            <p>Address: 7280 Spring Flower Ave, Las Vegas, NV 89117.</p>
            <p>Phone: +1 36 05 05 05 05 </p>
            <p>Email: krystal.nguyen55@gmail.com</p>
             <p>Email: krystal.nguyen55@gmail.com</p>
            </div>
    </section>
    </div>
</template>

<style>
    h2{
        text-align: center !important;
    }
    h3{
        margin: 15px 0;
    }
    p{
        color:#000;
    }
      .divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 20px 0;
    }
    
    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      border-bottom: 2px solid #000;
    }
    
    .divider:not(:empty)::before {
      margin-right: 0.25em;
    }
    
    .divider:not(:empty)::after {
      margin-left: 0.25em;
    }
    
    .star {
      font-size: 24px;
      color: gold;
    }
    .mg-t{
        margin-top: 120px;
    }
    .mg-b{
        margin-bottom: 120px;
    }
    .mg-l{
        margin-right: 120px;
    }
    .mg-r{
        margin-bottom: 120px;
    }
    .slide-item {
        overflow-y: hidden;
        max-height: 450px;
    }

    .feature-description {
        font-weight:300;
        font-size: 16px;
        text-align: justify;
        color: black ;
    }

    @media (max-width: 700px) {
    .about-description {
        font-size: 14px;
        line-height: 1.5;
        padding-left: 5%;
        padding-right: 5%;
        font-weight: 300;
    }
    }
    @media only screen and (max-width: 767px) {
      
    }

    .mb-2 {
        font-size: 16px;
        margin: 5px;
    }
</style>
