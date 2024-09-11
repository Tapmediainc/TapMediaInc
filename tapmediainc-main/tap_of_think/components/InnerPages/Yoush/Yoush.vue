
<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <YoushSection/>
        <FeatureSection/>
        <DownloadSection/>
        <SkillsSection />
        <FooterSection />
      </div>
    </div>
  </template>
  
  <script>
  import ScrollupSection from '../../Scrollup/Scrollup'
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '../../Breadcrumb/Yoush/Yoush'
  import YoushSection from '~/components/Yoush/Yoush'
  import FeatureSection from '~/components/InnerPages/Yoush/Feature'
  import DownloadSection from '~/components/Download/Download'
  import PromoSection from '../../Promo/PromoThree'
  import TeamSection from '../../Team/Team'
  import MissionSection from '~/components/AboutUs/Mission'
  import NewsletterSection from '../../Newsletter/Newsletter'
  import ContactSection from '../../Contact/Contact'
  import FooterSection from '../../Footer/Footer'
  
  export default {
    name: 'Yoush',
    components: {
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      PromoSection,
      TeamSection,
      NewsletterSection,
      ContactSection,
      FooterSection,
      YoushSection,
      FeatureSection,
      DownloadSection
    }
  }
  </script>
  
  <style>
  
  </style>