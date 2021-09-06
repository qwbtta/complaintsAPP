<template>
	<view class="my">
		<view class="main">
			<view class="headCard">
				<view class="nameCon u-flex">
					<text class="nickName">这是昵称</text>
					<view class="btn">
						<image src="/static/editName.png" mode="" class="editIcon"></image>
						<text class="editText">编辑</text>
					</view>
				</view>
				<view class="idCon u-flex">
					<text>ID：1456874354</text>
					<image src="/static/idCopy.png" mode="" class="copyIcon"></image>
				</view>
				<image src="/static/male.png" mode="" class="gender"></image>

				<view class="relationship">
					<text class="type">粉丝<text class="num">15</text></text>
					<text class="type">关注<text class="num">50</text></text>
				</view>

				<image src="/static/changeAvatar.png" mode="" class="headIcon"></image>



			</view>
			
			<view class="itemCon">
				<view class="item">
					<view class="itemLeft">
						<image src="/static/item1.png" mode="" class="itemIcon"></image>
						<text class="itemDes">我的信息</text>
					</view>
					<image src="/static/arrow.png" mode="" class="arrow"></image>
				</view>
				<view class="item">
					<view class="itemLeft">
						<image src="/static/item2.png" mode="" class="itemIcon"></image>
						<text class="itemDes">我发布的</text>
					</view>
					<image src="/static/arrow.png" mode="" class="arrow"></image>
				</view>
				<view class="item">
					<view class="itemLeft">
						<image src="/static/item3.png" mode="" class="itemIcon"></image>
						<text class="itemDes">我的话题</text>
					</view>
					<image src="/static/arrow.png" mode="" class="arrow"></image>
				</view>
				<view class="item">
					<view class="itemLeft">
						<image src="/static/item4.png" mode="" class="itemIcon"></image>
						<text class="itemDes">关注话题</text>
					</view>
					<image src="/static/arrow.png" mode="" class="arrow"></image>
				</view>
				<view class="item" @click="goSysSet">
					<view class="itemLeft">
						<image src="/static/item5.png" mode="" class="itemIcon"></image>
						<text class="itemDes">系统设置</text>
					</view>
					<image src="/static/arrow.png" mode="" class="arrow"></image>
				</view>
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
			goSysSet(){
				uni.navigateTo({
					url:'./systemSettings'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my {
		background-image: url(../../static/myBack.png);
		background-size: 100% 484rpx;
		padding-top: 260rpx;
		.main {
			padding-top: 40rpx;
			height: 1110rpx;
			background-color: #1d1e1f;
			border-top-right-radius: 40rpx;
			border-top-left-radius: 40rpx;
			position: relative;
			.headCard {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding-left: 58rpx;
				
				.nameCon {
					.nickName {
						font-size: 40rpx;
						color: #ffffff;
					}

					.btn {
						width: 92rpx;
						height: 40rpx;
						background-color: #3ace97;
						border-radius: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: 26rpx;

						.editIcon {
							width: 18rpx;
							height: 16rpx;
						}

						.editText {
							font-size: 20rpx;
							color: #ffffff;
							margin-left: 6rpx;
						}
					}
				}

				.idCon {
					font-size: 28rpx;
					color: #ffffff;
					margin-top: 8rpx;

					.copyIcon {
						width: 24rpx;
						height: 26rpx;
						margin-left: 10rpx;
					}
				}

				.gender {
					width: 28rpx;
					height: 28rpx;
					margin-top: 20rpx;
				}

				.relationship {
					display: flex;
					align-items: center;
					margin-top: 20rpx;
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

				.headIcon {
					width: 200rpx;
					height: 200rpx;
					border-radius: 200rpx;
					border: solid 4rpx #2cffb0;
					position: absolute;
					top: -34rpx;
					right: 80rpx;
				}

			}
			
			.itemCon{
				padding: 0 36rpx;
				margin-top: 76rpx;
				.item{
					// height: 124rpx;
					margin-bottom: 80rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.itemLeft{
						display: flex;
						align-items: center;
						.itemIcon{
							width: 38rpx;
								height: 38rpx;
						}
						.itemDes{
							font-size: 32rpx;
								color: #ffffff;
								margin-left: 32rpx;
						}
					}
				
					.arrow{
						width: 14rpx;
							height: 24rpx;
					}
				}
			}
			
			
		}
	}
</style>
