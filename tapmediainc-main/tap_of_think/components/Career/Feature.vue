<template>
    <section class="section skills-area bg-gray ptb_100" style="min-height: 80vh;">
        <div class="container">
            <div class="text-center">
                <h2>What we brings</h2>
                <hr class="center-star">        
            </div>
        </div>
        
        <div class="row pl-md-5 pr-md-5">
            <div class="col-12 col-sm-4 pt-3">
                <div class="benifits-item p-3  align-items-stretch">
                    <div class="pt-1">
                        <img src="assets/img/workplace.png" alt="">
                    </div>
                    
                    <div class="benifits-text pt-2">
                        <p>Office: Comfortable workspace with ergonomic furniture, ample natural light, plants, and designated areas for collaboration and relaxation.</p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-4 pt-3">
                <div class="benifits-item p-3 align-items-stretch">
                    <div class="pt-1 ">
                        <img src="assets/img/partner.png" alt="" >
                    </div>
                    
                    <div class="benifits-text pt-2">
                        <p>Workplace Partnerships: Encourage teamwork and collaboration.</p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-4 pt-3">
                <div class="benifits-item p-3 align-items-stretch">
                    <div class="pt-1">
                        <img src="assets/img/travel.png" alt="" >
                    </div>
                
                    <div class="benifits-text pt-2">
                        <p>Company Trips: Organize occasional trips or retreats to reward employees and strengthen team bonds. </p>
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