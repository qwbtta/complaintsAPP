<template>
	<view class="appLogin">
		<image src="/static/APPicon.png" mode="" class="APPicon"></image>
		<view class="titleCon">
			<view class="bar"></view>
			<image src="/static/APPtitle.png" mode="" class="APPtitle"></image>
			<view class="bar"></view>
		</view>
		<view class="inputItem">
			<text class="labelText">账号</text>
			<input type="text" value="" placeholder="请输入手机号" class="input" v-model="account" />
		</view>
		<view class="inputItem">
			<text class="labelText">密码</text>
			<input type="text" password="true" value="" placeholder="请输入密码" class="input" v-model="password" />
		</view>
		<view class="btn special" @click="login">
			登录
		</view>
		<view class="btn" @click="goRegister">
			注册
		</view>
		<view class="footer">
			<u-checkbox v-model="checked" shape="circle" active-color="#2cffb0" size="28" icon-size="16"></u-checkbox>
			<text class="des">登陆即代表同意<text class="desSpecial">用户协议</text>和<text class="desSpecial">隐私政策</text></text>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				account: "",
				password: ""
			}
		},
		methods: {
			async login() {
				if (this.$u.trim(this.account, 'all').length == 0) {
					this.$u.toast('请输入账号')
					return
				} else if (this.$u.trim(this.password, 'all').length == 0) {
					this.$u.toast('请输入密码')
					return
				}
				this.$u.api.login({
						account: this.account,
						password: this.password,
						operationId: this.account + JSON.stringify(new Date().getTime())
					}).then(async res => {
						console.log(res);
						await this.$u.vuex('vuex_uid', res.data.uid)
						await this.$u.vuex('vuex_APPtoken', res.data.youXXToken)
						let _this = this
						let parameter = {
							secret:"tuoyun",
							platform:2,
							uid: res.data.uid
						}

						uni.request({
							url: "http://47.112.160.66:10000/auth/user_token",
							method: "POST",
							data: parameter,
							success(res) {
								console.log(res,"换token");
								_this.$u.vuex('vuex_IMtoken', res.data.data.token)
								
								_this.$openSdk.login(res.data.data.uid, res.data.data.token, (val) => {
									console.log(val,"valval");
									if (!val.err){
										_this.$u.vuex('vuex_wsLink',true)
										_this.$u.api.get_user_info_list({
												uidList: [_this.vuex_uid],
												operationId: _this.vuex_uid + JSON.stringify(new Date().getTime())
											}).then(res => {
												console.log(res);
												_this.$u.vuex('vuex_IMinfo',res.data.userInfoList[0])
												uni.reLaunch({
													url: '../chat/chat'
												})
											})
											.catch(err => {
												console.log(err);
											})
										
									}
									
								});
							},
							fail(err) {
								console.log(err);
							}
						});

					})
					.catch(res => {
						console.log(res);
						if (res.data.errMsg == 'find account info failedrecord not found') {
							this.$u.toast('账号不存在')
						} else if (res.data.errMsg == 'password error') {
							this.$u.toast('密码不正确')
						}
					})
			},
			goRegister() {
				uni.navigateTo({
					url: './register'
				})
			}
		},
		onLoad() {

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
	.appLogin {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 42rpx;

		.APPicon {
			width: 240rpx;
			height: 240rpx;
			border-radius: 56rpx;
			margin-top: 136rpx;
		}

		.titleCon {
			display: flex;
			align-items: center;
			margin-top: 40rpx;
			margin-bottom: 80rpx;

			.bar {
				width: 12rpx;
				height: 4rpx;
				background-color: #ffffff;
			}

			.APPtitle {
				width: 328rpx;
				height: 54rpx;
				margin: 0 16rpx;
			}
		}

		.inputItem {
			display: flex;
			align-items: center;
			margin-top: 60rpx;

			.labelText {
				font-size: 32rpx;
				color: #ffffff;
			}

			.input {
				width: 506rpx;
				height: 80rpx;
				background-color: #1c1c1c;
				border-radius: 80rpx;
				margin-left: 20rpx;
				font-size: 28rpx;
				color: #999999;
				padding: 0 30rpx;
			}
		}

		.btn {
			width: 678rpx;
			height: 100rpx;
			background-color: #28292a;
			border-radius: 64rpx;
			font-size: 32rpx;
			color: #ffffff;
			text-align: center;
			line-height: 100rpx;
			margin-bottom: 30rpx;
		}

		.special {
			background-color: #2cffb0;
			margin-top: 252rpx;
		}

		.footer {
			display: flex;
			align-items: center;
			margin-top: 70rpx;

			.des {
				font-size: 28rpx;
				color: #ffffff;
				margin-left: -16rpx;

				.desSpecial {
					font-size: 28rpx;
					color: #2cffb0;
				}
			}
		}
	}
</style>
