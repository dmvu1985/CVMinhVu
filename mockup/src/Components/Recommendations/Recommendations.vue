<template>
    <section id="recommendations" class="section section-no-border background-color-primary m-none">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">Recommendations</h2>
                </div>
                <div class="col-md-12 p-none">
                    <div class="owl-carousel owl-theme custom-dots-style-1 custom-dots-color-1 custom-dots-position-1 mb-none">
                        <div class="col-md-12" v-for="recommendation in recommendations">
                            <div class="testimonial custom-testimonial-style-1 testimonial-with-quotes mb-none">
                                <blockquote class="pb-sm">
                                    <p class="custom-text-color-3">{{recommendation.content}}</p>
                                </blockquote>
                                <div class="testimonial-author pull-left">
                                    <p><strong class="text-uppercase">{{recommendation.author}}</strong><span class="custom-text-color-3">{{recommendation.regency}}</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="testimonial custom-testimonial-style-1 testimonial-with-quotes mb-none">
                                <blockquote class="pb-sm">
                                    <p class="custom-text-color-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu. Praesent aliquam velit vel libero dictum, non sollicitudin lectus mollis. Morbi sollicitudin auctor gravida.</p>
                                </blockquote>
                                <div class="testimonial-author pull-left">
                                    <p><strong class="text-uppercase">Bob Doe</strong><span class="custom-text-color-3">Director of Engineering</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { recommendations } from "../data";

export default {
   data: () => {
     return { recommendations }
   }
};
</script>

<style lang="scss">
@import '../../css/base.scss';
@import 'Recommendations.scss';
</style>
