<template>
    <div class="language-selector">
        <div class="currency-wrapper">
            <a href="javascript:void(0);">
                <span class="current-currency" @click="toggle">
                    <img src="../../images/blank.gif" :class="$t('language.flag')" :alt="$t('language.lang')">
                    {{ $t("language.lang") }} &nbsp
                </span>                       
                <i class="fa fa-caret-down" aria-hidden="true"></i>	
            </a>
            <ul class="setting-currency">
                <li class="selected" v-for="lang in topLinks.languages" v-if="!compairLanguage(lang.locale)">
                    <a  href="#" @click.prevent="setLocale(lang.locale)" >
                        <img src="../../images/blank.gif" :class="lang.flag" :alt="lang.lang">{{lang.lang}} &nbsp
                    </a>
                </li>
            </ul> 		
        </div>
    </div>
</template>

<script>
import { topLinks } from "./_data.js"
/**
 *  "vue-loader" will ignore named export and put out a warning;
 *  TODO:  In this case there is no warning, should report to vue-loader team
 */
export default {
   name: "language-selector",
   data: () => {
     return { 
         topLinks: topLinks,
         opened: false
         //currentLanguage: this.$language.lang
     }
   },
   methods: {
    toggle: function () {
      this.opened = !this.opened
    },
    setLocale: function(locale) {
        this.$i18n.locale=locale;
    },
    compairLanguage: function(locale) {
        if (this.$i18n.locale==locale){
            return true;
        }        
        return false;
    }
   }
};
</script>


<style lang="scss" scoped>
@import 'LanguageSelector.scss';
</style>