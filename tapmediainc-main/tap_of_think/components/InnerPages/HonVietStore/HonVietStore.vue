<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <HonVietStoreSection/>
        <FooterSection />
      </div>
    </div>
  </template>
  
  <script>
  import ScrollupSection from '../../Scrollup/Scrollup'
  import HonVietStoreSection from '~/components/HonVietStore/HonVietStore'
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '../../Breadcrumb/HonVietStore/HonVietStore'
  import SkillsSection from '../../Skills/Skills'
  import AboutUsSection from '../../AboutUs/AboutUs'
  import OrganizeSection from '../../AboutUs/Organize'
  import PromoSection from '../../Promo/PromoThree'
  import TeamSection from '../../Team/Team'
  import MissionSection from '~/components/AboutUs/Mission'
  import NewsletterSection from '../../Newsletter/Newsletter'
  import ContactSection from '../../Contact/Contact'
  import FooterSection from '../../Footer/Footer'
  

  export default {
    name: 'HonVietStore',
    components: {
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      SkillsSection,
      AboutUsSection,
      PromoSection,
      TeamSection,
      NewsletterSection,
      ContactSection,
      FooterSection,
      OrganizeSection,
      MissionSection,
      HonVietStoreSection,
    }
  }
  </script>
  
  <style>
  
  </style>