<template>
	<view class="createTopic">
		<view class="imgCon" @click="chooseImg" v-if="topicImgUrl.length==0">
			<view class="">
				<image src="/static/cameraX.png" mode="" class="camera"></image>
			</view>
			<view class="upload">
				上传照片
			</view>
		</view>

		<view class="topicImgCon" @click="chooseImg" v-else>
			<image :src="topicImgUrl" mode="" class="topicImg"></image>
		</view>
		<text class="title">话题Tag：</text>
		<view class="inputCon">
			<input type="text" value="" maxlength="10" placeholder-style="color:#999999" placeholder="请填写话题名称"
				class="tagInput" v-model="tag" />
			<text class="tagNunber"> {{tag.length + "/10"}} </text>
		</view>

		<text class="title">话题简介：</text>
		<view class="inputCon">
			<textarea maxlength="150" placeholder-style="color:#999999" placeholder="可以让更多人发现你哟～" class="briefInput"
				v-model="brief" />
			<text class="briefNunber"> {{brief.length + "/150"}} </text>
		</view>

		<view class="btn">
			<image src="/static/create.png" mode="" class="createIcon"></image>
			<text>创建话题</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tag: "",
				brief: "",
				topicImgUrl: ""
			}
		},
		methods: {
			chooseImg() {
				let _this = this
				uni.chooseImage({
					count: 1,
					sourceType: ['album','camera'],
					success(res) {
						_this.topicImgUrl = res.tempFilePaths[0]

					},
					fail(err) {
						console.log('err ==>', err);
					}
				});
			}
		}
	}
</script>
<style>
	page {
		height: 100%;
		background-color: #111111;
	}
</style>

<style lang="scss" scoped>
	.createTopic {
		padding: 76rpx;

		.title {
			font-size: 32rpx;
			color: #ffffff;
		}

		.inputCon {
			position: relative;

		}

		.tagNunber {
			position: absolute;
			right: 28rpx;
			bottom: 10rpx;
			color: #999999;
		}

		.briefNunber {
			position: absolute;
			right: 30rpx;
			bottom: 30rpx;
			color: #999999;
		}

		.topicImgCon {
			width: 208rpx;
			height: 208rpx;
			border-radius: 208rpx;
			border: solid 2rpx #ffffff;
			margin: 100rpx auto;

			.topicImg {
				width: 100%;
				height: 100%;
				border-radius: 208rpx;
			}
		}

		.imgCon {
			width: 208rpx;
			height: 208rpx;
			border-radius: 20rpx;
			background-color: #444444;
			position: relative;
			margin: 100rpx auto;

			.camera {
				width: 48rpx;
				height: 38rpx;
				margin-top: 60rpx;
				margin-left: 80rpx;
			}

			.upload {
				width: 100%;
				height: 56rpx;
				background-color: #666666;
				z-index: 10;
				position: absolute;
				bottom: 0;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				font-size: 24rpx;
				color: #cccccc;
				line-height: 56rpx;
				text-align: center;
			}

		}

		.tagInput {
			height: 60rpx;
			background-color: #444444;
			border-radius: 80rpx;
			padding: 0 30rpx;
			font-size: 28rpx;
			margin-top: 40rpx;
			margin-bottom: 60rpx;
			color: #999999;
		}

		.briefInput {
			width: 92%;
			height: 440rpx;
			background-color: #444444;
			border-radius: 30rpx;
			font-size: 28rpx;
			padding: 30rpx;
			margin-top: 40rpx;
			color: #999999;
		}

		.btn {
			width: 288rpx;
			height: 72rpx;
			background-color: #2cffb0;
			box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(44, 255, 176, 0.3);
			border-radius: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;
			color: #ffffff;
			margin: 0 auto;
			margin-top: 88rpx;
			.createIcon {
				width: 40rpx;
				height: 40rpx;
				margin-right: 12rpx;
			}
		}

	}
</style>
