<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <IntroductionSection />
        <FeatureSection/>
        <PositionSection/>
        <FooterSection />
      </div>
    </div>
  </template>
  
  <script>
  import ScrollupSection from '../../Scrollup/Scrollup'
  import HeaderSection from '../../Header/HeaderOne'
  import BreadcrumbSection from '~/components/Breadcrumb/Career/Career'
  import IntroductionSection from '~/components/Career/Introduction'
  import FeatureSection from '~/components/Career/Feature'
  import PositionSection from '~/components/Career/Position'
  import ContactSection from '../../Contact/Contact'
  import FooterSection from '../../Footer/Footer'
  
  export default {
    name: 'About',
    components: {
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      ContactSection,
      FooterSection,
      IntroductionSection,
      PositionSection,
      FeatureSection,
    }
  }
  </script>
  
  <style>
  
  </style>