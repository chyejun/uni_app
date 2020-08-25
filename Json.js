/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner1.jpg",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner3.jpg",
		background: "rgb(183, 73, 69)",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "/static/temp/cate1.jpg",
		image2: "/static/temp/cate1.jpg",
		image3: "/static/temp/cate1.jpg",
		title: "测试水果数据测试水果数据测试水果数据测试水果数据",
		price: 179,
		sales: 61,
	},
	{
		image: "/static/temp/cate2.jpg",
		image2: "/static/temp/cate2.jpg",
		image3: "/static/temp/cate2.jpg",
		title: "测试水果数据测试水果数据测试水果数据测试水果数据",
		price: 179,
		sales: 61,
	},
	{
		image: "/static/temp/cate3.jpg",
		image2: "/static/temp/cate3.jpg",
		image3: "/static/temp/cate3.jpg",
		title: "测试水果数据测试水果数据测试水果数据测试水果数据",
		price: 179,
		sales: 61,
	},
	{
		image: "/static/temp/cate4.jpg",
		image2: "/static/temp/cate4.jpg",
		image3: "/static/temp/cate4.jpg",
		title: "测试水果数据测试水果数据测试水果数据测试水果数据",
		price: 179,
		sales: 61,
	},
	{
		image: "/static/temp/cate5.jpg",
		image2: "/static/temp/cate5.jpg",
		image3: "/static/temp/cate5.jpg",
		title: "测试水果数据测试水果数据测试水果数据测试水果数据",
		price: 179,
		sales: 61,
	},
	{
		image: "/static/temp/cate5.jpg",
		image2: "/static/temp/cate5.jpg",
		image3: "/static/temp/cate5.jpg",
		title: "测试水果数据测试水果数据测试水果数据测试水果数据",
		price: 179,
		sales: 61,
	}
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: '/static/temp/cate1.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 2,
		image: '/static/temp/cate2.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: '/static/temp/cate3.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 4,
		image: '/static/temp/cate4.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 55,
		image: '/static/temp/cate5.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 6,
		image: '/static/temp/cate6.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 7,
		image: '/static/temp/cate1.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 8,
		image: '/static/temp/cate2.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 9,
		image: '/static/temp/cate3.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 10,
		image: '/static/temp/cate4.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 11,
		image: '/static/temp/cate5.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	},
	{
		id: 12,
		image: '/static/temp/cate6.jpg',
		attr_val: '测试水果',
		stock: 15,
		title: '测试水果',
		price: 278.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	title: '测试水果数据 测试水果数据',
	title2: '测试水果数据 测试水果数据',
	favorite: true,
	imgList: [{
			src: '/static/temp/cate1.jpg'
		},
		{
			src: '/static/temp/cate2.jpg'
		},
		{
			src: '/static/temp/cate3.jpg'
		},
		{
			src: '/static/temp/cate4.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: '/static/temp/cate1.jpg',
			title: '测试水果数据1',
			title2: '测试水果数据2测试水果数据2'
		},
		{
			src: '/static/temp/cate2.jpg',
			title: '测试水果数据1',
			title2: '测试水果数据2测试水果数据2'
		},
		{
			src: '/static/temp/cate3.jpg',
			title: '测试水果数据1',
			title2: '测试水果数据2测试水果数据2'
		},
		{
			src: '/static/temp/cate4.jpg',
			title: '测试水果数据1',
			title2: '测试水果数据2测试水果数据2'
		}
	],
	evaList: [{
			src: '/static/temp/cate1.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '测试水果数据测试水果数据，测试水果数据测试水果数据测试水果数据测试水果数据测试水果数据测试水果数据'
		},
		{
			src: '/static/temp/cate2.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
// 分享
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]

const lazyLoadList = [{
		src: '/static/temp/cate1.jpg'
	},
	{
		src: '/static/temp/cate2.jpg'
	},
	{
		src: '/static/temp/cate3.jpg'
	},
	{
		src: '/static/temp/cate4.jpg'
	},
	{
		src: '/static/temp/cate5.jpg'
	},
	{
		src: '/static/temp/cate6.jpg'
	},
	{
		src: '/static/temp/cate1.jpg'
	},
	{
		src: '/static/temp/cate2.jpg'
	},
	{
		src: '/static/temp/cate3.jpg'
	},
	{
		src: '/static/temp/cate4.jpg'
	},
	{
		src: '/static/temp/cate5.jpg'
	},
	{
		src: '/static/temp/cate6.jpg'
	},
	{
		src: '/static/temp/cate1.jpg'
	},
	{
		src: '/static/temp/cate2.jpg'
	},
	{
		src: '/static/temp/cate3.jpg'
	},
	{
		src: '/static/temp/cate4.jpg'
	}
]

const orderList = [{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: '/static/temp/cate1.jpg',
			},
			{
				image: '/static/temp/cate2.jpg',
			},
			{
				image: '/static/temp/cate3.jpg',
			},
			{
				image: '/static/temp/cate4.jpg',
			},
			{
				image: '/static/temp/cate5.jpg',
			},
			{
				image: '/static/temp/cate6.jpg',
			},
			{
				image: '/static/temp/cate1.jpg',
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 9,
		goodsList: [{
			title: '测试水果数据测试水果数据测试水果数据测试水果数据',
			price: 179.5,
			image: '/static/temp/cate1.jpg',
			number: 1,
			attr: '测试水果数据'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: '/static/temp/cate2.jpg',
			},
			{
				image: '/static/temp/cate3.jpg',
			},
			{
				image: '/static/temp/cate4.jpg',
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '测试水果数据测试水果数据测试水果数据测试水果数据测试水果数据',
			price: 69,
			image: '/static/temp/cate4.jpg',
			number: 1,
			attr: '测试水果数据'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: '/static/temp/cate6.jpg',
			},
			{
				image: '/static/temp/cate1.jpg',
			}
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				image: '/static/temp/cate3.jpg',
			},
			{
				image: '/static/temp/cate4.jpg',
			},
			{
				image: '/static/temp/cate5.jpg',
			},
		]
	}

]

// 分类
const cateList = [{
		id: 1,
		name: '水果测试'
	},
	{
		id: 2,
		name: '水果测试'
	},
	{
		id: 3,
		name: '水果测试'
	},
	{
		id: 4,
		name: '水果测试'
	},
	{
		id: 5,
		pid: 1,
		name: '水果测试'
	},
	{
		id: 6,
		pid: 1,
		name: '水果测试'
	},
	{
		id: 8,
		pid: 5,
		name: '水果测试',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '水果测试',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '水果测试',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '水果测试',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '水果测试',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '水果测试',
		picture: '/static/temp/cate6.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '水果测试',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '水果测试',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '水果测试',
	},
	{
		id: 18,
		pid: 2,
		name: '水果测试',
	},
	{
		id: 19,
		pid: 17,
		name: '水果测试',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '水果测试',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 21,
		pid: 18,
		name: '水果测试',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 22,
		pid: 18,
		name: '水果测试',
		picture: '/static/temp/cate6.jpg'
	},
	{
		id: 23,
		pid: 18,
		name: '水果测试',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 24,
		pid: 18,
		name: '水果测试',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 25,
		pid: 3,
		name: '水果测试'
	},
	{
		id: 26,
		pid: 3,
		name: '水果测试'
	},
	{
		id: 27,
		pid: 25,
		name: '水果测试',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '水果测试',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 29,
		pid: 26,
		name: '水果测试',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 30,
		pid: 26,
		name: '水果测试',
		picture: '/static/temp/cate6.jpg'
	},
	{
		id: 31,
		pid: 26,
		name: '水果测试',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 32,
		pid: 26,
		name: '水果测试',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 33,
		pid: 4,
		name: '水果测试',
	},
	{
		id: 34,
		pid: 4,
		name: '水果测试',
	},
	{
		id: 35,
		pid: 4,
		name: '水果测试',
	},
	{
		id: 39,
		pid: 4,
		name: '水果测试',
	},
	{
		id: 36,
		pid: 33,
		name: '水果测试',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 37,
		pid: 34,
		name: '水果测试',
		picture: '/static/temp/cate4.jpg'
	},
	{
		id: 39,
		pid: 34,
		name: '水果测试',
		picture: '/static/temp/cate5.jpg'
	},
	{
		id: 42,
		pid: 35,
		name: '水果测试',
		picture: '/static/temp/cate6.jpg'
	},
	{
		id: 43,
		pid: 39,
		name: '水果测试',
		picture: '/static/temp/cate1.jpg'
	},
	{
		id: 44,
		pid: 39,
		name: '水果测试',
		picture: '/static/temp/cate2.jpg'
	},
	{
		id: 45,
		pid: 39,
		name: '牙胶安抚',
		picture: '/static/temp/cate3.jpg'
	},
	{
		id: 46,
		pid: 39,
		name: '水果测试',
		picture: '/static/temp/cate4.jpg'
	},
]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}