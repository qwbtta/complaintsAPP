<template>
	<view class="postsDetails">
		<view class="mainContentCon">
			<view class="head">
				<view class="headLeft">
					<image :src="userInfo.avatar" mode="" class="complaintsImg" @click="goHome"></image>
					<view class="desCon">
						<text class="nickName">{{userInfo.nickname}}</text>
						<text class="time" v-if="JSON.stringify(article)!='{}'">{{article.createTime.slice(0,10)}}
							{{article.createTime.slice(11,16)}}</text>
					</view>
				</view>
				<view class="followed btn" v-if="isFollow" @click="unfollow">
					已关注
				</view>
				<view class="follow btn" v-else @click="follow">
					关注
				</view>

			</view>

			<text class="textContent">{{article.content}}</text>

			<view class="imgContent">
				<image :src="item" mode="aspectFill" class="threeImg" v-for="(item,index) in article.imgUrls"
					:key="index" @click="previewImage(index)"></image>
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
						<text class="itemTitle">{{article.likeNum}}</text>
					</view>
					<view class="footerItem">
						<image src="/static/topicComment.png" mode="" class="itemIcon"></image>
						<text class="itemTitle">{{article.commentNum}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="commentArea">
			<text class="commentTitle">所有评论(<text class="commentNum">{{article.commentNum}}</text>)</text>
			<view class="commentItem" v-for="item in [1,1,1,1]">
				<image src="/static/blockList.png" mode="" class="headIcon"></image>
				<view class="commentRight">
					<text class="nickName">这是昵称</text>
					<text class="commentContent">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</text>
					<view class="footerArea">
						<text class="time">2021-08-22 14:22</text>
						<view class="footerRight">
							<view class="footerItem">
								<image src="/static/liked.png" mode="" class="itemIcon"></image>
								<text class="itemTitle">11</text>
							</view>
							<view class="footerItem no2">
								<image src="/static/topicComment.png" mode="" class="itemIcon"></image>
								<text class="itemTitle">22</text>
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentNum: 11,
				userInfo: {},
				article: {},
				isFollow: false
			}
		},
		methods: {
			previewImage(index) {
				uni.previewImage({
					urls: [this.article.imgUrls[index]]
				});
			},
			getUserInfo() {

				this.$u.api.get_user_info_list({
						uidList: [this.article.fromUser],
						operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
					}).then(res => {
						console.log(res, "4444");
						this.userInfo = res.data.userInfoList[0]
						this.isFollow = false
						
							for (let i = 0; i < res.data.userInfoList[0].followerList.length; i++) {
								if (res.data.userInfoList[0].followerList[i] == this.vuex_uid) {
									this.isFollow = true
									break
								} 
							}
						

					})
					.catch(err => {
						console.log(err);
					})
			},
			goHome() {
				uni.navigateTo({
					url: '../my/otherHome?uid=' + this.userInfo.uid
				})
			},
			follow() {
				this.$u.api.follow({
						uid: this.userInfo.uid,
						operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
					}).then(res => {
						console.log(res, "00");
						this.getUserInfo()
					})
					.catch(err => {
						console.log(err, "1111");
					})
			},
			unfollow() {
				this.$u.api.unfollow({
						uid: this.userInfo.uid,
						operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
					}).then(res => {
						console.log(res, "00");
						this.getUserInfo()
					})
					.catch(err => {
						console.log(err, "1111");
					})
			}
		},
		onShow() {
			this.$u.api.get_article_list({
					articleIdList: ["1631001422549152454"],
					operationId: this.vuex_uid + JSON.stringify(new Date().getTime())
				}).then(res => {
					console.log(res);
					this.article = res.data[0]
					this.getUserInfo()
				})
				.catch(err => {
					console.log(err, "err");
				})
		}
	}
</script>

<style lang="scss" scoped>
	.postsDetails {
		.mainContentCon {
			padding: 30rpx 36rpx;
			background-color: #111111;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			.head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 30rpx;
				width: 100%;

				.headLeft {
					display: flex;
					align-items: center;

					.complaintsImg {
						width: 96rpx;
						height: 96rpx;
						border-radius: 96rpx;
					}

					.desCon {
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

				.follow {
					width: 100rpx;
					height: 46rpx;
					background-color: #2cffb0;
					border-radius: 12rpx;
					font-size: 24rpx;
					color: #ffffff;
					line-height: 46rpx;
					text-align: center;
				}

				.followed {
					width: 100rpx;
					height: 46rpx;
					background-color: rgba(255, 255, 255, 0.3);
					border-radius: 12rpx;
					font-size: 24rpx;
					color: #ffffff;
					line-height: 46rpx;
					text-align: center;
				}


			}

			.textContent {
				font-size: 28rpx;
				color: #ffffff;
			}

			.imgContent {
				margin: 30rpx 0;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.threeImg {
					width: 222rpx;
					height: 222rpx;
					border-radius: 20rpx;
					margin-right: 6rpx;
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
					width: 262rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}


		}

		.commentArea {
			margin-top: 20rpx;
			padding-top: 40rpx;
			background-color: #111111;
			padding-bottom: 300rpx;

			.commentTitle {
				font-size: 28rpx;
				color: #999999;
				margin-left: 36rpx;

				.commentNum {
					font-size: 28rpx;
					color: #2cffb0;
				}
			}

			.commentItem {
				display: flex;
				align-items: flex-start;
				margin-left: 36rpx;
				margin-top: 30rpx;

				.headIcon {
					width: 96rpx;
					height: 96rpx;
					border-radius: 96rpx;
					flex-shrink: 0;
					margin-right: 20rpx;
				}

				.commentRight {
					display: flex;
					flex-direction: column;

					.nickName {
						font-size: 28rpx;
						color: #dddddd;
					}

					.commentContent {
						font-size: 28rpx;
						color: #ffffff;
						margin: 16rpx 0;
						padding-right: 36rpx;
					}

					.footerArea {
						height: 70rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding-right: 36rpx;
						border-bottom: 2rpx solid #2f2f2f;

						.time {
							font-size: 24rpx;
							color: #999999;
						}

						.footerRight {
							display: flex;
							align-items: center;

							.footerItem {
								display: flex;
								align-items: center;

								.itemIcon {
									width: 32rpx;
									height: 32rpx;
								}

								.itemTitle {
									font-size: 24rpx;
									color: #999999;
									margin-left: 12rpx;
								}
							}

							.footerItem:nth-of-type(2) {
								margin-left: 40rpx;
							}

							// .no2{
							// 	margin-left: 40rpx;
							// }
						}
					}
				}
			}
		}
	}
</style>
