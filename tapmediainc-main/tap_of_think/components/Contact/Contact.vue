<template>
    <section id="contact" class="contact-area bg-gray ptb_100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-6">
                    <div class="section-heading text-center">
                        <h2 class="text-capitalize">Have questions ?</h2>
                        <p class="d-none d-sm-block mt-4">Don't hegistate to send us.</p>
                        <!-- <p class="d-block d-sm-none mt-4"> -The TapMedia Team</p> -->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="contact-box text-center">
                        <form id="contact-form" method="" action="">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="name" placeholder="Name" required="required">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="required">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" placeholder="Message" required="required"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-bordered mt-3 mt-sm-4" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                        <p class="form-message"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>