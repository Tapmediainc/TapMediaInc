<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <ServiceSection/>
        <FeatureSection/>
        <!-- <SkillsSection />
        <AboutUsSection />
        <MissionSection />
        <OrganizeSection/> -->
        <FooterSection />
      </div>
    </div>
  </template>
  
  <script>
  import FeatureSection from '~/components/Service/Feature'
  import ScrollupSection from '../../Scrollup/Scrollup'
  import ServiceSection from '~/components/Service/Service'
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '../../Breadcrumb/Service/Service'
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
    name: 'Service',
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
      ServiceSection,
      FeatureSection
    }
  }
  </script>
  
  <style>
  
  </style>