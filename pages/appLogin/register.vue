<template>
	<view class="register">
		<text class="title">新用户注册</text>
		<view class="inputItem">
			<text class="labelText">账号</text>
			<input type="text" value="" placeholder="请输入手机号" class="input" v-model="account" />
		</view>
		<view class="inputItem">
			<text class="labelText">密码</text>
			<input type="text" password="true" value="" placeholder="请输入密码" class="input" v-model="password" />
		</view>
		<view class="inputItem">
			<text class="labelText">确认</text>
			<input type="text" password="true"  value="" placeholder="请再次输入密码" class="input" v-model="confrim" />
		</view>
		
		<view class="btn" @click="next">
			注册
		</view>
		<view class="footer">
			<u-checkbox 
							
							v-model="checked" 
							 shape="circle"
							 active-color="#2cffb0"
							 size="28"
							 icon-size="16"
						></u-checkbox>
						<text class="des">登陆即代表同意<text class="special">用户协议</text>和<text class="special">隐私政策</text></text>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false,
				account:"",
				password:"",
				confrim:""
				
			}
		},
		methods: {
			async next(){
				
				if(this.$u.trim(this.account,'all').length==0){
					this.$u.toast('请输入账号')
					return
				}
				else if(this.$u.trim(this.password,'all').length==0){
					this.$u.toast('请输入密码')
					return
				}
				else if(this.$u.trim(this.password,'all').length<6||this.$u.trim(this.password,'all').length>20){
					this.$u.toast('密码长度应在6-20位')
					return
				}
				else if(this.$u.trim(this.confrim,'all').length==0){
					this.$u.toast('请确认密码')
					return
				}
				else if(this.confrim!=this.password){
					this.$u.toast('密码输入不一致，请重新输入')
					return
				}
				let info = {
					account:this.account,
					password:this.password
				}
				await this.$u.vuex('vuex_registerInfo',info)
				Object.assign(this.$data, this.$options.data())
				uni.navigateTo({
					url:'./perfectInfo'
				})
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
		background-color: #0F0F0F;
	}
</style>

<style lang="scss" scoped>
	.register {
		display: flex;
		flex-direction: column;
		align-items: center;

		.title {
			font-size: 48rpx;
			color: #ffffff;
			margin-bottom: 40rpx;
			margin-top: 176rpx;
		}

		.inputItem {
			display: flex;
			align-items: center;
			margin-top: 60rpx;

			.labelText {
				font-size: 32rpx;
				color: #ffffff;
			}

			.input {
				width: 506rpx;
				height: 80rpx;
				background-color: #1c1c1c;
				border-radius: 80rpx;
				margin-left: 20rpx;
				font-size: 28rpx;
				color: #999999;
				padding: 0 30rpx;
			}
		}
		.btn{
			width: 678rpx;
				height: 100rpx;
				background-color: #2cffb0;
				border-radius: 64rpx;
				font-size: 32rpx;
					color: #ffffff;
					text-align: center;
					line-height: 100rpx;
					margin-top: 100rpx;
		}
		.footer{
			display: flex;
			align-items: center;
			margin-top: 50rpx;
			.des{
				font-size: 28rpx;
					color: #ffffff;
					margin-left: -16rpx;
					.special{
						font-size: 28rpx;
							color: #2cffb0;
					}
			}
		}
	}
</style>
