<template>
	<view class="square">

		<view class="tabCon">

			<view class="middle">
				<view :class="index==selectedIndex?'headItem-s':'headItem'" v-for="(item,index) in tabs" :key="index"
					@click="select(index)">
					<text>{{item}}</text>
					<view class="" class="tips" v-if="index==selectedIndex">

					</view>
				</view>
			</view>

		</view>

		<view class="searchCon" v-show="selectedIndex==1">
			<image src="/static/searchX.png" mode="" class="searchIcon"></image>
			<input type="text" value="" class="searchInput" placeholder="搜索新鲜事" v-model="searchVal" @confirm="search" />
		</view>

		<scroll-view scroll-x="true" class="scrollHead" v-show="selectedIndex!=2">
			<view class="headTopicCon">
				<view class="headTopicItem" v-for="item in [1,1,1,1,1,1,1,1]"  @click="goTopicHome">
					<view class="imgCon">
						<image src="/static/edit.png" mode="" class="headTopicImg"></image>
						<view class="mark">
							#
						</view>
					</view>
					<view class="">
						<text class="headTopicName">话题</text>
					</view>

				</view>
			</view>
		</scroll-view>
		<view class="lookMore" v-show="selectedIndex!=2">
			<view class="u-flex">
				<text>查看更多话题</text>
				<image src="/static/arrow.png" mode="" class="arrow"></image>
			</view>

		</view>


		<scroll-view scroll-y="true" :style="{height:scrollHeight+'px'}">
			<ComplaintsList/>
			
		</scroll-view>

		<view class="goRelease" @click="goRelease">
			<image src="/static/release.png" mode="" class="release"></image>
		</view>






		<!-- <button type="default" @click="goTopic">去话题</button>
		<button type="default" @click="goHome">去home</button>
		<button type="default" @click="goLogin">去登录</button> -->
	</view>
</template>

<script>
	import ComplaintsList from '../../components/ComplaintsList.vue'
	export default {
		components:{
			ComplaintsList
		},
		data() {
			return {
				tabs: ["关注", "推荐", "最新"],
				selectedIndex: 1,
				searchVal: "",
				scrollHeight: 0,
				
			}
		},
		methods: {
			select(index) {
				this.selectedIndex = index
				switch(index){
					case 0:
					this.scrollHeight = uni.getSystemInfoSync().safeArea.height - 210
					break;
					case 1:
					this.scrollHeight = uni.getSystemInfoSync().safeArea.height - 260
					break;
					case 2:
					this.scrollHeight = uni.getSystemInfoSync().safeArea.height - 44
					break;
				}
			},
			goTopic() {
				uni.navigateTo({
					url: '../topic/topic'
				})
			},
			goHome() {
				uni.navigateTo({
					url: '../conversation/home'
				})
			},
			goLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			search() {

			},
			getScreen() {
				this.scrollHeight = uni.getSystemInfoSync().safeArea.height - 260
			},
			goRelease() {
				uni.navigateTo({
					url: './release'
				})
			},
			goTopicHome(){
				uni.navigateTo({
					url:'../topic/topicHome'
				})
			}
		},
		onLoad() {
			this.getScreen()
		}
	}
</script>

<style lang="scss" scoped>
	.square {
		.tabCon {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 88rpx;
			background-color: #111111;
			position: relative;

			.middle {
				display: flex;
				align-items: center;
				margin-left: 60rpx;

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


		}

		.searchCon {
			height: 102rpx;
			background-color: #111111;
			display: flex;
			align-items: flex-end;
			position: relative;
			padding: 0 36rpx;

			.searchIcon {
				width: 30rpx;
				height: 30rpx;
				position: absolute;
				top: 48rpx;
				left: 66rpx;
			}

			.searchInput {
				width: 100%;
				height: 76rpx;
				background-color: #444444;
				border-radius: 80rpx;
				font-size: 28rpx;
				color: #999999;
				padding-left: 70rpx;
				padding-right: 20rpx;
			}

		}

		.scrollHead {
			background-color: #111111;

			.headTopicCon {
				height: 294rpx;
				display: flex;
				// justify-content: flex-start;
				align-items: center;
				padding-left: 36rpx;

				.headTopicItem {
					display: flex;
					flex-direction: column;
					align-items: center;

					.imgCon {
						width: 136rpx;
						height: 136rpx;
						border-radius: 136rpx;
						border: solid 4rpx #2cffb0;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;
						margin-bottom: 10rpx;
						margin-right: 32rpx;

						.headTopicImg {
							width: 112rpx;
							height: 112rpx;
							border-radius: 112rpx;
						}

						.mark {
							width: 32rpx;
							height: 32rpx;
							border-radius: 32rpx;
							background-color: #2cffb0;
							border: solid 4rpx #18191a;
							font-size: 28rpx;
							color: #ffffff;
							text-align: center;
							line-height: 32rpx;
							position: absolute;
							bottom: 0;
							right: 6rpx;
						}
					}

					.headTopicName {
						margin-top: 10rpx;
						width: 136rpx;
						font-size: 24rpx;
						color: #ffffff;
						word-break: break-all;
						text-align: center;
					}



				}
			}

		}

		.lookMore {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			font-size: 24rpx;
			color: #666666;
			height: 74rpx;
			background-color: #111111;

			.arrow {
				width: 12rpx;
				height: 22rpx;
				margin-left: 10rpx;
			}
		}




		.goRelease {
			position: absolute;
			right: 60rpx;
			bottom: 60rpx;
			width: 104rpx;
			height: 104rpx;
			border-radius: 104rpx;
			background-image: linear-gradient(235deg,
					#2cffb0 0%,
					#00bf77 100%);
			box-shadow: 0rpx 6rpx 12rpx 0rpx rgba(44, 255, 176, 0.2);
			display: flex;
			align-items: center;
			justify-content: center;

			.release {
				width: 70rpx;
				height: 50rpx;
			}
		}

	}
</style>
