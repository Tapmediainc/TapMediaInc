<template>
    <section class="section skills-area  ptb_100">
        <div class="container">
            <div class="text-center">
                <h2>Open Roles</h2>
                <p>Join us and empower the next generation of business.</p>
                <hr class="center-star">        

                <p>How to apply:</p>
                            <ul >
                                <li>Send your application to the email: contact@tapmediainc.com</li>
                                <li>Look for suitable positions based on your skills and experience.</li>
                                <li>Submit your CV and relevant documents demonstrating your education and work experience (if any).</li>
                                <li>Contact +13605050505 for any inquiries.</li>
                            </ul>
            </div>
        </div>
        <!-- <div class="position-container">
            <div class="job-row">
                <h3>Backend Developer</h3>
                <p>Ho Chi Minh City</p>
            </div>
            <div class="job-row">
                <h3>Backend Developer</h3>
                <p>Ho Chi Minh City</p>
            </div>
            <div class="job-row">
                <h3>Backend Developer</h3>
                <p>Ho Chi Minh City</p>
            </div>
            <div class="job-row">
                <h3>Backend Developer</h3>
                <p>Ho Chi Minh City</p>
            </div>
            <div class="job-row">
                <h3>Backend Developer</h3>
                <p>Ho Chi Minh City</p>
            </div>
        </div> -->
    </section>
</template>

<script>
export default {

}
</script>

<style>
    .position-container {
        width: 50%;
        margin: 20px auto;
        font-family: 'Arial', sans-serif;
        border: 1px solid #ddd; /* Add a border with a color of your choice */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        padding: 20px; /* Add some padding for better visual appearance */
        border-radius: 7px;
    }

    .position-container row {
        margin-bottom: 20px;
        transition: background-color 0.3s ease; /* Smooth transition for hover effect */
    }

    .position-container row:hover {
        background-color: #f5f5f5; /* Background color on hover */
    }


    .job-row {
        border-bottom: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
       
    }

    h3 {
        margin-bottom: 5px;
        color: #333;
    }

    p {
        margin: 0;
        color: #777;
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
        .position-container {
            width: 80%;
        }

        hr {
            width: 50%;
        }
    }
</style>