<template>
	<view class="chat">
		<view class="tabCon">

			<view class="middle">
				<view :class="index==selectedIndex?'headItem-s':'headItem'" v-for="(item,index) in tabs" :key="index"
					@click="select(index)">
					<text>{{item}}</text>
					<view class="" class="tips" v-if="index==selectedIndex">

					</view>
				</view>
			</view>

			<image src="/static/add.png" mode="" class="addIcon" @click="addMore=!addMore"></image>
		</view>



		<Dynamic v-show="selectedIndex==0" />

		<view class="main" v-show="selectedIndex==1">
			<view class="chatList">
				<u-empty v-if="sessionList.length===0" class="empty" text="There is no conversation" mode="message"/>
				<ConversationIist v-else :sessionList="sessionList" />
			</view>
		</view>









		<view class="my-menuCon" v-show="addMore">
			<view class="operationsMenu">
				<view class="operationsMenu-item" @click="goNew">
					<image src="/static/newGourp.png" mode="" class="itemImg"></image>
					<view class="function">
						发起群聊
					</view>
				</view>
				<view class="operationsMenu-item"  @click="goSearch">
					<image src="/static/searchXX.png" mode="" class="itemImg"></image>
					<view class="functionR">
						搜一搜
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Dynamic from '../../components/Dynamic.vue'
	export default {
		components:{
			Dynamic
		},
		data() {
			return {
				tabs: ["动态", "消息"],
				selectedIndex: 0,
				addMore: false,
				sessionList: [],
				sessionList: [],
				userInfo: null,
				startData: {},
				isLatestSeq: true,
				addNewMessage: false,
				listener: null,
			}
		},
		methods: {
			select(index) {
				this.selectedIndex = index
			},
			goNew(){
				this.addMore = false
				uni.navigateTo({
					url:'./newGroupChat'
				})
			},
			goSearch(){
				this.addMore = false
				uni.navigateTo({
					url:'./search'
				})
			},
			goFriend(){
				uni.navigateTo({
					url:'../mailList/mailList'
				})
			},
			goMy(){
				uni.navigateTo({
					url:'../profile/my'
				})
			},
			pageClick() {
				console.log("pageClick");
				if (this.showOperationsMenu) this.showOperationsMenu = false
			},
			setConversationListener() {
				let _this = this;
				_this.$globalEvent.addEventListener("onNewConversation", (params) => {
					let res = JSON.parse(params.msg);
					res.forEach((r) => (r.latestMsg = JSON.parse(r.latestMsg)));
					_this.sessionList = res.concat(_this.sessionList);
				});
				_this.$globalEvent.addEventListener("onConversationChanged", (params) => {
					let res = JSON.parse(params.msg);
					console.log(res);
					if (res) {
						res.forEach((r) => {
							if (r.latestMsg !== "") {
								r.latestMsg = JSON.parse(r.latestMsg)
							}
						});
						_this.sessionList = res;
					}
				});
				_this.$globalEvent.addEventListener(
					"onTotalUnreadMessageCountChanged",
					(params) => {
						_this.getTotalUnreadMsgCount();
					}
				);
				_this.$globalEvent.addEventListener("onSyncServerStart", (params) => {
					console.log(params.msg);
				});
				_this.$globalEvent.addEventListener("onSyncServerFailed", (params) => {
					console.log(params.msg);
				});
				_this.$globalEvent.addEventListener("onSyncServerFinish", (params) => {
					console.log(params.msg);
				});
			},
			getAllConversationListList() {
				this.$openSdk.getAllConversationList((data) => {
					let tmpList = JSON.parse(data.msg);
					console.log(tmpList);
					for (let i = 0; i < tmpList.length; i++) {
						if (tmpList[i].latestMsg !== '') {
							tmpList[i].latestMsg = JSON.parse(tmpList[i].latestMsg);
							tmpList[i].isShow = false;
						}
					}
					this.sessionList = tmpList;
					uni.stopPullDownRefresh()
					// console.log(this.sessionList);
				});
			},
			getTotalUnreadMsgCount() {
				this.$openSdk.getTotalUnreadMsgCount((data) => {
					if (data.msg) {
						if (Number(data.msg) > 0) {
							uni.setTabBarBadge({
								index: 0,
								text: data.msg > 99 ? "99+" : data.msg,
							});
						} else {
							uni.removeTabBarBadge({
								index: 0,
							});
						}
					}
				});
			},
			controlDisplay() {
				this.showOperationsMenu = !this.showOperationsMenu;
			},
			
			getGroupList(){
				this.$openSdk.getJoinedGroupList(data=>{
					const originalList = JSON.parse(data.msg)
					this.$u.vuex('vuex_group_list',originalList)
				})
			},
			groupListner(){
				this.$globalEvent.addEventListener("onGroupInfoChanged", (params) => {
					console.log('onGroupInfoChanged-------------------');
					const tmpData = JSON.parse(params.msg)
					console.log(tmpData);
					this.getGroupList()
					// const tmpInfo = JSON.parse(tmpData.groupInfo)
					// for(let i=0;i<this.originalList.length;i++){
					// 	console.log(this.originalList[i].groupID);
					// 	console.log(tmpData.groupId);
					// 	if(this.originalList[i].groupID===tmpData.groupId){
					// 		this.originalList[i] = {...this.originalList[i],...tmpInfo}
					// 		this.groupList[0].data = this.originalList
					// 	}
					// }
				});
				this.$globalEvent.addEventListener("onApplicationProcessed", (params) => {
					console.log('onApplicationProcessed----------');
					console.log(params);
					this.getGroupList()
				});
				this.$globalEvent.addEventListener("onMemberEnter", (params) => {
					console.log('onMemberEnter----------');
					console.log(params);
					this.getGroupList()
				});
				this.$globalEvent.addEventListener("onGroupCreated", (params) => {
					console.log('onGroupCreated----------');
					console.log(params);
					this.getGroupList()
				});
				this.$globalEvent.addEventListener("onMemberKicked", (params) => {
					console.log('onMemberKicked----------');
					console.log(params);
					// this.getGroupList()
				});
				uni.$on('quitGroup',()=>{
					this.getGroupList()
				})
			}
		},
		beforeMount() {
			// this.setConversationListener();
			// this.getAllConversationListList();
			// this.getTotalUnreadMsgCount();
			// this.getGroupList()
		},
	}
