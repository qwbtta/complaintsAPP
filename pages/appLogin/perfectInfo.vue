<template>
	<view class="perfectInfo">
		<image :src="avatar" mode="" class="headIcon" @click="changeAvatar"></image>
		<text class="label">昵称</text>
		<input type="text" value="" placeholder="请输入昵称" class="nameInput" v-model="nickname" />
		<text class="label">性别</text>
		<view class="checkCon">
			<view :class="['checkItem',gender==1?'checked':'']" @click="selectGender(1)">
				男
			</view>
			<view :class="['checkItem',gender==2?'checked':'']" @click="selectGender(2)">
				女
			</view>
		</view>
		<!-- 	<text class="label">自我描述</text>
		<textarea value="" placeholder="可以让更多人发现你哟～" class="selfDes" v-model="selfDes" /> -->
		<view class="btn" @click="finish">
			完成
		</view>
	</view>
</template>

<script>
	import uploadFile from '../../uploadFile/index.js'
	export default {
		data() {
			return {
				nickname: "",
				gender: 0,
				avatar: "https://earth-angel-1302656840.cos.ap-chengdu.myqcloud.com/oG0xUPaAeFLt9a266210615d867291d7fbed30b3f958.png",
				selfDes: ""
			}
		},
		methods: {
			selectGender(e) {
				this.gender = e
			},
			changeAvatar() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					sizeType: ["original", "compressed"],
					sourceType: ["album"],
					success: async function(res) {
						const tempFilePaths = res.tempFilePaths;
						let upLoadImgUrl = await uploadFile(tempFilePaths[0], _this);
						console.log(upLoadImgUrl);


					},
				});
			},
			finish() {

				if (this.$u.trim(this.nickname).length == 0) {
					this.$u.toast('请输入昵称')
					return
				} else if (this.gender == 0) {
					this.$u.toast('请选择性别')
					return
				}
				let info = this.vuex_registerInfo
				info.nickname = this.nickname
				info.gender = this.gender
				info.avatar = this.avatar
				info.operationId = info.account + Date.now().toString()
				console.log(info);
				this.$u.api.register(info).then(res => {
					console.log(res,"registerres");
					if (res.errCode == 0) {
						this.$u.api.login({
								account: info.account,
								password: info.password,
								operationId: info.account + JSON.stringify(new Date().getTime())
							}).then(async res => {
								console.log(res,"api.login");

								await this.$u.vuex('vuex_uid', res.data.uid)
								await this.$u.vuex('vuex_APPtoken', res.data.youXXToken)
								await this.$u.vuex('vuex_IMtoken', res.data.openIMToken)

								this.$openSdk.login(res.data.uid, res.data.openIMToken, (val) => {
									console.log(val,"valval");
									
								});
								uni.reLaunch({
									url: '../chat/chat'
								})

							})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #0F0F0F;
	}
</style>

<style lang="scss" scoped>
	.perfectInfo {
		padding: 0 80rpx;

		.headIcon {
			width: 220rpx;
			height: 220rpx;
			border-radius: 220rpx;
			display: block;
			margin: 142rpx auto 60rpx;
		}

		.label {
			font-size: 32rpx;
			color: #ffffff;
			margin-bottom: 30rpx;
			display: block;
		}

		.nameInput {
			width: 506rpx;
			height: 80rpx;
			background-color: #1c1c1c;
			border-radius: 80rpx;
			font-size: 28rpx;
			color: #999999;
			padding: 0 30rpx;
			margin-bottom: 36rpx;
		}

		.checkCon {
			margin-bottom: 36rpx;
			display: flex;
			align-items: center;

			.checkItem {
				width: 134rpx;
				height: 80rpx;
				background-color: #1c1c1c;
				border-radius: 80rpx;
				font-size: 28rpx;
				color: #ffffff;
				line-height: 80rpx;
				text-align: center;
				margin-right: 60rpx;
			}

			.checked {
				background-color: #2cffb0;
			}
		}

		.selfDes {
			width: 536rpx;
			height: 194rpx;
			background-color: #1c1c1c;
			border-radius: 30rpx;
			padding: 30rpx;
			font-size: 28rpx;
			color: #999999;
		}

		.btn {
			width: 300rpx;
			height: 80rpx;
			background-color: #2cffb0;
			border-radius: 64rpx;
			font-size: 32rpx;
			color: #ffffff;
			text-align: center;
			line-height: 80rpx;
			margin: 0 auto;
			margin-top: 60rpx;
		}
	}
</style>
