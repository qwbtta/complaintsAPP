<template>
	<view class="topicHome">
		<image src="/static/leftArrow.png" mode="" class="leftArrow" @click="goBack"></image>
		<view class="topicHead">
			<view class="headTop">
				<image src="/static/changeAvatar.png" mode="" class="topicIcon"></image>
				<view class="headRight">
					<view class="infoCon">
						<text class="topicName">失恋博物馆</text>
						<text class="followedNum">{{followedNum}}人关注</text>
					</view>
					<view class="btn">
						关注
					</view>
				</view>

			</view>

			<text class="topicDes">一起失去一段爱情。一个放弃，一个被放弃。与其让曾经的爱
				情信物在某个角落里变阴霾，不如拿出来和大家分享。这里珍
				藏纷纷合合的际遇，分道扬镳后的甜蜜情绪。</text>




		</view>


		<view class="main">
			<ComplaintsList />
		</view>
	</view>
</template>

<script>
	import ComplaintsList from '../../components/ComplaintsList.vue'
	export default {
		components: {
			ComplaintsList
		},
		data() {
			return {
				followedNum: 1110
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topicHome {
		background-image: url(../../static/topicBack.png);
		background-size: 100% 562rpx;

		.leftArrow {
			width: 20rpx;
			height: 36rpx;
			margin-left: 34rpx;
			margin-top: 50rpx;
		}

		.topicHead {
			padding: 0 40rpx;
			margin-top: 66rpx;

			.headTop {
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;

				.topicIcon {
					width: 164rpx;
					height: 164rpx;
					border-radius: 164rpx;
					border: solid 4rpx #2cffb0;
					flex-shrink: 0;
				}

				.headRight {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					margin-left: 30rpx;

					.infoCon {
						display: flex;
						flex-direction: column;

						.topicName {
							font-size: 40rpx;
							color: #ffffff;
						}

						.followedNum {
							font-size: 24rpx;
							color: #ffffff;
							margin-top: 10rpx;
						}
					}

					.btn {
						width: 100rpx;
						height: 46rpx;
						background-color: #2cffb0;
						border-radius: 12rpx;
						font-size: 24rpx;
						color: #ffffff;
						text-align: center;
						line-height: 46rpx;
					}
				}
			}



			.topicDes {
				font-size: 24rpx;
				color: #ffffff;
			}


		}

		.main {
			border-top-right-radius: 40rpx;
			border-top-left-radius: 40rpx;
			padding-top: 40rpx;
			margin-top: 40rpx;
			background-color: #18191a;
		}

  

	}
</style>
