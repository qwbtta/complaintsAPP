<template>
	<view class="search">
		<u-navbar title="" :background="background" :title-size="34" title-color="#ffffff" back-icon-color="#ffffff"
			:border-bottom="false">
			<view class="slot-wrap">
				<view class="middle">
					<view :class="index==selectedIndex?'headItem-s':'headItem'" v-for="(item,index) in tabs"
						:key="index" @click="select(index)">
						<text>{{item}}</text>
						<view class="" class="tips" v-if="index==selectedIndex">
						</view>
					</view>
				</view>
			</view>
		</u-navbar>

		<view class="people" v-show="selectedIndex==0">
			<view class="searchCon">
				<image src="/static/searchX.png" mode="" class="searchIcon"></image>
				<input type="text" value="" class="searchInput" placeholder="搜索好友ID/账号" v-model="searchPeople"
					@confirm="search" />
			</view>
			<view class="hotItem" v-for="(index,item) in [1,2,3,4,5]" :key="index">
				<image src="/static/edit.png" mode="" class="headIcon"></image>
				<view class="right">
					<view class="describe">
						<text class="title">真心话</text>
						<text class="des">请问请问群二群群二群翁群</text>
					</view>
					<view class="follow btn">
						加入
					</view>
					<!-- <view class="followed btn">
						已关注
					</view> -->
				</view>
			</view>
			<!-- <view class="backCon">
				<image src="/static/default.png" mode="" class="backImg"></image>
				<text class="backDes">发现更多趣事～</text>
			</view>
			<view class="backCon">
				<image src="/static/none.png" mode="" class="backImg"></image>
				<text class="backDes">暂无搜索结果</text>
			</view> -->
		</view>
		<view class="people" v-show="selectedIndex==1">
			<view class="searchCon">
				<image src="/static/searchX.png" mode="" class="searchIcon"></image>
				<input type="text" value="" class="searchInput" placeholder="搜索群号/群名称" v-model="searchGroup"
					@confirm="search" />
			</view>
			<view class="backCon">
				<image src="/static/default.png" mode="" class="backImg"></image>
				<text class="backDes">发现更多趣事～</text>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#111111'
				},
				tabs: ["找人", "找群"],
				selectedIndex: 0,
				searchPeople: "",
				searchGroup:""
			}
		},
		methods: {
			select(index) {
				this.selectedIndex = index

			},
			search() {
				console.log("ddddddddddddddddddddddd");
			}
		}
	}
</script>


<style lang="scss" scoped>
	.search {
		
		.middle {
			display: flex;
			align-items: center;
			margin-left: 86%;
			width: 100%;

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

		.people {
			.searchCon {
				height: 60rpx;
				background-color: #191919;
				padding: 0 78rpx;
				display: flex;
				align-items: center;
				position: relative;
				margin: 40rpx 0;
				.searchIcon {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
					top: 16rpx;
					left: 108rpx;
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

			}
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
						background-color: #2cffb0;
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
				margin-top: 304rpx;
				display: flex;
				flex-direction: column;
				align-items: center;


				.backImg {
					width: 368rpx;
					height: 312rpx;

				}

				.backDes {
					font-size: 36rpx;
					color: #999999;
					margin-top: 60rpx;
				}
			}
		}

	}
</style>
