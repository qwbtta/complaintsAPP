// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)



// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处没有使用传入的params参数
	let getcosCredentials = (params = {}) => vm.$u.post('/third_service/tencent_cloud_storage_credential',params);
	let register = (params = {}) => vm.$u.post('/user/register',params);
	let login = (params = {}) => vm.$u.post('/user/login',params);
	let release_article = (params = {}) => vm.$u.post('/article/release_article',params);
	let update_user_info = (params = {}) => vm.$u.post('/user/update_user_info',params);
	let follow = (params = {}) => vm.$u.post('/user/follow',params);
	let unfollow = (params = {}) => vm.$u.post('/user/unfollow',params);
	let release_commen = (params = {}) => vm.$u.post('/user/release_commen',params);
	let like = (params = {}) => vm.$u.post('/user/like',params);
	let get_hot_topic = (params = {}) => vm.$u.post('/article/get_hot_topic',params);
	let get_my_topic = (params = {}) => vm.$u.post('/article/get_my_topic',params);
	let get_hot_article = (params = {}) => vm.$u.post('/article/get_hot_article',params);
	let get_follow_user_article = (params = {}) => vm.$u.post('/article/get_follow_user_article',params);
	let get_newest_article = (params = {}) => vm.$u.post('/article/get_newest_article',params);
	let get_son_comment = (params = {}) => vm.$u.post('/article/get_son_comment',params);
	let get_first_comment = (params = {}) => vm.$u.post('/article/get_first_comment',params);
	let get_related_myself_message = (params = {}) => vm.$u.post('/article/get_related_myself_message',params);
	let get_related_myself_comment = (params = {}) => vm.$u.post('/article/get_related_myself_comment',params);
	let get_myself_received_likes = (params = {}) => vm.$u.post('/article/get_myself_received_likes',params);
	let get_user_fans = (params = {}) => vm.$u.post('/user/get_user_fans',params);
	let get_user_follow = (params = {}) => vm.$u.post('/user/get_user_follow',params);
	let get_user_info = (params = {}) => vm.$u.post('/user/get_user_info',params);
	let delete_article = (params = {}) => vm.$u.post('/article/delete_article',params);
	let edit_article = (params = {}) => vm.$u.post('/article/edit_article',params);
	let unlike = (params = {}) => vm.$u.post('/user/unlike',params);
	let islike = (params = {}) => vm.$u.post('/user/islike',params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {register,login,release_article,update_user_info,follow,unfollow,release_commen,like,get_hot_topic,get_my_topic,get_hot_article,get_follow_user_article,get_newest_article,get_son_comment,get_first_comment,get_related_myself_message,get_related_myself_comment,get_myself_received_likes,get_user_fans,get_user_follow,get_user_info,delete_article,edit_article,unlike,islike};
}

export default {
	install
} 