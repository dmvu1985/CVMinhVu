<template>
	<footer class="footer-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-3 info-footer">
					<div class="widget-wrapper">
						<div class="footer-block-title">
							<h3><span>Contact Information</span></h3> 
						</div>
						<div class="block_content">
							<div >
								<ul class="contact-info">
									<li>
										<i class="icon-location">&nbsp;</i>
										<p><b>Address:</b><br>{{contact.address}}</p>
									</li>
									<li>
										<i class="icon-phone">&nbsp;</i>
										<p><b>Phone:</b><br>{{contact.phone}}</p>
									</li>
									<li>
										<i class="icon-mail">&nbsp;</i>
										<p><b>Email:</b><br><a href="#">{{contact.email}}</a></p>
									</li>
									<li>
										<i class="icon-clock">&nbsp;</i>
										<p><b>Working Days/Hours:</b><br>{{contact.workingDay}}</p>
									</li>
								</ul>
							</div>
						</div>            
          			</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import { contact } from "./_data"

 export default { 
	 name: "home-footer",
	 data: () => {
		return { contact: contact }
	}
 };
</script>

<style lang="scss" scoped>
@import '_HomeFooter.scss'
</style>