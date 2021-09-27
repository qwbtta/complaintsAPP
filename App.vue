<script>
	import store from "store/index.js";
	export default {
		data() {
			return {
				flag: false,
				dbDir: "",
			};
		},
		methods: {
			fileInfo() {
				let _this = this;
				plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
					fs.root.getDirectory(
						"user", {
							create: true,
						},
						(entry) => {
							_this.initAsync(entry.fullPath);
						},
						(error) => {
							console.log(error);
						}
					);
				});
			},
			initAsync(dbDir) {
				const obj = {
					platform: 1,
					ipApi: "http://47.112.160.66:10000",
					ipWs: "ws://47.112.160.66:17778",
					dbDir,
				};
				this.flag = this.$openSdk.initSDK(JSON.stringify(obj));
			},
			initFriendListener() {
				this.$openSdk.setFriendListener();
			},
			setFriendListener() {
				this.$globalEvent.addEventListener("onBlackListAdd", (params) => {
					console.log(params);
				});
				this.$globalEvent.addEventListener("onBlackListDeleted", (params) => {
					console.log(params);
				});
				this.$globalEvent.addEventListener(
					"onFriendApplicationListDeleted",
					(params) => {
						console.log(params);
					}
				);
			},
		},
		onLaunch: function() {
			this.$openSdk.setConversationListener();
			this.$openSdk.addAdvancedMsgListener();
			this.$openSdk.setGroupListener()
			this.fileInfo();
			this.initFriendListener();
			this.setFriendListener();
		},
		watch: {
			vuex_wsLink(val, oldVal) {
				let _this = this
				if (val == true) {
					
					
					
					uni.connectSocket({
						url: 'ws://47.112.160.66:7778?uid=' + _this.vuex_uid
					});
					uni.onSocketOpen(function(res) {
						console.log('WebSocket连接已打开！');
					});
					uni.onSocketError(function(res) {
						console.log('WebSocket连接打开失败，请检查！');
					});
					uni.onSocketMessage(function(res) {
						console.log('收到服务器内容：',res);
						console.log('收到服务器内容：' + res.data);
					});
				}

			},
		}
	};
</script>

<style>
	page {
		height: 100%;
		background-color: #191919;
	}

	.btn:active {
		opacity: 0.8;
	}
</style>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
