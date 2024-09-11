<template>
  <header class="section header-area">
        <div id="appo-header" class="main-header-area">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="/">
                        <img class="logo" src="assets/img/tap_logo.png" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appo-menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>  
                    <div class="collapse navbar-collapse" id="appo-menu">
                  
                        <ul class="navbar-nav header-items ml-auto">
                            <li class="nav-item active dropdown">
                                <a class="nav-link " style="color: #2d3e50;">
                                    Homepage
                                </a>
                    
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about" style="color: #2d3e50;">About us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/business" id="navbarDropdown-2" role="button" data-toggle="dropdown" style="color: #2d3e50;">
                                    Business
                                </a>
                                <div class="dropdown-menu mega-menu blog-menu px-3 py-md-3">
                                    <div class="row">
                                        <div class="col-12">
                                            <ul class="single-menu">
                                                <li><a class="dropdown-item" href="/newspaper" style="color: white;">Journalism</a></li>
                                                <li><a class="dropdown-item" href="/app" style="color: white;">Apps</a></li>
                                                <li><a class="dropdown-item" href="/media" style="color: white;">Media</a></li>
                                                <li><a class="dropdown-item" href="/service" style="color: white;">Services</a></li>
                                                <li><a class="dropdown-item" href="/taptrading" style="color: white;">TAP Trading</a></li>
                                                <li><a class="dropdown-item" href="/honVietStore">HonVietStore</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/blog" style="color: #2d3e50;">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="/career" style="color: #2d3e50;">Careers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="/contact" style="color: #2d3e50;">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import Faq from "~/components/InnerPages/Faq/Faq.vue";

export default {
  components: {Faq}

}
</script>

<style>
    .nav-item.dropdown .dropdown-menu:hover {
        background-color: #2d3e50;
    }

    .nav-item.dropdown .dropdown-menu {
        background-color: #2d3e50;
    }
</style>