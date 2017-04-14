<template>
    <div class="col-md-9" style="padding:0 10px;">
		<div style="width: 850px">
			<img :src="picSrc.src" alt="">
		</div>
	</div>
</template>

<script>
import { picSrc } from "./_data.js"

export default {
    name: 'home',
	data: () => {
		return { picSrc: picSrc }
	}
};
</script>

<style lang="scss" scoped>
@import 'Home.scss'
</style>