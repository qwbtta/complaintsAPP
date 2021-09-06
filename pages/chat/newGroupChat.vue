<template>
	<view class="newGroupChat">


		<scroll-view scroll-x="true" class="scrollHead">
			<view class="searchCon">
				<view class="iconCon">
					<image :src="item.icon" mode="" v-for="(item,index) in checkedList" :key="index" class="headIcon">
					</image>
					<image src="/static/searchX.png" mode="" class="searchIcon" v-if="checkedList.length==0"></image>
				</view>
				<input type="text" value="" placeholder="搜索" class="searchInput" />
			</view>
		</scroll-view>




		<view class="secretCon" @click="goNewSecret">
			密码建群
		</view>
		<view class="block">

		</view>
		<view class="main">

			<view class="item" v-for="(item, index) in list" :key="index">


				<u-checkbox @change="checkboxChange" v-model="item.checked" shape="circle" size="44" icon-size="32"
					active-color="#2CFFB0">
				</u-checkbox>

				<view class="itemMain" @click="check(item)">
					<image :src="item.icon" mode="" class="headIcon"></image>
					<view class="right">
						{{item.name}}
					</view>
				</view>
			</view>

		</view>


		<view class="footer">
			<view class="btn" @click.once="newGroup">
				创建{{checkedList.length>0?'('+checkedList.length+')':''}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkedList: [],
				list: [{
					checked: false,
					name: "xxx",
					icon: "/static/tab-home.png"
				}, {
					checked: false,
					name: "ccc",
					icon: "/static/tab-mailList-selected.png"
				}, {
					checked: false,
					name: "bbb",
					icon: "/static/cue.png"
				}]
			}
		},
		methods: {
			goNewSecret() {
				uni.navigateTo({
					url: './secretGroupChat'
				})				
			},
			checkboxChange() {
				setTimeout(() => {
					this.checkedList = this.list.filter(item => item.checked == true)
				}, 200)

			},
			check(item) {
				item.checked = !item.checked
				this.checkedList = this.list.filter(item => item.checked == true)
			},
			newGroup() {
				let groupInfo = {
					groupName:"未命名群聊",
					introduction:"未命名群聊",
					notification:"暂无公告",
					faceUrl:"https://echat-1302656840.cos.ap-chengdu.myqcloud.com/1625728198419_IMG20210622085412.jpg"
				}
				
				
				let memberList = []
				this.checkedList.map(item => memberList.push({
					uid: item.uid,
					setRole: 0
				}))
				console.log(memberList);


				this.$openSdk.createGroup(JSON.stringify(groupInfo), JSON.stringify(memberList), (data) => {
					if (data.msg) {
						this.$u.toast('创建成功')
						uni.navigateBack({
						    delta: 1
						});
					}
				})
			}

		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #1E1E1E;
	}
</style>

<style lang="scss" scoped>
	.newGroupChat {
		padding-bottom: 280rpx;

		.scrollHead {
			background-color: #191919;




			.searchCon {
				height: 140rpx;
				background-color: #191919;
				display: flex;
				align-items: center;

				.iconCon {
					height: 80rpx;
					display: flex;
					align-items: center;
					padding-left: 36rpx;
					background-color: #191919;

					.headIcon {
						width: 80rpx;
						height: 80rpx;
						border-radius: 80rpx;
						margin-right: 20rpx;
					}

					.searchIcon {
						width: 32rpx;
						height: 32rpx;
						margin-left: 20rpx;
					}
				}

				.searchInput {
					background-color: #191919;
					font-size: 32rpx;
					color: #999999;
					margin-left: 10rpx;
					width: 400rpx;
					display: block;
					flex-shrink: 0;
				}
			}
		}

		.secretCon {
			height: 124rpx;
			background-color: #191919;
			font-size: 32rpx;
			color: #ffffff;
			line-height: 124rpx;
			padding-left: 60rpx;
			border-top: solid 2rpx #2f2f2f;

		}

		.block {
			height: 48rpx;
			background-color: #111111;
		}

		.main {
			display: flex;
			flex-direction: column;

			.item {
				display: flex;
				align-items: center;
				padding-left: 36rpx;

				.itemMain {
					display: flex;
					align-items: center;
					width: 100%;
					margin-left: 10rpx;

					.headIcon {
						width: 80rpx;
						height: 80rpx;
						border-radius: 80rpx;
						margin-right: 20rpx;
						flex-shrink: 0;
					}

					.right {
						width: 100%;
						height: 120rpx;
						border-bottom: 2rpx solid #2f2f2f;
						line-height: 120rpx;
						font-size: 32rpx;
						color: #ffffff;
					}
				}
			}
		}



		.footer {
			position: fixed;
			// bottom: 90rpx;
			bottom: 0;
			width: 100%;
			height: 166rpx;
			background-color: red;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			background-color: #1E1E1E;

			.btn {
				width: 100rpx;
				height: 46rpx;
				background-color: #2cffb0;
				border-radius: 12rpx;
				font-size: 24rpx;
				color: #ffffff;
				margin-right: 36rpx;
				margin-top: -48rpx;
				line-height: 46rpx;
				text-align: center;

			}
		}


	}
</style>
