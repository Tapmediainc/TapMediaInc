<template>
    <div>
      <ScrollupSection />
      <div class="all-area">
        <HeaderSection />
        <BreadcrumbSection />
        <MediaSection/>
        <ServiceSection/>
        <!-- <SkillsSection />
        <AboutUsSection />
        <MissionSection />
        <OrganizeSection/> -->
        <FooterSection />
      </div>
    </div>
</template>
  
<script>
import ScrollupSection from '../../Scrollup/Scrollup'
import ServiceSection from '~/components/Media/Service.vue'
import HeaderSection from '../../Header/HeaderOne'
import MediaSection from '~/components/Media/Media'
import BreadcrumbSection from '../../Breadcrumb/Media/Media'
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
    name: 'Media',
    components: {
      ScrollupSection,
      HeaderSection,
      BreadcrumbSection,
      SkillsSection,
      AboutUsSection,
      PromoSection,
      TeamSection,
      NewsletterSection,
      MediaSection,
      ContactSection,
      FooterSection,
      OrganizeSection,
      MissionSection,
      ServiceSection
    }
  }
  </script>
  
  <style>
  
  </style>