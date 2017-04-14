<template>
<section id="skills" class="section section-no-border background-color-light m-none">
				<div class="container">
					<h2 class="text-color-quaternary text-uppercase font-weight-extra-bold"> {{ $t("skillDeveloper.title") }} </h2></br>
					<div class="row custom-sm-flex-order"> 
						<div :class="screenWidth()">                      
							<div class="col-md-4 col-sm-6 col-xs-12" v-for="skillWork in $t('skillDeveloper.skillWorks')">													
								<h4 class="text-color-dark">{{skillWork.title}}</h4></br>
								<div class="progress-bars custom-progress-bars" v-for="value in skillWork.values">
									<div class="progress-label text-color-dark font-weight-semibold text-uppercase text-sm">
										<span>{{ value.lang }}</span>
									</div>
									<div class="progress">
										<div class="progress-bar"  :style="value.process"></div>
									</div>								
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
@import 'DevelopSkill.scss';
</style>
