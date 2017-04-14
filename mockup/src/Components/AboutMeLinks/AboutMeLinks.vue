<template>
    <div>
        <div class="custom-about-me-links">
            <div class="container">

                <div class="row">
                    <div class="col-md-3 col-md-offset-4 col-sm-4-a center custom-xs-border-bottom p-none">
                        <a data-hash="" href="#" class="text-decoration-none">
                            <span class="custom-nav-button text-color-dark">
                                <i class="icon-earphones-alt icons text-color-primary"></i>
                                {{ $t("aboutMeLinks.contactInformation") }}
                            </span>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-4-a center custom-xs-border-bottom p-none">
                        <a data-hash="" href="#" class="text-decoration-none">
                            <span class="custom-nav-button custom-divisors text-color-dark">
                                <i class="icon-envelope-open icons text-color-primary"></i>
                                {{ $t("aboutMeLinks.sendMessage") }}	
                            </span>
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-4-a center p-none">
                        <a href="#" class="text-decoration-none">
                            <span class="custom-nav-button text-color-dark">
                                <i class="icon-cloud-download icons text-color-primary"></i>
                                {{ $t("aboutMeLinks.downloadResume") }}
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </div>

        <section class="section section-no-border background-color-light m-none">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <div class="custom-box-details background-color-light custom-box-shadow-1 col-md-6 ml-xlg mb-xlg pull-right clearfix">
                            <h4> {{ $t("aboutMe.personalDetailsName.title") }} </h4>
                            <div class="col-md-6 col-sm-6 p-none">
                                <ul class="custom-list-style-1 p-none">
                                    <li>
                                        <span class="text-color-dark">{{ $t("aboutMe.personalDetailsName.birthDay.title") }}:</span>
                                        <span class="custom-text-color-2">{{ $t("aboutMe.personalDetailsName.birthDay.value") }}</span>
                                    </li>
                                    <li>
                                        <span class="text-color-dark">{{ $t("aboutMe.personalDetailsName.sexName.title") }}:</span>
                                        <span class="custom-text-color-2">{{ $t("aboutMe.personalDetailsName.sexName.sex") }}</span>
                                    </li>
                                    <li>
                                        <span class="text-color-dark">{{ $t("aboutMe.personalDetailsName.nationality.title") }}:</span>
                                        <span class="custom-text-color-2">{{ $t("aboutMe.personalDetailsName.nationality.value") }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-sm-6 p-none">
                                <ul class="custom-list-style-1 p-none">
                                    <li>
                                        <span class="text-color-dark">{{ $t("aboutMe.personalDetailsName.skype.title") }}:</span>
                                        <span class="custom-text-color-2"><a class="custom-text-color-2" href="skype:yourskype?chat">{{ $t("aboutMe.personalDetailsName.skype.value") }}</a></span>
                                    </li>
                                    <li>
                                        <span class="text-color-dark">{{ $t("aboutMe.personalDetailsName.tel.title") }}:</span>
                                        <span class="custom-text-color-2"><a class="custom-text-color-2" href="$t('aboutMe.personalDetailsName.tel.value')">{{ $t("aboutMe.personalDetailsName.tel.value") }}</a></span>
                                    </li>
                                    <li>
                                        <span class="text-color-dark">{{ $t("aboutMe.personalDetailsName.mail.title") }}:</span>
                                        <span class="custom-text-color-2"><a class="custom-text-color-2" href="mailto:$t('aboutMe.personalDetailsName.mail.value')">{{ $t("aboutMe.personalDetailsName.mail.value") }}</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 class="text-color-quaternary font-weight-extra-bold text-uppercase">{{ $t("aboutMe.intro.title") }}</h2>
                        
                        <p class="custom-text-color-2">
                            {{ $t("aboutMe.intro.value") }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
import { aboutMe } from "../data";

export default {
    data: () => {
        return { aboutMe }
    }
};
</script>

<style lang="scss">
@import '../../css/base.scss';
@import '_AboutMeLinks.scss'
</style>