</script>


<style lang="scss" scoped>
	.chat {
		.tabCon {
			display: flex;
			align-items: center;
			height: 88rpx;
			background-color: #111111;
			position: relative;

			.middle {
				display: flex;
				align-items: center;
				margin-left: 40%;

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


			.addIcon {
				width: 36rpx;
				height: 36rpx;
				position: absolute;
				right: 36rpx;
				top: 28rpx;
			}
		}

		.my-menuCon {
			z-index: 99;
			position: absolute;
			top: 86rpx;
			right: 1.5%;
			display: flex;
			flex-direction: column;

			&::after {
				content: "";
				position: absolute;
				top: -36rpx;
				right: 26rpx;
				border: 20rpx solid;
				border-color: transparent transparent #555555 transparent;
			}

			.operationsMenu {
				background-color: #555555;
				box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.5);
				border-radius: 10rpx;
				width: 250rpx;

				.operationsMenu-item {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					color: #ffffff;
					height: 82rpx;

					.itemImg {
						width: 34rpx;
						height: 34rpx;
						margin: 0 30rpx;
						flex-shrink: 0;
					}

					.function {
						width: 100%;
						height: 82rpx;
						line-height: 82rpx;
						border-bottom: solid 1px #6e6e6e;
					}

					.functionR {
						width: 100%;
						height: 82rpx;
						line-height: 82rpx;
					}
				}
			}
		}


		
		

		.main {
			padding-top: 90rpx;
		
			.chatList {
				margin-top: 6rpx;
				.empty{
					padding-top: 120rpx;
				}
			}
		}
	}
</style>
