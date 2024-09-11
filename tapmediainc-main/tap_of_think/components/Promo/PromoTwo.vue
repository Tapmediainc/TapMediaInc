<template>
    <section id="benifits" class="section benifits-area " style="min-height: 90vh !important;">        
        <div class="container">
            <div class="text-center">
            <h2>Choose Our Products</h2>
            <hr class="center-star">        </div>

           
        <div class="row ">
            <div class="col-12 col-sm-6 pt-3">
                <div class="benifits-item p-3 d-flex flex-column align-items-stretch">
                    <div class="feature-icon pb-4 pt-1 feature-img">
                        <img src="assets/img/newspaper.png" alt="">
                    </div>
                    
                    <div class="benifits-text">
                        <h3 class="mb-2">News</h3>
                        <p>Stay informed with our online newspaper.</p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 pt-3">
                <div class="benifits-item p-3 d-flex flex-column align-items-stretch">
                    <div class="feature-icon pb-4 pt-1 feature-img">
                        <img src="assets/img/user-interface.png" alt="" >
                    </div>
                    
                    <div class="benifits-text">
                        <h3 class="mb-2">App Chat</h3>
                        <p>Easy to use our chat app, Attractive Features Dark & light.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row ">
            <div class="col-12 col-sm-6 pt-3">
                <div class="benifits-item p-3 d-flex flex-column align-items-stretch">
                    <div class="feature-icon pb-4 pt-1 feature-img">
                        <img src="assets/img/digital-marketing.png" alt="" >
                    </div>
                
                    <div class="benifits-text">
                        <h3 class="mb-2">Media</h3>
                        <p>Explore cutting-edge media solutions for business growth.</p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 pt-3 consultancy">
                <div class="benifits-item p-3 d-flex flex-column align-items-stretch">
                    <div class="feature-icon pb-4 pt-1 feature-img">
                        <img src="assets/img/consulting.png" alt="" >
                    </div>
                    
                    <div class="benifits-text">
                        <h3 class="mb-2">Consultancy</h3>
                        <p>Optimize success with our strategic consultancy services.</p>
                    </div>
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

    p {
        color: #2d3e50;
    }

    h3 {
        color: #2d3e50;
        text-align: left;
    }

    .title {
        text-align: left;
    }

    .section-title {
        font-size: 28px;
        color: #2d3e50;
    }



    h2 {
        color: #2d3e50;
    }

    .benifits-item:hover {
        background-color: white;
    }

    .feature-img {
        max-width: 50px;
        max-height: 50px;
        margin-bottom: 20px;
    }

    .benifits-text > p {
        text-align: justify;
    }

    @media only screen and (max-width: 767px) {
        .section-title {
            color: #2d3e50;
            font-size: 20px;
        }

        .consultancy {
            margin-bottom: 300px;
        }

        #benifits {
            min-height: 120vh;
        }
}

</style>
