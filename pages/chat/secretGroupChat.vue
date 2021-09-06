<template>
	<view class="secretGroupChat">
		<u-navbar title="密码建群" :background="background" :title-size="34" title-color="#ffffff" back-icon-color="#ffffff"
			:border-bottom="false">
			<view class="slot-wrap" slot="right">
				<view class="btn" @click="finish">
					完成
				</view>
			</view>
		</u-navbar>
		<view class="tips">
			<image src="/static/horn.png" mode="" class="tipsImg"></image>
			<text>注意：创建密码群聊后，好友需要输入密码才能进入群聊哦～</text>
		</view>
		<view class="main">
			<text class="title">请输入4位数密码创建群聊</text>
			<view class="passwordCon" @click="show = true">
				<view class="item">
					<view class="item-middle" v-show="value.length>0">

					</view>
				</view>
				<view class="item">
					<view class="item-middle" v-show="value.length>1">

					</view>
				</view>
				<view class="item">
					<view class="item-middle" v-show="value.length>2">

					</view>
				</view>
				<view class="item">
					<view class="item-middle" v-show="value.length>3">

					</view>
				</view>

			</view>
		</view>

		<u-keyboard ref="uKeyboard" mode="number" v-model="show" :mask="false" :dot-enabled="false" @change="valChange"
			@backspace="backspace">
		</u-keyboard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: true,
				background: {
					backgroundColor: '#111111'
				}
			}
		},
		methods: {
			valChange(val) {
				if (this.value.length < 4) {
					this.value += val;
					if (this.value.length == 4) {
						this.show = false
					}
				}

			},
			backspace() {
				// 删除value的最后一个字符
				if (this.value.length) this.value = this.value.substr(0, this.value.length - 1);

			},
			finish() {
				console.log(this.value);
				if (this.value.length < 4) {
					this.$u.toast("请输入4位数密码")
					return
				}
				let exString = JSON.stringify({
					isSecret: true,
					password: this.value
				})
				let groupInfo = {
					groupName: "未命名密聊",
					introduction: "未命名密聊",
					notification: "暂无公告",
					faceUrl: "https://echat-1302656840.cos.ap-chengdu.myqcloud.com/1625728198419_IMG20210622085412.jpg",

				}
				let memberList = []
				// ex: {
				// 	exString
				// }
				console.log(groupInfo);
				this.$openSdk.createGroup(JSON.stringify(groupInfo), JSON.stringify(memberList), (data) => {
					console.log(data);
					if (data.msg) {
						this.$u.toast('创建成功')
						uni.navigateBack({
							delta: 1
						});
					}
				})


			}
		},
		onShow() {
			console.log(this.vuex_uid);
			this.$openSdk.getJoinedGroupList(data=>{
				console.log(data,"datadatadata");
			})
		}
	}
</script>

<style lang="scss" scoped>
	.secretGroupChat {
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

		.tips {
			height: 60rpx;
			background-color: #585858;
			font-size: 24rpx;
			color: #2cffb0;
			display: flex;
			align-items: center;

			.tipsImg {
				width: 28rpx;
				height: 22rpx;
				margin: 0 6rpx 0 32rpx;
			}
		}

		.main {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 80rpx;

			.title {
				font-size: 32rpx;
				color: #ffffff;
			}

			.passwordCon {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 320rpx;
				margin-top: 74rpx;

				.item {
					width: 40rpx;
					height: 40rpx;
					border-radius: 40rpx;
					border: solid 2rpx #999999;
					display: flex;
					align-items: center;
					justify-content: center;

					.item-middle {
						width: 20rpx;
						height: 20rpx;
						border-radius: 20rpx;
						background-color: #2cffb0;
					}
				}
			}
		}
	}
</style>
