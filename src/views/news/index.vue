<template>
	<div class="news">
		<div class="g-headD"></div>
		<div class="g-head">
			<div class="wal">
				<div class="link"><a href="" class="home">清华主页</a><b>.</b><a href="">English Version</a></div>
				<div class="btm">
					<img src="../../assets/images/logo308.png" alt="" class="logo" />
					<div class="top-right">
						<div class="search">
							<input type="text" />
							<van-icon name="search" class="sub" size="25px" color="#551A8B" />
						</div>
						<div class="share">
							<div>
								<img src="../../assets/images/weibo.png" alt="" />
							</div>
							<el-popover placement="top-start" :width="150" trigger="hover">
								<img src="../../assets/images/weixin.jpg" alt="" />
								<template #reference>
									<div>
										<img src="../../assets/images/wx.png" alt="" />
									</div>
								</template>

							</el-popover>
							<el-popover placement="top-end" :width="160" trigger="hover">
								<img src="../../assets/images/dys.jpg" alt="" />
								<template #reference>
									<div><img src="../../assets/images/dy.png" alt="" /></div>
								</template>
							</el-popover>
						</div>
						<div class="nav" @mouseover="movein" @click="cancell">
							<img src="../../assets/images/nav.png" alt="" />
						</div>
						<div class="triangle"></div>
						<div class="navs">
							<ul>
								<li v-for="item in navs">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="bgTop"></div>
				<div class="infoOne">
					<div class="block text-center">
						<el-carousel height="625px" indicator-position="none" arrow="never" @change="tonext"
							ref="remarkCarusel" :initial-index="0">
							<el-carousel-item v-for="item,index in newslist" :key="item.id" class="el-carousel-item">
								<div class="toutiao">
									<p>头条新闻</p>
								</div>
								<h2 class="newstitle">{{item.title}}</h2>
								<div class="newscontent">{{item.content}}</div>
								<div class="Mask"></div>
								<img :src="item.imgpath" alt="" class="newsimg" />
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="title">
						<ul>
							<li v-for="item,index in newslist" :key="item.id" @mouseenter="tonext(index)">
								<p class="time">{{item.time}}</p>
								<h3>{{item.title}}</h3>
								<div class="titleimg"><img :src="item.imgpath" alt="" /></div>
							</li>
						</ul>
					</div>
				</div>
				<div class="infoTwo">
					<div class="introduce">

						<a>专题推荐</a>
						<a>更多 ></a>
						<div class="change">
							<div class="introduce-left">&lt;</div>
							<div class="introduce-right">&gt;</div>
						</div>
					</div>
					<div class="swipert">
						<div class="imgs" >
							
							  <div class="blocks">
							     <el-carousel height="340px" indicator-position="none" arrow="never" >
							       <el-carousel-item v-for="item,index in introducelist" :key="item" class="el-carousel-item2">
							      <div class="swipers" v-for="items,index in item.info"><img :src="items.imgpath" alt="" />
							      	<h3>{{items.title}}</h3>
									<p></p>
							      </div>
							       </el-carousel-item>
							     </el-carousel>
							   </div>
						</div>			
					</div>
					<div class="wal3">
						
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';
	let navs = reactive(['头条新闻', '专题推荐', '最新动态', '媒体清华', '综合时讯', '人才培养', '科学研究', '交流合作', '清华人物', '菁菁校园', '图说清华', '视频清华',
		'清华广角', '清华史苑', '清华思客', '清华报刊', '新闻合集'
	])
	// 定义轮播图数组
	let newslist = reactive([{
			id: 1,
			title: '清华大学6位教师5位校友当选中国科学院、中国工程院院士',
			content: '11月22日，中国科学院、中国工程院公布了2023年院士增选结果。清华大学航天航空学院教授李路明、生命科学学院教授时松海、计算机科学与技术系教授胡事民、交叉信息研究院教授段路明、生命科学学院教授颜宁共5位教师当选为中国科学院院士。清华大学能源与动力工程系教授吕俊复当选为中国工程院院士。此外，还有5位校友获选中国科学院、中国工程院院士。',
			time: '2023.11 .23',
			imgpath: '../src/assets/images/first.jpg'
		},
		{
			id: 2,
			title: '乌拉圭总统拉卡列访问清华大学并演讲',
			content: '11月21日下午，乌拉圭总统路易斯·拉卡列·波乌（Luis Lacalle Pou）访问清华大学。清华大学校长王希勤与拉卡列总统进行了会谈。拉卡列总统在清华大学主楼发表了主题演讲。',
			time: '2023.11 .22',
			imgpath: '../src/assets/images/second.jpg'
		},
		{
			id: 3,
			title: '2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项，二等奖9项',
			content: '近日，《北京市人民政府关于2022年度北京市科学技术奖励的决定》公布，清华大学高等研究院教授王小云荣获突出贡献中关村奖；清华大学共获得成果奖28项，其中作为第一完成单位16项，包括一等奖7项，二等奖9项，牵头获一等奖项目数居所有报奖单位首位。',
			time: '2023.11 .16',
			imgpath: '../src/assets/images/third.jpg'
		},
		{
			id: 4,
			title: '纪念蒋南翔同志诞辰110周年座谈会在清华大学举行',
			content: '11月10日上午，清华大学在主楼接待厅举行纪念蒋南翔同志诞辰110周年座谈会，缅怀他为党和国家、为清华大学事业发展作出的卓越贡献，学习和继承他为祖国、为人民永久奋斗、赤诚奉献的崇高风范，激励全校师生员工踔厉奋发、勇毅前行，努力开拓中国特色世界一流大学高质量发展新局面。',
			time: '2023.11 .12',
			imgpath: '../src/assets/images/fourth.jpeg'
		},
		{
			id: 5,
			title: '清华大学召开2023年文科工作会议',
			content: '11月7日，清华大学以“建构中国自主的知识体系中的清华使命与担当”为主题召开2023年文科工作会议。校党委书记、文科工作领导小组组长邱勇，校长王希勤，副校长、文科工作领导小组副组长李路明，校务委员会副主任谢维和，以及刘巨德、吴潜涛、阎学通、胡鞍钢、崔建远、张国刚、陈国青、薛澜、张明楷等文科资深教授出席会议。副校长、文科工作领导小组副组长彭刚主持会议。',
			time: '2023.11 .10',
			imgpath: '../src/assets/images/five.jpeg'
		}
	])
	// 鼠标移入nav时
	function movein() {
		let img = document.querySelector('.nav>img')
		let navs = document.querySelector('.navs')
		let triangle = document.querySelector('.triangle')
		img.src = "../src/assets/images/no.png"
		img.style.width = "40%"
		img.style.height = "40%"
		navs.style.display = "block"
		triangle.style.display = "block"
	}
	// 点击隐藏
	function cancell() {
		let img = document.querySelector('.nav>img')
		let navs = document.querySelector('.navs')
		let triangle = document.querySelector('.triangle')
		img.src = "../src/assets/images/nav.png"
		navs.style.display = "none"
		triangle.style.display = "none"
	}
	// 鼠标切换轮播图
	let remarkCarusel = ref()
	let autoplay = ref(true)

	function tonext(index) {

		remarkCarusel.value.setActiveItem(index);
		// console.log(index)
		let news = document.querySelectorAll('.title>ul>li>h3')
		// news[index].style.color="#FFFFFF"
		console.log(news[index])
	}
	// function imgindex(pre,next,index){
	// 	console.log(pre,next,index)
	// }

	// 专题推荐
	let introducelist = reactive([{
		id: 1,
		info: [{
			imgpath: '../src/assets/images/in1.jpg',
			title: '清华大学学习贯彻习近平新时代中国特色社会主义思想主题教育'
		},
		{
			imgpath: '../src/assets/images/in2.jpg',
			title: '深入学习贯彻党的二十大精神'
		}, 
		{
			imgpath: '../src/assets/images/in3.jpg',
			title: '深入学习贯彻习近平总书记重要讲话精神'
		}, 
		{
			imgpath: '../src/assets/images/in4.jpg',
			title: '纪念蒋南翔同志诞辰110周年'
		}],
	},
	{
		id: 2,
		info: [{
			imgpath: '../src/assets/images/in1.jpg',
			title: '清华大学学习贯彻习近平新时代中国特色社会主义思想主题教育'
		},
		{
			imgpath: '../src/assets/images/in2.jpg',
			title: '深入学习贯彻党的二十大精神'
		}, 
		{
			imgpath: '../src/assets/images/in3.jpg',
			title: '深入学习贯彻习近平总书记重要讲话精神'
		}, 
		{
			imgpath: '../src/assets/images/in4.jpg',
			title: '纪念蒋南翔同志诞辰110周年'
		}],
	}])
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	li {
		list-style: none;
	}

	.news {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.g-headD {
		width: 100%;
		height: 1.7rem;
	}

	.g-head:before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 30px;
		right: 0;
		height: 1px;
		background: #EBEBEB;
	}

	.wal {
		width: 1246px;
		height: 151.3px;
		position: absolute;
		left: 50%;
		top: 0;
		margin-left: -623px;
	}

	.logo {
		display: block;
		width: 274.11px;
		height: 56.06px;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -28.03px;


	}

	b {

		font-weight: bold;
		margin-bottom: 5px;
	}

	.link {
		position: absolute;
		z-index: 1;
		left: auto;
		right: 0;
		top: 0;
		bottom: auto;
		font-size: 12px;
		color: #707070;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 180px;
		height: 25px;
		font-weight: bold;
	}

	.home {
		color: #707070;
	}

	.home:hover {
		color: #551A8B;
	}

	.btm {
		width: 100%;
		height: 121px;
		/* background: #EBEBEB; */
		position: absolute;
		bottom: 0;
	}

	.top-right {
		width: 40%;
		height: 100%;
		position: absolute;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.search {
		width: 245px;
		height: 38px;
		display: flex;
		align-items: center;

	}

	.search input {
		width: 205px;
		height: 38px;
		border-radius: 15px 0 0 15px;
		border: none;
		outline: none;
		text-indent: 2em;
		font-size: 12px;
		background: rgba(141, 141, 141, 0.11);
	}

	.sub {
		width: 45px;
		height: 38px;
		background: rgba(141, 141, 141, 0.11);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0 15px 15px 0;
		cursor: pointer;
	}

	.share {
		width: 170px;
		height: 38px;
		display: flex;
		justify-content: space-evenly;
		border-right: 1px solid #DEDEDE;
	}

	.share div {
		width: 38px;
		height: 38px;
		background: rgba(141, 141, 141, 0.11);
		border-radius: 38px;
	}

	.share div img {
		display: block;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	.nav {
		width: 38px;
		height: 38px;
		background: black;
		border-radius: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		position: relative;
	}

	.nav img {
		width: 60%;
		height: 60%;
		display: block;
	}

	.navs {
		width: 172px;
		height: 650px;
		background: url('../../assets/images/navs.png') center no-repeat;
		background-size: cover;
		/* background: red; */
		position: absolute;
		left: 265px;
		top: 40px;
		display: none;
		z-index: 999;
	}

	.triangle {
		width: 20px;
		height: 20px;
		background: #701AAB;
		position: absolute;
		left: 420px;
		transform: rotate(45deg);
		display: none;
	}

	.navs ul {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 100%;
		margin-left: -80%;
		top: 20px;
	}

	.navs ul li {
		width: 80%;
		height: 36px;
		color: #fff;
		border-bottom: 1px solid rgba(255, 255, 255, 0.18);
		line-height: 38px;
		font-size: 14px;
	}

	.navs ul li:hover {
		color: #ba9a05;
	}

	.content {
		width: 100%;
		height: 100vh;
		position: relative;
		top: 120px;
		background: blue;
	}

	.bgTop {
		width: 94%;
		height: 625px;
		background: url('../../assets/images/bg.jpg') no-repeat center;
		background-size: cover;
		position: absolute;
		right: 0;
	}

	.block {
		width: 68%;
		height: 625px;
		background-size: cover;
		position: absolute;
		left: 50px;
		top: 50px;
		z-index: 99;
	}

	.title {
		width: 30%;
		height: 625px;
		background: #ffffff;
		z-index: 99;
		position: absolute;
		right: 2%;
		top: 50px;
	}

	.demonstration {
		color: var(--el-text-color-secondary);
	}

	.el-carousel-item {
		transition: 1s ease all;
	}

	.el-carousel__item h3 {
		color: #475669;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
		text-align: center;
	}

	.newsimg {
		display: block;
		width: 100%;
		height: 100%;
		background-size: cover;
	}

	.toutiao {
		width: 65px;
		height: 20px;
		background: #791CB5;
		position: absolute;
		bottom: 200px;
		left: 50px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		line-height: 20px;
	}

	.newstitle {
		width: 851px;
		height: 52px;
		position: absolute;
		bottom: 140px;
		color: #ffffff;
		font-size: 22px;
		display: flex;
		flex-wrap: wrap;
		left: 50px;
		align-items: center;
		z-index: 999;
		font-weight: bolder;
	}

	.Mask {
		width: 100%;
		height: 30%;
		background: red;
		position: absolute;
		bottom: 0;
		background: #791CB5;
		opacity: 0.3;
	}

	.newscontent {
		width: 851px;
		height: 52px;
		position: absolute;
		bottom: 75px;
		color: #ccc;
		font-size: 12px;
		display: flex;
		flex-wrap: wrap;
		left: 50px;
		align-items: center;
		z-index: 999;
	}

	.title ul {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;

	}

	.title ul li {
		width: 100%;
		height: 20%;
		/* background: red; */
		border-bottom: 1px solid #e6e6e6;
		position: relative;

	}

	.title ul li:nth-child(2) {
		height: 18%;
	}

	.title ul li:nth-child(3) {
		height: 22%;
	}

	.title ul li:hover {
		width: 105%;
		height: 25%;
		background: #ba9a05;
		transform: translateX(-15px);
		transition: .2s ease all;
		color: #fff;

	}

	.title ul li:hover h3 {
		color: #ffffff;
	}

	.title ul li:hover p {
		color: #ffffff99;
	}

	.time {
		width: 80%;
		/* background: #475669; */
		position: absolute;
		top: 10px;
		left: 40%;
		margin-left: -35%;
		font-size: 12px;
		color: #A0A0A0;
	}

	.title ul li h3 {
		width: 44%;
		height: auto;
		font-size: 16px;
		color: #524A64;
		position: absolute;
		top: 30px;
		left: 40%;
		margin-left: -35%;
		font-weight: bolder;
	}

	.titleimg {
		width: 45%;
		height: 100%;
		position: absolute;
		right: 0;
	}

	.titleimg img {
		width: 100%;
		height: 100%;
		display: block;
	}

	.infoTwo {
		width: 100%;
		height: 50%;
		/* background: red; */
		position: absolute;
		top: 680px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.introduce {
		width: 93%;
		height: 20%;
		display: flex;
		align-items: center;
		position: relative;
	}

	.introduce a {
		width: 8%;
		height: 30%;
		font-size: 23px;
		color: #000000;
		font-weight: bolder;
		cursor: pointer;
		border-right: 1px solid #ccc;
		display: flex;
		align-items: center;
	}

	.introduce a:nth-child(2) {
		font-size: 14px;
		color: #ADADAD;
		margin-left: 20px;
		border: none;
	}

	.introduce a:hover {
		color: #551A8B;
		transition: .5s ease all;
	}

	.change {
		width: 10%;
		height: 100%;
		position: absolute;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.change div {
		width: 50px;
		height: 50px;
		border-radius: 36px;
		background: transparent;
		border: #e5d2f0 solid 1px;
		font-size: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #791CB5;
	}

	.change div:hover {
		border-color: #791CB5;
	}


	.swipert {
		width: 100%;
		height: 80%;
		display: flex;
	}

	.imgs {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
	}

	.swipers {
		width: 23%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
		
	}

	.swipers img {
		width: 90%;
		height: 70%;
	}

	.swipers h3 {
		width: 100%;
		font-size: 15px;
		color: #524A64;
		font-weight: bolder;
		
	}
	.blocks{
		width: 100%;
		height: 100%;
		
	}
	.el-carousel-item2{
		margin-top: 10px;
		display: flex;
		justify-content: space-evenly;
		background: red;
	}
	.swipers p{
		width: 34%;
		height: 10px;
		background: #551A8B;
	}
	.wal3{
		width: 100%;
		height: 500px;
		background: #aaffff;
		position: absolute;
		top: 450px;
	}
</style>