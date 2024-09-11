<template>
    <section class="section about-us ptb_100 pl-2 pr-2">
        <div class="container">
            <h2 class="about-title">Organization</h2>
            <hr class="center-star">
            <img src="assets/img/org.png" style="margin-left: 5%;"/>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    hr{
  border: 0;
  height: 1px;
  width: 20%;
  position: relative;
  margin: 30px auto;
  
  
  &.center-star{
    background: #39D1B4;
    
    &:before{
      content: "★";
      color: #39D1B4;
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 50%;
      margin: 0 0 0 -3px;
      font-size: 15px;
      line-height: 0;
      text-shadow: 0 0 3px lighten(darken(#fff, 20%), 5%);
    }
  }
}

    @media (max-width: 700px) {
       
    }
</style>