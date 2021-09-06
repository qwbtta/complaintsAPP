<template>
	<view class="searchTopic">
		<view class="searchCon">
			<image src="/static/searchX.png" mode="" class="searchIcon"></image>
			<input type="text" value="" class="searchInput" placeholder="搜索话题" v-model="searchVal" @confirm="search" />
			<text class="cancel" @click="cancel">取消</text>
		</view>
		<view class="main">
			<view class="hotItem" v-for="(index,item) in [1,2,3,4,5]" :key="index">
				<image src="/static/edit.png" mode="" class="headIcon"></image>
				<view class="right">
					<view class="describe">
						<text class="title">真心话</text>
						<text class="des">请问请问群二群群二群翁群</text>
					</view>
					<view class="follow">
						关注
					</view>
					<!-- <view class="followed">
						已关注
					</view> -->
				</view>
			</view>
			<!-- <view class="backCon">
				<image src="/static/default.png" mode="" class="backImg"></image>
				<text class="backDes">发现更多趣事～</text>
			</view> -->
			<!-- <view class="backCon">
				<image src="/static/none.png" mode="" class="backImg"></image>
				<text class="backDes">暂无搜索结果</text>
			</view> -->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: ""
			}
		},
		methods: {
			cancel() {
				this.searchVal = ""
			},
			search(){
				console.log("ddddddddddddddddddddddd");
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #18191A;
	}
</style>
<style lang="scss" scoped>
	.searchTopic {
		.searchCon {
			height: 100rpx;
			background-color: #111111;
			padding: 0 36rpx;
			display: flex;
			align-items: center;
			position: relative;

			.searchIcon {
				width: 30rpx;
				height: 30rpx;
				position: absolute;
				top: 34rpx;
				left: 66rpx;
			}

			.searchInput {
				width: 100%;
				height: 60rpx;
				background-color: #444444;
				border-radius: 80rpx;
				font-size: 28rpx;
				color: #999999;
				padding-left: 70rpx;
				padding-right: 20rpx;
			}

			.cancel {
				font-size: 32rpx;
				color: #ffffff;
				margin-left: 20rpx;
				flex-shrink: 0;
			}
		}

		.main {
			.hotItem {
				height: 180rpx;
				display: flex;
				align-items: center;
			
				.headIcon {
					width: 120rpx;
					height: 120rpx;
					border-radius: 120rpx;
					margin: 0 36rpx;
					flex-shrink: 0;
				}
			
				.right {
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: solid 2rpx #2f2f2f;
					height: 180rpx;
					width: 100%;
					.describe {
						display: flex;
						flex-direction: column;
			
						.title {
							font-size: 32rpx;
							color: #ffffff;
						}
			
						.des {
							font-size: 24rpx;
							color: #ffffff;
							margin-top: 30rpx;
						}
					}
			
					.follow {
						width: 100rpx;
						height: 46rpx;
						border-radius: 12rpx;
						border: solid 2rpx #ffffff;
						font-size: 24rpx;
						line-height: 46rpx;
						color: #ffffff;
						text-align: center;
						margin-right: 36rpx;
					}
					.followed {
						width: 100rpx;
						height: 46rpx;
						border-radius: 12rpx;
						background-color: rgba(255, 255, 255, 0.3);
						font-size: 24rpx;
						line-height: 46rpx;
						color: #ffffff;
						text-align: center;
						margin-right: 36rpx;
					}
				}
			}
			.backCon {
				margin: 0 auto;
				margin-top: 400rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				

				.backImg {
					width: 368rpx;
					height: 312rpx;

				}
				.backDes{
					font-size: 36rpx;
					color: #999999;
					margin-top: 60rpx;
				}
			}

		}
	}
</style>
