<template>
	<view class="intro" style="padding: 10px; background-color: #FFFFFF;">
		<view class="intro">
			<textarea v-model="con" value="" placeholder="请输入淘宝淘口令或者商品链接..." maxlength="-1" style="background-color: #F8F8F8; width: auto;"/>
		</view>
		<view class="intro">
			<button type="primary" size="default" style="margin-top: 10px;" @click="turn">转链</button>
		</view>
		<view class="intro" v-show="show">
			<br/>
			<view class="intro" style="width: auto; text-align: center;">
				<text style="color: red;">↓ ↓ ↓ 往 下 划 查 看 详 情 ↓ ↓ ↓</text>
			</view>
			<br/>
			<view class="intro">
				<cover-image v-bind:src="data.item_info.pict_url"></cover-image>
			</view>
			<view class="intro" style="margin-top: 10px; margin-bottom: 10px; font-size: 20px; color: #0000FF;">
				<b><text v-text="data.item_info.title"></text></b>
			</view>			
			<view class="intro" style="width: auto; height: auto; border-radius: 10px; border:2px #ff5500; background-color: #ffaa00; padding: 20px 0px 20px 0px;">
				<view class="intro" style="text-align: center;">
					<b><text v-show="!data.has_coupon" style="color: #aa55ff; font-size: 23px; text-align: center;">无优惠券</text>
					<text v-show="data.has_coupon" style="color: #ff0000; font-size: 23px; text-align: center;">有优惠券</text>
					<text v-show="data.has_coupon" style="color: #0000ff; font-size: 30px; margin-left: 20px;" v-text="data.youhuiquan + '元'"></text>
					</b>
				</view>
			</view>
			<view class="intro" style="margin-top: 10px; text-align: center; font-size: 25px;">
				<text v-show="data.has_coupon" v-text="'券后价：' + (data.item_info.zk_final_price - data.youhuiquan) + '元'"></text>
				<text v-show="!data.has_coupon" v-text="'抢购价：' + data.item_info.zk_final_price + '元'"></text><br/>
				<text v-text="data.tpwd" v-bind:id="tkl"></text>
				<input type="text" v-model="data.tpwd"/>
			</view>
			<view class="intro" style="margin-top: 10px;">
				<button type="primary" style="margin-top: 10px;" @click="openUrl">打开链接</button>
				<button type="primary" style="margin-top: 10px;" @click="copyTkl">复制淘口令</button>
				<!-- <button type="primary" style="margin-top: 10px;" @click="openTb">打开淘宝APP</button> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				content:"此处显示转链之后的内容",
				con:"",
				data:{
					has_coupon:false,
					short_url:"短链接",
					tpwd:"淘口令",
					youhuiquan:"优惠券",
					coupon_click_url:"优惠券链接",
					item_url:"二合一链接",
					quanlimit:"券限制",
					coupon_info:"券信息",
					item_info:{
						pict_url:"主图链接",
						zk_final_price:"售价",
						title:"商品标题"
					}
				},
				show:false,
			}
		},
		methods:{
			turn() {
				if(this.con == ""){
					alert("请输入淘口令或者商品链接，不能为空");
				} else {
					// 判断运行平台
					
					console.log('开始转链');
					var content = this.con; // 内容
					var API = "/taobao/highTurnByAll.php"; // API
					//API = "/taoke/doItemHighCommissionPromotionLinkByAll";
					var KEY = "c90dbafa-95f2-e430-8b58-a085740c9e5c"; // KEY
					var PID = "mm_129779402_46770368_109694000456"; // PID
					var others = "&extsearch=1&tpwd=1&shorturl=1" // 其他参数
					var tbname = "mc陌宇" // 淘宝名字
					var URL = API + "?apkey=" + KEY + "&pid=" + PID + others + "&tbname=" + tbname + "&content=" + content
					var self = this;
					uni.request({
						url:API,
						data:{
							"apkey":KEY,
							"pid":PID,
							"extsearch":1,
							"tpwd":1,
							"shorturl":1,
							"tbname":tbname,
							"content":content
						},
						success(res){
							self.data.has_coupon = res.data.data.has_coupon; // 布尔
							// console.log(res.data.data.has_coupon);
							self.data.short_url = res.data.data.short_url; // 字符串
							// console.log(res.data.data.short_url);
							self.data.tpwd = res.data.data.tpwd; // 字符串
							// console.log(res.data.data.tpwd);
							self.data.coupon_click_url = res.data.data.coupon_click_url; // 字符串
							// console.log(res.data.data.coupon_click_url);
							self.data.item_info.pict_url = res.data.data.item_info.pict_url; // 字符串
							// console.log(res.data.data.item_info.pict_url);
							self.data.item_info.title = res.data.data.item_info.title; // 字符串
							// console.log(res.data.data.item_info.title);
							self.data.item_info.zk_final_price = res.data.data.item_info.zk_final_price;
							// console.log(res.data.data.item_info.zk_final_price);
							if(self.data.has_coupon){
								self.data.youhuiquan = res.data.data.youhuiquan; // 字符串
								// console.log(res.data.data.youhuiquan);
								self.data.quanlimit = res.data.data.quanlimit; // 字符串
								// console.log(res.data.data.quanlimit);
								self.data.coupon_info = res.data.data.coupon_info; // 字符串
								// console.log(res.data.data.coupon_info);
							} else {
								self.data.item_url = res.data.data.item_url; // 字符串
								// console.log(res.data.data.item_url);
							}
							// console.log(res.data.data);
							self.run();
						}
					})
				}
			},
			run(){
				// console.log("-------------分割线------------");
				// console.log(this.data.has_coupon);
				// console.log(this.data.short_url);
				// console.log(this.data.tpwd);
				// console.log(this.data.youhuiquan);
				// console.log(this.data.coupon_click_url);
				// console.log(this.data.item_url);
				// console.log(this.data.quanlimit);
				// console.log(this.data.coupon_info);
				// console.log(this.data.item_info.pict_url);
				// console.log(this.data.item_info.zk_final_price);
				// console.log(this.data.item_info.title);
				var couponinfo = "";
				var quanhoujia = "";
				if(this.data.has_coupon){
					if(this.data.quanlimit > this.data.youhuiquan){
						couponinfo = "\n" + "【券限制】" + this.data.coupon_info;
						quanhoujia = "【在售价】" + this.data.item_info.zk_final_price;
					} else {
						quanhoujia = "【券后价】" + (this.data.item_info.zk_final_price - this.data.youhuiquan);
					}
					this.content = this.data.item_info.title + "\n" + "【优惠券】" + this.data.youhuiquan + "元" + "\n" + quanhoujia + "元" + couponinfo + "\n" + "【淘口令】" + this.data.tpwd + "\n" + "【抢购点】" + this.data.short_url
				} else {
					this.content = this.data.item_info.title + "\n" + "【在售价】" + this.data.item_info.zk_final_price + "元" + "\n" + "【淘口令】" + this.data.tpwd + "\n" + "【抢购点】" + this.data.short_url
				}
				this.show = true;
			},
			openUrl() {
				window.open(this.data.short_url);
			},
			copyTkl() {
				let url = document.querySelector('input');
				url.select(); // 选择对象
				document.execCommand('Copy'); // 执行浏览器复制命令
				alert("已复制好！请打开手机淘宝将自动识别淘口令。");
			},
			openTb() {
				window.open('https://t.asczwa.com/taobao?backurl=' + this.data.short_url);
			}
		}
	}
</script>

<style>
	input {position: absolute; top: 0; left: 0; opacity: 0; z-index: -10;}
</style>