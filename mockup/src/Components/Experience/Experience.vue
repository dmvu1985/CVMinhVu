<template>
    <section id="experience" class="section section-secondary section-no-border m-none">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-color-quaternary text-uppercase font-weight-extra-bold">{{ $t("experience.title") }}</h2>
                    <section class="timeline custom-timeline" id="timeline">
                        <div class="timeline-body">
                        <div :class="screenWidth()"> 
                            <article v-for="jobDetail in $t('experience.value')" :class="screenRight()">
                                <div class="experience-info col-md-3 col-sm-5 match-height background-color-primary" style="height: 244px;">
                                    <span class="from text-color-dark text-uppercase">
                                        {{ $t("experience.title_from") }}
                                        <span class="font-weight-semibold">{{jobDetail.from}}</span>
                                    </span>
                                    <span class="to text-color-dark text-uppercase">
                                        {{ $t("experience.title_to") }}
                                        <span class="font-weight-semibold">{{jobDetail.to}}</span>
                                    </span>
                                    <p class="text-color-dark">({{jobDetail.duration}})</p>
                                    <span class="company text-color-dark font-weight-semibold">
                                        {{jobDetail.company}}
                                        <span class="company-location text-color-dark font-weight-normal text-uppercase">{{jobDetail.jobTitle}}</span>
                                    </span>
                                </div>
                                <div class="experience-description col-md-9 col-sm-7 match-height background-color-light" style="height: 244px;">
                                    <h4 class="text-color-dark font-weight-semibold">{{jobDetail.position}}</h4>
                                    <p class="custom-text-color-2">{{jobDetail.description}}</p>
                                </div>
                            </article>
                            
                        </div>
                        </div>
                        <div :class="screenBar()" style="top: 137px; bottom: 137px;"></div>
                    </section>
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
   },
   methods: {
    
	screenWidth: function(){
		if (screen.width>700){
			return "";
		}
		return "owl-carousel";
    },
   screenRight: function(){
		if (screen.width>700){
			return "timeline-box right custom-box-shadow-2";
		}
		return "timeline-box custom-box-shadow-2";
	},
    screenBar: function(){
		if (screen.width>700){
			return "timeline-bar";
		}
		return "";
	}
   }
};
</script>

<style lang="scss">
@import '../../css/base.scss';
@import 'Experience.scss'
</style>
