<template>
	<view class="systemMessage">
		<u-navbar :title="title" :background="background" :title-size="34" title-color="#ffffff"
			back-icon-color="#ffffff" :border-bottom="false">

		</u-navbar>


		<view class="item" v-for="item in [1,1,1,1]">
			<view class="headInfo">
				<image src="/static/blockList.png" mode="" class="complaintsImg"></image>
				<view class="headRight">
					<text class="nickName">昵称昵称</text>
					<text class="time">2020-10-10 12:20</text>
				</view>
			</view>
			<!-- <view>
				<text class="userName">@这是昵称</text> <text class="content">这是发布的内容这是发布的内容这布的这是发布的内容这是发布的内容这是发布的</text>
			</view>  -->
			<view class="u-flex">
				<image src="/static/like.png" mode="" class="like"></image>
				<text class="content">赞了我</text>
			</view>
			<!-- <view>
				<text class="content">这是发布的内容这是发布的内容这布的这是发布的内容这是发布的内容这是发布的</text>
			</view> -->

			<view class="card">
				<image src="/static/default.png" mode="" class="complaintsImg"></image>
				<view class="cardRight">
					<text class="userName">@这是昵称</text>
					<text class="content">这是发布的内容这是发布的内容这是发布的这是发布的内容这是发发布的内容这是发发布的内容这是发布的内容这是发布的</text>
				</view>
			</view>


		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				background: {
					backgroundColor: '#111111'
				}
			}
		},
		methods: {

		},
		onLoad(options) {
			switch (options.type) {
				case "赞":
					this.title = "赞"
					break;
				case "@我的":
					this.title = "@我的"
					break;
				case "所有评论":
					this.title = "所有评论"
					break;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.systemMessage {
		padding-bottom: 200rpx;

		.item {
			padding: 30rpx 36rpx 20rpx;
			background-color: #111111;
			margin-bottom: 20rpx;

			.headInfo {
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;

				.complaintsImg {
					width: 96rpx;
					height: 96rpx;
					border-radius: 96rpx;
				}

				.headRight {
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;

					.nickName {
						font-size: 28rpx;
						color: #ffffff;
					}

					.time {
						font-size: 24rpx;
						color: #999999;
						margin-top: 4rpx;
					}
				}
			}

			.userName {
				font-size: 28rpx;
				color: #2cffb0;
				margin-right: 10rpx;
			}

			.content {
				font-size: 28rpx;
				color: #ffffff;
			}

			.like {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}

			.card {
				display: flex;
				margin-top: 20rpx;

				.complaintsImg {
					width: 160rpx;
					height: 160rpx;
					flex-shrink: 0;
				}

				.cardRight {
					padding: 20rpx;
					display: flex;
					flex-direction: column;
					background-color: #1d1e1f;

					.userName {
						font-size: 28rpx;
						color: #ffffff;
						margin-bottom: 12rpx;
					}

					.content {
						font-size: 24rpx;
						color: #999999;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
				}
			}
		}

	}
</style>
