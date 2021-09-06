<template>
	<view class="complaintsList">
		<view class="complaintsItem" v-for="item in [1,1,1,1,1,1]" @click="goDetails">
			<view class="complaintsHead">
				<image src="/static/blockList.png" mode="" class="complaintsImg"></image>
				<view class="headRight">
					<text class="nickName">昵称昵称</text>
					<text class="time">2020-10-10 12:20</text>
				</view>
			</view>
			<u-read-more :shadow-style="shadowStyle" show-height="162" :toggle="true">
				<rich-text :nodes="content"></rich-text>
			</u-read-more>
			<view class="releaseImgCon">
				<image src="/static/none.png" mode="" class="oneImg"></image>
			</view>
	
			<view class="topicSpan">
				<view class="mark">
					#
				</view>
				<text class="spanName">话题名字名字</text>
				<image src="/static/greenArrow.png" mode="" class="greenArrow"></image>
			</view>
			<view class="footerArea">
				<view class="footerItem">
					<image src="/static/share.png" mode="" class="itemIcon"></image>
					<text class="itemTitle">分享</text>
				</view>
				<view class="footerRight">
					<view class="footerItem">
						<image src="/static/liked.png" mode="" class="itemIcon"></image>
						<text class="itemTitle">11</text>
					</view>
					<view class="footerItem">
						<image src="/static/topicComment.png" mode="" class="itemIcon"></image>
						<text class="itemTitle">22</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "30rpx",
					marginTop: "0"
				},
				content: "年后好idsahi都那是和快乐就好胜利大街撒靠捡垃圾海神九考大豪科技回单卡就是后端框架桉树肯德基撒很快就打卡机丹化科技撒谎的矿机撒谎肯德基撒娇肯定会卡加斯丹化科技沙迪克静安寺好看的吉安市短时点击卡莎肯德基安徽的矿机爱仕达啊打",
			}
		},
		methods: {
			goDetails(){
				uni.navigateTo({
					url:"../topic/postsDetails"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.complaintsList {
		padding: 38rpx 36rpx 100rpx;
		background-color: #191919;
	
		.complaintsItem {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-bottom: 62rpx;
	
			.complaintsHead {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
	
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
	
			.releaseImgCon {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				margin: 30rpx 0;
				.oneImg {
					width: 500rpx;
					height: 500rpx;
					border-radius: 20rpx;
				}
			}
	
			.topicSpan {
				height: 52rpx;
				border-radius: 26rpx;
				border: solid 2rpx #2cffb0;
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				
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
				}
	
				.spanName {
					font-size: 24rpx;
					color: #2cffb0;
					margin: 0 10rpx;
				}
	
				.greenArrow {
					width: 12rpx;
					height: 22rpx;
				}
			}
	
			.footerArea {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 30rpx;
	
				.footerItem {
					display: flex;
					align-items: center;
	
					.itemIcon {
						width: 44rpx;
						height: 44rpx;
					}
	
					.itemTitle {
						font-size: 24rpx;
						color: #999999;
						margin-left: 10rpx;
					}
				}
	
				.footerRight {
					width: 270rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}
		}
	}
</style>
