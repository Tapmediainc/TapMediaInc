<template>
    <header class="section header-area">
        <div id="appo-header" class="main-header-area nav-white">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <!-- Logo -->
                    <a class="navbar-brand" href="/">
                        <img class="logo" src="assets/img/logo_white.png" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appo-menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- Appo Menu -->
                    <div class="collapse navbar-collapse" id="appo-menu">
                        <!-- Header Items -->
                        <ul class="navbar-nav header-items ml-auto">
                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                    Home
                                </a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link scroll" href="#features">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#pricing">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#team">Team</a>
                            </li> -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-2" role="button" data-toggle="dropdown">
                                    Blog
                                </a>
                                <!-- Blog Menu -->
                                <div class="dropdown-menu mega-menu blog-menu px-3 py-md-3">
                                    <div class="row">
                                        <div class="col-12">
                                            <ul class="single-menu">
                                                <li><a class="dropdown-item" href="/blog-two-column">Blog - 2 Column</a></li>
                                                <li><a class="dropdown-item" href="/blog-three-column">Blog - 3 Column</a></li>
                                                <li><a class="dropdown-item" href="/blog-left-sidebar">Blog - Left Sidebar</a></li>
                                                <li><a class="dropdown-item" href="/blog-right-sidebar">Blog - Right Sidebar</a></li>
                                                <li><a class="dropdown-item" href="/blog-details-left-sidebar">Blog Details - Left Sidebar</a></li>
                                                <li><a class="dropdown-item" href="/blog-details-right-sidebar">Blog Details - Right Sidebar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  
}
</script>

<style>

</style>