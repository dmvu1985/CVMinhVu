<template>
	<footer class="footer-wrapper">
		<div class="container">
            <div class="footer-ribbon">
                <span>                
                    <span>Connect</span>                
                </span>
            </div>
			<div class="row">
				<div class="col-sm-12 info-footer">
					<div class="widget-wrapper">
						<div class="block_content">
							<div class="contact-info">								
                                <div class="col-md-4">                                    
                                    <i class="icon-social-linkedin">&nbsp;</i>
                                    <p><b>Dương Minh Vũ</b></p>
                                </div >
                                <div class="col-md-4">
                                    <i class="icon-social-github">&nbsp;</i>
                                    <p><b>Dương Minh Vũ</b></p>
                                </div>
                                <div class="col-md-4">
                                    <i class="icon-envelope">&nbsp;</i>
                                    <p><b>duongminhvu@live.com:</b></p>
                                </div>
							</div>
						</div>            
          			</div>
				</div>
			</div>
		</div>
	</footer>
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
@import 'Connect.scss';
</style>
