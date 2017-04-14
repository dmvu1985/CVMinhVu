<template>
    <section id="portfolio" class="section section-no-border background-color-secondary m-none">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">Portfolio</h2>
                   
                    <div class="row">
                        <div class="sort-destination-loader sort-destination-loader-loaded">
                            <ul class="image-gallery sort-destination lightbox" data-sort-id="portfolio" data-plugin-options="{'delegate': 'a.lightbox-portfolio', 'type': 'image', 'gallery': {'enabled': true}}" data-filter="*">
                                <li class="col-md-3 col-sm-6 col-xs-12 isotope-item websites" style="height: 150px;">
                                    <div class="image-gallery-item">
                                        <a href="#" class="lightbox-portfolio">
                                            <span class="thumb-info custom-thumb-info-1">
                                                <span class="thumb-info-wrapper">
                                                    <span class="thumb-info-plus"></span>
                                                    <img src="../../images/HPE-EM.png" class="img-responsive" alt="">
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </li>
                                <li class="col-md-3 col-sm-6 col-xs-12 isotope-item logos" style="height: 150px;">
                                    <div class="image-gallery-item">
                                        <a href="#" class="lightbox-portfolio">
                                            <span class="thumb-info custom-thumb-info-1">
                                                <span class="thumb-info-wrapper">
                                                    <span class="thumb-info-plus"></span>
                                                    <img src="../../images/gratisal.svg" class="img-responsive" alt="" style="height: 150px;">
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </li>
                                <li class="col-md-3 col-sm-6 col-xs-12 isotope-item logos" style="height: 150px;">
                                    <div class="image-gallery-item" style="margin-left: 15px;">
                                        <a href="#" class="lightbox-portfolio">
                                            <span class="thumb-info custom-thumb-info-1">
                                                <span class="thumb-info-wrapper">
                                                    <span class="thumb-info-plus"></span>
                                                    <img src="../../images/DT.png" class="img-responsive" alt="" style="height: 150px;">
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { experience } from "../data";

export default {
   data: () => {
     return { experience }
   }
};
</script>

<style lang="scss">
@import '../../css/base.scss';
</style>
