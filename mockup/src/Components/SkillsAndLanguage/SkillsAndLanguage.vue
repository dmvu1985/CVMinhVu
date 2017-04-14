<template>
<section id="skills" class="section section-no-border background-color-light m-none">
				<div class="container">
					<h2 class="text-color-quaternary text-uppercase font-weight-extra-bold"> {{ $t("skills.title") }} </h2>
					<div class="row custom-sm-flex-order">
						<div :class="screenWidth()"> 
							<div class="col-md-4 col-sm-6 col-xs-12" v-for="skillWork in $t('skills.skillWorks')"><br/><br/>													
								<div class="progress-bars custom-progress-bars" v-for="skill in skillWork">
									<div class="progress-label text-color-dark font-weight-semibold text-uppercase text-sm">
										<span>{{ skill.work }}</span>
									</div>
									<div class="progress">
										<div class="progress-bar"  :style="skill.process"></div>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 col-xs-12">
							<div class="custom-box-details background-color-light custom-box-shadow-1">
								<h4 class="text-color-dark">{{$t("languageSkill.title")}}</h4>
								<ul class="custom-list-style-2 p-none" v-for="lang in $t('languageSkill.value')" >
									<li>
										<span class="font-weight-semibold custom-max-width-1 text-color-dark">
											<img src="../../images/blank.gif" :class="lang.flag" :alt="lang.lang">{{lang.lang}}:
										</span>
										<span class="custom-text-color-2">{{lang.level}}</span>
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
   },
   methods: {
	screenWidth: function(){
		if (screen.width>700){
			return "";
		}
		return "owl-carousel";
	}
   }
};
</script>

<style lang="scss">
@import '../../css/base.scss';
@import 'SkillAndLanguage.scss';
</style>
