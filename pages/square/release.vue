<template>
	<view class="release">
		<u-navbar title="发布情绪" :background="background" :title-size="34" title-color="#ffffff" back-icon-color="#ffffff"
			:border-bottom="false">
			<view class="slot-wrap" slot="right">
				<view class="btn" @click="release">
					发布
				</view>
			</view>
		</u-navbar>
		<view class="richTextArea">
			<textarea maxlength="270" placeholder-style="color:#999999" placeholder="表达一下你的小情绪吧～" class="mainInput"
				v-model="mainInput" />
			<view class="photoCon">
				<view class="photoItem" v-for="(item,index) in photoList" :key="index">
					<image :src="item" mode="aspectFill" class="photo"></image>
					<image src="/static/clear.png" mode="" class="clear" @click="clearImg(index)"></image>
				</view>
				<view class="imgCon" @click="chooseImg" v-if="photoList.length<9">
					<view class="">
						<image src="/static/cameraX.png" mode="" class="camera"></image>
					</view>
					<view class="upload">
						上传照片
					</view>
				</view>

			</view>




			<view class="spanCon">
				<view class="topicSpan">
					<view class="mark">
						#
					</view>
					<text class="spanName">话题名字名字</text>
					<image src="/static/greenArrow.png" mode="" class="greenArrow"></image>
				</view>
			</view>
		</view>

		<view class="selectArea">
			<view class="selectItem">
				<view class="selectLeft">
					<image src="/static/blockList.png" mode="" class="selectIcon"></image>
					<text class="selectTitle">单身狗日常</text>
				</view>
				<u-switch v-model="checked" active-color="#2cffb0" inactive-color="#2E2E2E" size="44"></u-switch>
			</view>
			<view class="selectItem">
				<view class="selectLeft">
					<image src="/static/anonymous.png" mode="" class="selectIcon"></image>
					<text class="selectTitle">匿名</text>
				</view>
				<u-switch v-model="anonymous" active-color="#2cffb0" inactive-color="#2E2E2E" size="44"></u-switch>
			</view>
			<text class="tips">注意：匿名仅用于正向反馈，或者说点不好意思的话、轻松一下，请文明表达。</text>
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
				mainInput: "",
				checked: false,
				photoList: ["https://earth-angel-1302656840.cos.ap-chengdu.myqcloud.com/QB8q6tZhThk05e340e0a7046b7b8ed46a72d25bd3423.png",
					"https://earth-angel-1302656840.cos.ap-chengdu.myqcloud.com/n3kiy2q2A3Pzb69530f2d111adf64fbe4e60edd54687.png",
					"https://earth-angel-1302656840.cos.ap-chengdu.myqcloud.com/L5XXRyuBpAvYbeb399a5c090f0207126cb04b2d91a51.png",
					"https://earth-angel-1302656840.cos.ap-chengdu.myqcloud.com/3mRKH5iBId5485298324f016f17874732e5bfae9941e.png"],
				anonymous: false
			}
		},
		methods: {
			release() {
				this.$u.api.release_article({
					content: this.mainInput,
					anonymity: this.anonymous == true ? "1" : "0",
					imgUrls:this.photoList,
					operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
				}).then(res => {
					console.log(res);
				})
			},
			chooseImg() {
				let _this = this
				uni.chooseImage({
					count: 9,
					sourceType: ['album', 'camera'],
					success(res) {
						res.tempFilePaths.forEach(item => {
							_this.photoList.push(item);
						});

					},
					fail(err) {
						console.log('err ==>', err);
					}
				});
			},
			clearImg(index) {
				this.photoList.splice(index, 1)
			},

		}
	}
</script>

<style lang="scss" scoped>
	.release {
		padding: 25rpx 20rpx;

		.btn {
			width: 100rpx;
			height: 46rpx;
			background-color: #2cffb0;
			border-radius: 12rpx;
			font-size: 24rpx;
			line-height: 46rpx;
			color: #ffffff;
			text-align: center;
			margin-right: 36rpx;
		}

		.richTextArea {
			background-color: #222222;
			border-radius: 15px;
			padding: 18rpx;

			.mainInput {
				width: 100%;
				height: 440rpx;
				background-color: #222222;
				font-size: 28rpx;
				color: #999999;
			}

			.photoCon {
				display: flex;
				flex-wrap: wrap;
				margin-bottom: 40rpx;

				.photoItem {
					width: 198rpx;
					height: 198rpx;
					border-radius: 20rpx;
					margin-right: 6rpx;
					margin-bottom: 6rpx;
					position: relative;

					.photo {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}

					.clear {
						width: 36rpx;
						height: 36rpx;
						position: absolute;
						top: 14rpx;
						right: 14rpx;
					}

				}


			}



			.imgCon {
				width: 198rpx;
				height: 198rpx;
				border-radius: 20rpx;
				background-color: #444444;
				position: relative;

				.camera {
					width: 48rpx;
					height: 38rpx;
					margin-top: 56rpx;
					margin-left: 74rpx;
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

			.spanCon {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				margin-top: 15rpx;

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
						display: flex;
						align-items: center;
						justify-content: center;

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
			}
		}

		.selectArea {
			background-color: #222222;
			border-radius: 30rpx;
			margin: 30rpx 0;
			padding: 40rpx 30rpx;

			.selectItem {
				width: 100%;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 40rpx;

				.selectLeft {
					display: flex;
					align-items: center;

					.selectIcon {
						width: 80rpx;
						height: 80rpx;
						border-radius: 80rpx;
					}

					.selectTitle {
						font-size: 32rpx;
						color: #ffffff;
						margin-left: 20rpx;
					}
				}
			}

			.tips {
				font-size: 24rpx;
				color: #2cffb0;
			}
		}
	}
</style>
