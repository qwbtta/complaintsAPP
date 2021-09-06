<template>
	<view class="systemSettings">
		<view class="btn">
			切换账号
		</view>
		<view class="btn" @click="logout">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			async logout() {
				await this.$u.vuex('vuex_uid', '')
				await this.$u.vuex('vuex_APPtoken', '')
				await this.$u.vuex('vuex_IMtoken', '')
				uni.reLaunch({
					url: '../appLogin/appLogin'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.systemSettings {
		padding: 0 36rpx;

		.btn {
			width: 100%;
			height: 100rpx;
			background-color: #28292a;
			border-radius: 64rpx;
			font-size: 32rpx;
			color: #ffffff;
			text-align: center;
			line-height: 100rpx;
			margin-top: 30rpx;
		}
	}
</style>
