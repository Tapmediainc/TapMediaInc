<template>
    <div class="">
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <section id="blog" class="section blog-area ptb_100">
              <div class="tap-blog-container">
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
                                                  <!-- <li><a href="#" class="d-flex p-3"><span>Web Design</span><span class="ml-auto">(14)</span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>App Landing</span><span class="ml-auto">(32)</span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>Wordpress</span><span class="ml-auto">(27)</span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>UI Design</span><span class="ml-auto">(18)</span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>Bootstrap</span><span class="ml-auto">(15)</span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>Web Template</span><span class="ml-auto">(29)</span></a></li> -->
                                                  <li><a href="#" class="d-flex p-3"><span>News</span><span class="ml-auto"></span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>Media</span><span class="ml-auto"></span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>App</span><span class="ml-auto"></span></a></li>
                                                  <li><a href="#" class="d-flex p-3"><span>Service</span><span class="ml-auto"></span></a></li>

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
                                              <!-- Post Widget Items -->
                                              <ul class="widget-items">
                    
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
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </aside>
                      </div>
                      <div class="col-12 col-lg-9">
                          <!-- Single Blog Details -->
                          <article class="single-blog-details">
                              <!-- Blog Thumb -->
                              <div class="blog-thumb">
                                  <a href="#"><img src="assets/img/recruitment.jpg" alt=""></a>
                              </div>
                              <!-- Blog Content -->
                              <div class="blog-content appo-blog">
                                  <!-- Meta Info -->
                                  <div class="meta-info d-flex flex-wrap align-items-center py-2">
                                      <ul>
                                          <li class="d-inline-block p-2">By <a href="#">Tony</a></li>
                                          <li class="d-inline-block p-2"><a href="#">08 Aug, 2024</a></li>
                                          <!-- <li class="d-inline-block p-2"><a href="#">2 Comments</a></li> -->
                                      </ul>
                                      <!-- Blog Share -->
                                      <div class="blog-share ml-auto d-none d-sm-block">
                                          <!-- Social Icons -->
                                          <div class="social-icons d-flex justify-content-center">
                                              <a class="bg-white facebook" href="#">
                                                  <i class="fab fa-facebook-f"></i>
                                                  <i class="fab fa-facebook-f"></i>
                                              </a>
                                              <a class="bg-white twitter" href="#">
                                                  <i class="fab fa-twitter"></i>
                                                  <i class="fab fa-twitter"></i>
                                              </a>
                                              <a class="bg-white google-plus" href="#">
                                                  <i class="fab fa-google-plus-g"></i>
                                                  <i class="fab fa-google-plus-g"></i>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Blog Details -->
                                  <div class="blog-details">
                                      <h3 class="blog-title py-2 py-sm-3"><a href="#">Recruiment anouncement</a></h3>
                                      <h4>Fullstack Developer</h4>
                                    
                                      <!-- <p class="d-none d-sm-block">Yoush is a secure chat application developed by TAP Media Inc, based in the United States. With a mission to create a safe and private chatting space, Yoush has quickly become a popular choice for users in Vietnam and the United States.</p>
                                      
                                      <p class="pt-3">Key features</p> -->

                                      <p class="d-block d-sm-block pl-2 pt-4">Job requirements</p>
                                        <p>- Bachelor's degree (Computer Science/Information Technology/Electronics &
                                        Communication/ Information Science/Telecommunications)</p>
                                        <p>- 3+ years of .NET development experiences (.NET Core, C#, ASP.NET, MVC).</p>
                                        <p>- Experience in modern development techniques Microservices.</p>
                                        <p>- Experience in relational and non-relational databases MSSQL, MySQL, PostgreSQL and Entity Framework, Entity Framework Core ORM, Migration</p>
                                        <p>- Experience with at least one front-end framework/libraries like Angular/ReactJS/VueJS.</p>
                                        <p>- Strong understanding of GIT, Pull Requests, and DevOps in general (Logic Apps, Events, Logging).</p>
                                        <p>Nice to have:</p>
                                        <p>- Object-oriented design including common patterns.</p>
                                        <p>- Docker or other container technologies.</p>
                                        <p>- Experienced understanding of all aspects of the software engineering process and
                                        familiarity with alternative approaches to it.</p>
                                        <p>- [Big plus] Azure, AWS (preferred) or GCP services, and solution architectures.</p>
                                        <p>- [Big plus] REST API design and microservices implementation.</p>
                                        <p>- Have knowledge or experience with CI/CD</p>
                                        <p>Benefits</p>
                                        <p>- Competitive salary</p>
                                        <p>- 13th-month salary</p>
                                        <p>- Annaul salary review</p>
                                    
                                      <!-- <blockquote class="blockquote px-4 py-3 my-3 ml-4">
                                          <p class="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magnam, molestias omnis quam veritatis consectetur nihil aliquid quo culpa? Ullam molestiae id temporibus nemo inventore, at reiciendis distinctio porro atque!</p>
                                          <p class="d-block d-sm-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ullam dolor, omnis maiores molestiae ducimus.</p>
                                      </blockquote> -->
                                      <!-- <p class="d-block d-sm-block pl-2">2. Fast Connection, User-Friendly: With a simple and user-friendly interface, Yoush prioritizes convenience and ease of use. Users can connect quickly and start conversations without any difficulties.</p>
                                      <p class="d-block d-sm-block pl-2">3. Full Personal Information Security: The safety of personal information is Yoush's top priority. The application utilizes advanced security technologies to ensure that all user data and activities are tightly protected, providing users with peace of mind while using the app.</p>
                                      <p class="d-block d-sm-block pt-3">Presence in Vietnam and the United States: Yoush is widely used by large communities in Vietnam and the United States. With diverse features and a focus on security, Yoush is a reliable companion for users worldwide..</p>
                                      <p class="d-block d-sm-block pt-3">If you are seeking a secure chat application with high-quality features and an outstanding user experience, explore Yoush today - where privacy and safety take precedence.</p> -->
                                    </div>
                              </div>
                              <!-- Blog Comments -->
                             
                               
                                  
                           
                              <div class="blog-contact mt-4">
                               
                                  <h3 class="comments-title text-uppercase text-right mb-3">Post your Comments</h3>
                                  
                                  <div class="contact-box comment-box">
                                      <form method="POST" action="#">
                                          <div class="row">
                                              <div class="col-12 col-md-6">
                                                  <div class="form-group">
                                                      <input type="text" class="form-control" name="name" placeholder="Name" required="required">
                                                  </div>
                                              </div>
                                              <div class="col-12 col-md-6">
                                                  <div class="form-group">
                                                      <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <div class="form-group">
                                                      <textarea class="form-control" name="message" placeholder="Message" required="required"></textarea>
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <button class="btn btn-bordered" type="submit">Send Message</button>
                                              </div>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </article>
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
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '../../Breadcrumb/BlogLeftSidebar/BlogLeftSidebar'
  import FooterSection from '../../Footer/Footer'
  
  export default {
    name: 'BlogDetailsLeftSidebar',
    components: {
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      FooterSection
    }
  }
  </script>
    
  <style>
    .tap-blog-container {
        padding: 10%;
    }
  </style>