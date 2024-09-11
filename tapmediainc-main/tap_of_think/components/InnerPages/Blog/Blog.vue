<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection/>
        <BreadcrumbSection/>
        <!-- <BlogSection/> -->
        <BlogLeftSidebar/>
        <!-- <BlogDetailsRightSidebar /> -->
      </div>
    </div>
  </template>
  
  <script>
  import BlogSection from '~/components/Blogs/Blog/Blog'
  import BlogDetailsLeftSidebar from '~/components/Blogs/BlogDetailsLeftSidebar/BlogDetailsLeftSidebar'
  import BlogDetailsRightSidebar from '~/components/Blogs/BlogDetailsRightSidebar/BlogDetailsRightSidebar'
  import BlogLeftSidebar from '~/components/Blogs/BlogLeftSidebar/BlogLeftSidebar'
  import BlogRightSidebar from '~/components/Blogs/BlogRightSidebar/BlogRightSidebar'
  import BlogThreeColumn from '~/components/Blogs/BlogThreeColumn/BlogThreeColumn'
  import BlogTwoColumn from '~/components/Blogs/BlogTwoColumn/BlogTwoColumn'
  import ScrollupSection from '../../Scrollup/Scrollup'
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '../../Breadcrumb/BlogLeftSidebar/BlogLeftSidebar'
  import PromoSection from '../../Promo/PromoThree'
  import TeamSection from '../../Team/Team'
  import NewsletterSection from '../../Newsletter/Newsletter'
  import ContactSection from '../../Contact/Contact'
  import FooterSection from '../../Footer/Footer'
  
  export default {
    name: 'Blog',
    components: {
      BlogSection,
      BlogDetailsLeftSidebar,
      BlogDetailsRightSidebar,
      BlogThreeColumn,
      BlogLeftSidebar,
      BlogRightSidebar,
      BlogTwoColumn,
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      PromoSection,
      TeamSection,
      NewsletterSection,
      ContactSection,
      FooterSection,
    }
  }
  </script>
  
  <style>
  
  </style>