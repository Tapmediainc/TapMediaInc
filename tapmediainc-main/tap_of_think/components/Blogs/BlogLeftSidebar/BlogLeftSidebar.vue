<template>
  <div class="blog">
    <ScrollupSection />
    <div class="all-area">
      <section id="blog" class="section blog-area ptb_100">
            <div class="blog-container">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <aside class="sidebar">
                            <!-- Single Widget -->
                            <div class="single-widget">
                                <!-- Search Widget -->
                                <div class="widget-content search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Enter your keywords">
                                    </form>
                                </div>
                            </div>
                            <!-- Single Widget -->
                            <div class="single-widget">
                                <!-- Category Widget -->
                                <div class="accordions widget catagory-widget" id="cat-accordion">
                                    <div class="single-accordion blog-accordion">
                                        <h5>
                                            <a role="button" class="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion1">Categories
                                            </a>
                                        </h5>
                                        <!-- Category Widget Content -->
                                        <div id="accordion1" class="accordion-content widget-content collapse show" data-parent="#cat-accordion">
                                            <!-- Category Widget Items -->
                                            <ul class="widget-items">
                                                <li><a href="#" class="d-flex p-3"><span>Web Design</span><span class="ml-auto">(14)</span></a></li>
                                                <li><a href="#" class="d-flex p-3"><span>News</span><span class="ml-auto">(32)</span></a></li>
                                                <li><a href="#" class="d-flex p-3"><span>Technology</span><span class="ml-auto">(27)</span></a></li>
                                                <!-- <li><a href="#" class="d-flex p-3"><span>UI Design</span><span class="ml-auto">(18)</span></a></li>
                                                <li><a href="#" class="d-flex p-3"><span>Bootstrap</span><span class="ml-auto">(15)</span></a></li>
                                                <li><a href="#" class="d-flex p-3"><span>Web Template</span><span class="ml-auto">(29)</span></a></li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Widget -->
                            <div class="single-widget">
                                <!-- Post Widget -->
                                <div class="accordions widget post-widget" id="post-accordion">
                                    <div class="single-accordion">
                                        <h5>
                                            <a role="button" class="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion2">Popular Post
                                            </a>
                                        </h5>
                                        <!-- Post Widget Content -->
                                        <div id="accordion2" class="accordion-content widget-content collapse show" data-parent="#post-accordion">
                                           
                                            <ul class="widget-items">
                                                <!-- <li>
                                                    <a href="#" class="single-post media p-3">
                                            
                                                        <div class="post-thumb avatar-md">
                                                            <img class="align-self-center" src="assets/img/avatar_1.png" alt="">
                                                        </div>
                                                        <div class="post-content media-body pl-3">
                                                            <p class="post-date mb-2">05 Feb, 2020</p>
                                                            <h6>Promote Your Apps With Appo</h6>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="single-post media p-3">
                                        
                                                        <div class="post-thumb avatar-md">
                                                            <img class="align-self-center" src="assets/img/avatar_2.png" alt="">
                                                        </div>
                                                        <div class="post-content media-body pl-3">
                                                            <p class="post-date mb-2">09 Apr, 2020</p>
                                                            <h6>Sell Your Product Like Never Before</h6>
                                                        </div>
                                                    </a>
                                                </li> -->
                                                <!-- <li>
                                                    <a href="#" class="single-post media p-3">
                                                 
                                                        <div class="post-thumb avatar-md">
                                                            <img class="align-self-center" src="assets/img/avatar_3.png" alt="">
                                                        </div>
                                                        <div class="post-content media-body pl-3">
                                                            <p class="post-date mb-2">13 Jul, 2020</p>
                                                            <h6>Built For Passionate People</h6>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="single-post media p-3">
    
                                                        <div class="post-thumb avatar-md">
                                                            <img class="align-self-center" src="assets/img/avatar_4.png" alt="">
                                                        </div>
                                                        <div class="post-content media-body pl-3">
                                                            <p class="post-date mb-2">03 Oct, 2020</p>
                                                            <h6>Get Unlimited Offers &amp; Plans</h6>
                                                        </div>
                                                    </a>
                                                </li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Widget -->
                            <div class="single-widget">
                                <!-- Tags Widget -->
                                <div class="accordions widget tags-widget" id="tags-accordion">
                                    <div class="single-accordion blog-accordion">
                                        <h5>
                                            <a role="button" class="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion3">Popular Tags
                                            </a>
                                        </h5>
                                        <!-- Tags Widget Content -->
                                        <div id="accordion3" class="accordion-content widget-content collapse show" data-parent="#tags-accordion">
                                            <!-- Tags Widget Items -->
                                            <div class="widget-content tags-widget-items pt-2">
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">News</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">App</a>
                                                <!-- <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">IOS</a> -->
                                                <!-- <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Android</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Landing Page</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Business</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Fashion</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Media</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Lifestyle</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Wordpress</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Web Design</a>
                                                <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Mobile App</a> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-12 col-lg-9">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <!-- Single Blog -->
                                <div class="single-blog res-margin">
                                    <!-- Blog Thumb -->
                                    <div class="blog-thumb">
                                        <a href="#"><img src="assets/img/recruitment.jpg" alt=""></a>
                                    </div>
                                    <!-- Blog Content -->
                                    <div class="blog-content p-4">
                                        <!-- Meta Info -->
                                        <ul class="meta-info d-flex justify-content-between">
                                            <li>By <a href="#">Tony</a></li>
                                            <li><a href="#">Aug 8, 2024</a></li>
                                        </ul>
                                        <!-- Blog Title -->
                                        <h3 class="blog-title my-3"><a href="/blog-4">Recruiment anouncement</a></h3>
                                        <p>Recruitment of information technology staff.</p>
                                        <a href="/blog-4" class="blog-btn mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <!-- Single Blog -->
                                <div class="single-blog res-margin">
                                    <!-- Blog Thumb -->
                                    <div class="blog-thumb">
                                        <a href="#"><img src="assets/img/TAPNEWS-blog.png" alt=""></a>
                                    </div>
                                    <!-- Blog Content -->
                                    <div class="blog-content p-4">
                                        <!-- Meta Info -->
                                        <ul class="meta-info d-flex justify-content-between">
                                            <li>By <a href="#">Tony</a></li>
                                            <li><a href="#">Mar 7, 2024</a></li>
                                        </ul>
                                        <!-- Blog Title -->
                                        <h3 class="blog-title my-3"><a href="/blog-2">Tap News: The world of news at your hands</a></h3>
                                        <p>With the "Tap News" app, we bring you a modern, flexible, and personalized news reading experience...</p>
                                        <a href="/blog-2" class="blog-btn mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <!-- Single Blog -->
                                <div class="single-blog res-margin">
                                    <!-- Blog Thumb -->
                                    <div class="blog-thumb">
                                        <a href="#"><img src="assets/img/TAP.png" alt=""></a>
                                    </div>
                                    <!-- Blog Content -->
                                    <div class="blog-content p-4">
                                        <!-- Meta Info -->
                                        <ul class="meta-info d-flex justify-content-between">
                                            <li>By <a href="#">Tony</a></li>
                                            <li><a href="#">Mar 7, 2024</a></li>
                                        </ul>
                                        <!-- Blog Title -->
                                        <h3 class="blog-title my-3"><a href="/blog-3">TAP Food Market: Convenient Food Shopping</a></h3>
                                        <p>"TAP Food Market" is an online commercial food platform ...</p>
                                        <a href="/blog-3" class="blog-btn mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <!-- Single Blog -->
                                <div class="single-blog res-margin">
                                    <!-- Blog Thumb -->
                                    <div class="blog-thumb">
                                        <a href="#"><img src="assets/img/Increase.png" alt=""></a>
                                    </div>
                                    <!-- Blog Content -->
                                    <div class="blog-content p-4">
                                        <!-- Meta Info -->
                                        <ul class="meta-info d-flex justify-content-between">
                                            <li>By <a href="#">Tony</a></li>
                                            <li><a href="#">Mar 7, 2024</a></li>
                                        </ul>
                                        <!-- Blog Title -->
                                        <h3 class="blog-title my-3"><a href="/blog-1">Yoush The Secure Chat App</a></h3>
                                        <p>Yoush is a secure chat application developed by TAP Media Inc, headquartered in the United States. With a mission to create a safe and private chat space...</p>
                                        <a href="/blog-1" class="blog-btn mt-3">Read More</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <!-- Pagination -->
                                <ul class="pagination justify-content-center">
                                    <li class="disabled px-1">
                                        <a href="#" aria-label="Previous">
                                            <i class="fas fa-arrow-left"></i>
                                        </a>
                                    </li>
                                    <li class="px-1 active "><a href="#">1</a></li>
                                    <li class="px-1"><a href="#">2</a></li>
                                    <li class="px-1"><a href="#">3</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <FooterSection />
    </div>
  </div>
</template>

<script>
import ScrollupSection from '../../Scrollup/Scrollup'
import HeaderSection from '../../Header/HeaderTwo'
import BreadcrumbSection from '../../Breadcrumb/BlogLeftSidebar/BlogLeftSidebar'
import FooterSection from '../../Footer/Footer'

export default {
  name: 'BlogLeftSidebar',
  components: {
    ScrollupSection,
    HeaderSection,
    BreadcrumbSection,
    FooterSection
  }
}
</script>

<style>
    .blog-container {
        margin: 0 auto;
        padding: 10%;
    }
</style>