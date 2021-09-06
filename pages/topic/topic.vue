<template>
	<view class="topic">
		<view class="head">
			<view class="inputCon"  @click="goSearch">
				<view class="searchInput">
					
				</view>
				<view class="plaCon">
					<image src="/static/searchX.png" mode="" class="sIcon"></image>
					<text>搜索话题</text>
				</view>
			</view>
			
		</view>
		<view class="tabCon">
			<view :class="index==selectedIndex?'headItem-s':'headItem'" v-for="(item,index) in tabs" :key="index"
				@click="select(index)">
				<text>{{item}}</text>
				<view class="" class="tips" v-if="index==selectedIndex">

				</view>
			</view>
		</view>
		<view class="main">
			<view class="hotItem" v-for="(index,item) in [1,2,3,4,5]" :key="index" @click="goTopicHome">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: "",
				tabs: ["最热", "关注", "我的"],
				selectedIndex: 0,

			}
		},
		methods: {
			select(index) {
				this.selectedIndex = index

			},
			goSearch(){
				uni.navigateTo({
					url:'./searchTopic'
				})
				// uni.navigateTo({
				// 	url:'./createTopic'
				// })
			},
			goTopicHome(){
				uni.navigateTo({
					url:'./topicHome'
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #262626;
	}
</style>
<style lang="scss" scoped>
	.topic {
		.head {
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #111111;

		

			.inputCon {
				position: relative;
				margin: 0 60rpx;
				width: 100%;
				.searchInput {
					width: 100%;
					height: 60rpx;
					background-color: #444444;
					border-radius: 80rpx;
					text-align: center;
					font-size: 24rpx;
					color: #999999;
				}
				.plaCon {
					position: absolute;
					left: 40%;
					top: 16rpx;
					display: flex;
					align-items: center;
					font-size: 24rpx;
					color: #999999;

					.sIcon {
						width: 32rpx;
						height: 32rpx;
						margin-right: 10rpx;
					}
				}
			}

		}

		.tabCon {
			display: flex;
			align-items: center;
			height: 120rpx;
			padding-left: 36rpx;
			background-color: #111111;

			.headItem-s {
				font-size: 36rpx;
				color: #333333;
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #ffffff;
				margin-right: 60rpx;
			}

			.headItem {
				font-size: 28rpx;
				color: #ffffff;
				margin-right: 60rpx;
			}

			.tips {
				width: 40rpx;
				height: 8rpx;
				background-color: #2cffb0;
				border-radius: 20px;
				margin-top: 8rpx;
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
		}
	}
</style>
