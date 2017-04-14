<template>

<section id="about-me">
        <language-selector></language-selector>
    <div class="container">
        <div class="row"> 
            <div class="col-md-4 col-sm-4 col-xs-10 col-sm-offset-0 col-xs-offset-1 custom-sm-margin-bottom-1">
                <img src="../../images/me4.jpg" class="img-responsive custom-border custom-image-position-2 custom-box-shadow-4" alt="">           
			</div>            
            <div class="col-sm-8">                
                <h1 class="text-color-primary custom-font-size-1">{{ $t("aboutMe.name") }}</h1>
                <p class="text-color-light font-weight-normal custom-font-size-2 custom-margin-bottom-1">{{ $t("aboutMe.jobTitle") }}</p>
                <span class="custom-about-me-infos">
                    <span class="custom-text-color-1 text-uppercase mb-md">{{ $t("aboutMe.customInfo") }}</span>
                    <span class="custom-text-color-1 text-uppercase">
                        <strong class="text-color-light">{{ $t("aboutMe.prevJob.title") }} : </strong>
                        {{ $t("aboutMe.prevJob.value") }}
                    </span>
                    <span class="custom-text-color-1 text-uppercase">
                        <strong class="text-color-light"> {{ $t("aboutMe.education.title") }} : </strong>
                        {{ $t("aboutMe.education.value") }}
                       
                    </span>
                    
                </span>
            </div>
        </div>  
    </div>    
</section>

</template>

<script>
import { aboutMe } from "../data";
import langugeSelector from "../LanguageSelector/LanguageSelector.vue";
export default {
   data: () => {
     return { aboutMe }
   },
   components: {
       'language-selector': langugeSelector
   },
};
</script>

<style lang="scss" scoped>
@import '_Header.scss'
</style>
