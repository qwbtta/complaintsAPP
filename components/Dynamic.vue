<template>
	<view class="dynamic">
		<view class="dynamic-item"  @click="goSysMsg('@我的')">
			<view class="blue">
				<image src="/static/cue.png" mode="" class="dynamic-icon"></image>
			</view>
			<view class="dynamic-func">
				<view class="describe">
					@我的
				</view>
				<view class="right">
					<view class="tipNum">
						1
					</view>
					<image src="/static/arrowX.png" mode="" class="arrow"></image>
				</view>
			</view>
		</view>
		<view class="dynamic-item" @click="goSysMsg('所有评论')">
			<view class="green">
				<image src="/static/comment.png" mode="" class="dynamic-icon"></image>
			</view>
			<view class="dynamic-func">
				<view class="describe">
					评论
				</view>
				<view class="right">
					<view class="tipNum">
						1
					</view>
					<image src="/static/arrowX.png" mode="" class="arrow"></image>
				</view>
			</view>
		</view>
		<view class="dynamic-item" @click="goSysMsg('赞')">
			<view class="yellow">
				<image src="/static/fabulous.png" mode="" class="dynamic-icon"></image>
			</view>
			<view class="dynamic-func">
				<view class="describe">
					赞
				</view>
				<view class="right">
					<view class="tipNum">
						1
					</view>
					<image src="/static/arrowX.png" mode="" class="arrow"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods: {
			goSysMsg(e){
				console.log(e)
				uni.navigateTo({
					url:'/pages/chat/systemMessage?type=' + e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-left: 36rpx;
		margin-right: 30rpx;
	}
	
	.dynamic-item {
		display: flex;
		align-items: center;
		.blue {
			@extend .back;
			background-color: #6ae8ff;
		}
		.green{
			@extend .back;
			background-color: #2cffb0;
		}
		.yellow{
			@extend .back;
			background-color: #ffdf2c;
		}
		.dynamic-icon {
			width: 66rpx;
			height: 66rpx;
		}
	
		.dynamic-func {
			width: 100%;
			height: 160rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 2rpx #2f2f2f;
			.describe {
				font-size: 32rpx;
				color: #ffffff;
			}
	
			.right {
				display: flex;
				align-items: center;
				margin-right: 36rpx;
				
				.tipNum {
					width: 34rpx;
					height: 34rpx;
					border-radius: 34rpx;
					background-color: #ff6060;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
					line-height: 34rpx;
					margin-right: 20rpx;
				}
	
				.arrow {
					width: 20rpx;
					height: 36rpx;
				}
			}
		}
	
	}
</style>
