<template>
    <div>
        <home-header></home-header>    
        <about-me-links></about-me-links>
        
        <experience></experience>
        <education></education>
        <skills-and-language></skills-and-language>
        <develop-skill></develop-skill>
        <portfolio></portfolio>
        <recommendations></recommendations>
        <connect></connect>
        <home-footer></home-footer>
     </div>        	
</template>

<script>
   import homeHeaderComponent from './Components/Header/Header.vue';
   import aboutMeLinks from './Components/AboutMeLinks/AboutMeLinks.vue';
   import experience from './Components/Experience/Experience.vue';
   import education from './Components/Education/Education.vue';
   import skillsAndLanguage from './Components/SkillsAndLanguage/SkillsAndLanguage.vue';
   import developSkill from './Components/DevelopSkill/DevelopSkill.vue';
   import portfolio from './Components/Portfolio/Portfolio.vue';
   import recommendations from './Components/Recommendations/Recommendations.vue';
   import connect from './Components/Connect/Connect.vue';
   import homeFooterComponent from "./Components/HomeFooter/HomeFooter.vue";

   
    export default {
       // el: "#app", 
        
        name: 'app',
        components: {
          'home-header': homeHeaderComponent,
          'about-me-links': aboutMeLinks,
          'experience': experience,
          'education': education,
          'skills-and-language': skillsAndLanguage,
          'develop-skill': developSkill,
          'portfolio': portfolio,
          'recommendations': recommendations,
          'connect': connect,
          'home-footer': homeFooterComponent
        }
        
     }
</script>

<style lang="scss" scoped>
@import './css/base.scss';
</style>