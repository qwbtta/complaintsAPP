<template>
	<view class="otherHome">
		<view class="main">
			<view class="headCard">
				<image :src="userInfo.avatar" mode="" class="headIcon"></image>
				<view class="headRight">

					<view class="nameCon u-flex">
						<text class="nickName">{{userInfo.nickname}}</text>
						<image src="/static/male.png" mode="" class="gender"></image>
					</view>
					<view class="idCon u-flex">
						<text>ID：{{userInfo.uid}}</text>
						<image src="/static/idCopy.png" mode="" @click="copy" class="copyIcon"></image>
					</view>


					<view class="relationship" v-if="JSON.stringify(userInfo)!='{}'">
						<text class="type">粉丝<text class="num">{{userInfo.followerList.length}}</text></text>
						<text class="type">关注<text class="num">{{userInfo.followList.length}}</text></text>
					</view>

				</view>
			</view>
			<view class="desCon">
				<text class="des">{{userInfo.selfDesc}}</text>
			</view>
			<view class="releaseCon">
				<view class="title u-flex">
					<image src="/static/otherRelease.png" mode="" class="releaseIcon"></image>
					<text>TA发布的</text>
				</view>
				<view class="releaseContent">
					<image src="/static/otherNone.png" mode="" class="back"></image>
				</view>
			</view>


		</view>
		<view class="footerCon">
			<view class="followed btn" v-if="isFollow" @click="unfollow">
				已关注
			</view>
			<view class="follow btn" v-else @click="follow">
				关注
			</view>
			<view class="follow btn">
				私聊
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uid:"",
				userInfo: {},
				isFollow:false
			}
		},
		methods: {
			copy(){
				let _this = this
				uni.setClipboardData({
					data: _this.userInfo.uid,
					success: function() {
						uni.hideToast()
						uni.showToast({
							title: '复制成功',
							duration: 2000
						});
					}
				});
			},
			getUserInfo(){
				this.$u.api.get_user_info_list({
						uidList: [this.uid],
						operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
					}).then(res => {
						console.log(res, "4444");
						this.userInfo = res.data.userInfoList[0]
						this.isFollow = false
						
							for (let i = 0; i < res.data.userInfoList[0].followerList.length; i++) {
								if (res.data.userInfoList[0].followerList[i] == this.vuex_uid) {
									this.isFollow = true
									break
								} 
							}
				
					})
					.catch(err => {
						console.log(err);
					})
			},
			follow() {
				this.$u.api.follow({
						uid: this.userInfo.uid,
						operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
					}).then(res => {
						console.log(res, "00");
						this.getUserInfo()
					})
					.catch(err => {
						console.log(err, "1111");
					})
			},
			unfollow() {
				this.$u.api.unfollow({
						uid: this.userInfo.uid,
						operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
					}).then(res => {
						console.log(res, "00");
						this.getUserInfo()
					})
					.catch(err => {
						console.log(err, "1111");
					})
			}
		},
		onLoad(options) {
			console.log(options.uid);
			this.uid = options.uid
			this.getUserInfo()
		}
	}
</script>

<style lang="scss" scoped>
	.otherHome {
		background-image: url(../../static/myBack.png);
		background-size: 100% 484rpx;
		padding-top: 190rpx;

		.main {
			padding: 0 36rpx;
			padding-top: 40rpx;
			background-color: #1d1e1f;
			border-top-right-radius: 40rpx;
			border-top-left-radius: 40rpx;

			.headCard {
				display: flex;
				align-items: center;

				.headIcon {
					width: 200rpx;
					height: 200rpx;
					border-radius: 200rpx;
					border: solid 4rpx #2cffb0;

				}

				.headRight {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding-left: 58rpx;

					.nameCon {
						display: flex;
						align-items: center;

						.nickName {
							font-size: 40rpx;
							color: #ffffff;
						}

						.gender {
							width: 28rpx;
							height: 28rpx;
							margin-left: 30rpx;
						}
					}

					.idCon {
						font-size: 28rpx;
						color: #ffffff;
						margin-top: 32rpx;

						.copyIcon {
							width: 24rpx;
							height: 26rpx;
							margin-left: 10rpx;
						}
					}



					.relationship {
						display: flex;
						align-items: center;
						margin-top: 32rpx;

						.type {
							font-size: 28rpx;
							color: #999999;
							margin-right: 100rpx;

							.num {
								font-size: 28rpx;
								color: #ffffff;
								margin-left: 10rpx;
							}


						}
					}

				}
			}

			.desCon {
				padding: 40rpx 0;
				border-bottom: 2rpx solid #2f2f2f;

				.des {
					font-size: 24rpx;
					color: #ffffff;
				}

			}

			.releaseCon {
				.title {
					font-size: 28rpx;
					color: #2cffb0;
					margin-top: 30rpx;

					.releaseIcon {
						width: 38rpx;
						height: 36rpx;
						margin-right: 20rpx;
					}
				}

				.releaseContent {
					height: 754rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.back {
						width: 294rpx;
						height: 224rpx;
					}
				}
			}


		}


		.footerCon {
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: #1d1e1f;
			padding-bottom: 30rpx;
			.follow {
				width: 280rpx;
				height: 64rpx;
				background-color: #2cffb0;
				border-radius: 40rpx;
				font-size: 28rpx;
				color: #ffffff;
				text-align: center;
				line-height: 64rpx;
			}
			.followed {
				width: 280rpx;
				height: 64rpx;
				background-color: rgba(255, 255, 255, 0.3);
				border-radius: 40rpx;
				font-size: 28rpx;
				color: #ffffff;
				text-align: center;
				line-height: 64rpx;
			}
			
		}
	}
</style>
