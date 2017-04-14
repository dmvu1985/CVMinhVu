<template>
    <section id="education" class="section section-no-border custom-background-color-1 m-none">
        <div class="container">  
            <div class="col-md-12">
                <h2 class="text-color-quaternary text-uppercase font-weight-extra-bold m-none">{{$t("education.title")}}</h2>
                <div :class="screenWidth()">   
                    <div v-for="jobDetail in $t('education.value')">                            
                                   <div class="box-carousel" >
                                        <div class="custom-box-details-2 background-color-light custom-box-shadow-3">                                            
                                            <i class="icon-graduation icons text-color-primary"></i>
                                            <h4 class="font-weight-semibold text-color-dark m-none">{{jobDetail.organization}}</h4>
                                            <p class="custom-text-color-2 mb-xs">{{jobDetail.major}}</p>
                                            <strong class="text-color-primary">{{jobDetail.period}}</strong>

                                        </div>
                                    </div>
                             </div>           
                </div>    
            </div> 
        </div>
    </section>
</template>
<script>


export default {
   data: () => {
     return { }
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
@import 'Education.scss'
</style>
