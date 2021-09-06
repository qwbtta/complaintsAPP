<template>
	<view @click="clickItem" class="access-item">
		<text>{{title}}</text>
		<u-icon v-if="!isSwitch" color="#999" size="36" name="arrow-right" />
		<u-switch v-else size="36" v-model="newCheck" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newCheck: this.isChecked
			}
		},
		props: {
			title: String,
			isChecked: {
				type: Boolean,
				default: false
			},
			isSwitch: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			clickItem() {
				this.$emit("click", this.newCheck)
			}
		}
	}
</script>

<style lang="scss">
	.access-item {
		background-color: #111111;
		padding: 36rpx;
		font-size: 32rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 114rpx;

		&:active {
			background-color: #222222;
		}
	}
</style>
