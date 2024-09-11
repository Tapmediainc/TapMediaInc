<script>
  import ScrollupSection from '../../Scrollup/Scrollup'
  import HeaderSection from '../../Header/HeaderOne'
  import FooterSection from '../../Footer/Footer'
  import TapTradingSection from '../../TapTrading/TapTrading'
  
  export default {
    name: 'TAPTrading',
    components: {
      ScrollupSection,
      HeaderSection,
      FooterSection,
      TapTradingSection
    }
  }
  </script>
<template>
    <div>
        <div class="all-area">
            <ScrollupSectionn />
            <HeaderSection />
            <TapTradingSection />
            <FooterSection />
        </div>
    </div>
                
</template>

<style>
    
</style>
