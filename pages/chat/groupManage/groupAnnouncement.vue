<template>
	<view class="groupAnnouncement">
		<u-navbar title="群公告" :background="background" :title-size="34" title-color="#ffffff" back-icon-color="#ffffff"
			:border-bottom="false">
			<view class="slot-wrap" slot="right">
				<text class="release" @click="release">
					完成
				</text>
			</view>
		</u-navbar>
		<view class="main">
			<textarea maxlength="600" placeholder-style="color:#999999" placeholder="填写公告，1-600字" class="announcement"
				v-model="announcement" />
			<text class="announcementNunber"> {{announcement.length + "/600"}} </text>
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
				announcement: ""
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.groupAnnouncement {
		.release {
			font-size: 32rpx;
			color: #ffffff;
			margin-right: 36rpx;
		}

		.main {
			position: relative;

			margin-top: 34rpx;

			.announcement {
				width: 80%;
				height: 766rpx;
				background-color: #444444;
				border-radius: 30rpx;
				margin: 0 auto;
				padding: 30rpx;
				color: #FFFFFF;
			}

			.announcementNunber {
				position: absolute;
				right: 10%;
				bottom: 32rpx;
				font-size: 24rpx;
				color: #999999;
			}
		}
	}
</style>
