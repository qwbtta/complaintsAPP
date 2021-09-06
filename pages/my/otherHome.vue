<template>
	<view class="otherHome">
		<view class="main">
			<view class="headCard">
				<image src="/static/changeAvatar.png" mode="" class="headIcon"></image>
				<view class="headRight">

					<view class="nameCon u-flex">
						<text class="nickName">这是昵称</text>
						<image src="/static/male.png" mode="" class="gender"></image>
					</view>
					<view class="idCon u-flex">
						<text>ID：1456874354</text>
						<image src="/static/idCopy.png" mode="" class="copyIcon"></image>
					</view>


					<view class="relationship">
						<text class="type">粉丝<text class="num">15</text></text>
						<text class="type">关注<text class="num">50</text></text>
					</view>

				</view>
			</view>
			<view class="desCon">
				<text class="des">一起失去一段爱情。一个放弃，一个被放弃。与其让曾经的爱情信物在某个角落里变阴霾，不如拿出来和大家分享。这里珍藏纷纷合合的际遇，分道扬镳后的甜蜜情绪。</text>
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
			<view class="btn">
				关注
			</view>
			<view class="btn">
				私聊
			</view>
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

				.releaseContent{
					height: 754rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					.back{
						width: 294rpx;
							height: 224rpx;
					}
				}
			}

		
		}

	
	.footerCon{
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #1d1e1f;
		padding-bottom: 30rpx;
		.btn{
			width: 280rpx;
				height: 64rpx;
				background-color: #2cffb0;
				border-radius: 40rpx;
				font-size: 28rpx;
					color: #ffffff;
					text-align: center;
					line-height: 64rpx;
		}
	}
	}
</style>
