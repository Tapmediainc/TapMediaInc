<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <SkillsSection />
        <AboutUsSection/>
        <FeatureSection/>
        <FooterSection />
      </div>
    </div>
  </template>
  
  <script>
  import ScrollupSection from '../../Scrollup/Scrollup'
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '../../Breadcrumb/Newspaper/Newspaper'
  import SkillsSection from '../../Skills/News'
  import AboutUsSection from '~/components/Newspaper/Newspaper'
  import CategorySection from '~/components/Newspaper/Category'
  import OrganizeSection from '../../AboutUs/Organize'
  import PromoSection from '../../Promo/PromoThree'
  import TeamSection from '../../Team/Team'
  import MissionSection from '~/components/AboutUs/Mission'
  import NewsletterSection from '../../Newsletter/Newsletter'
  import ContactSection from '../../Contact/Contact'
  import FooterSection from '../../Footer/Footer'
  import FeatureSection from '~/components/Newspaper/Feature'
  
  export default {
    name: 'Newspaper',
    components: {
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      SkillsSection,
      PromoSection,
      TeamSection,
      NewsletterSection,
      ContactSection,
      FooterSection,
      AboutUsSection,
      CategorySection,
      FeatureSection
    }
  }
  </script>
  
  <style>
  
  </style>