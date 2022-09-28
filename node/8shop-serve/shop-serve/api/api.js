var router = require("express").Router();

var pool = require("../modules/db.js");
// JWT(Json Web Token)是实现token技术的一种解决方案;
var jwt = require("jsonwebtoken");

var checktoken = require("../modules/checktoken.js");
// 上传图片
const multer = require('multer');
const storage = multer.diskStorage({
	//保存路径
	destination: function (req, file, cb) {
		cb(null, 'F:/前端正课/第四阶段vue框架/项目/shop-serve/upload')
		//注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
	},
	//保存在 destination 中的文件名
	filename: function (req, file, cb) {
		cb(null, file.fieldname + file.originalname)
	}
})
var upload = multer({
	storage: storage
})
// 上传图片
// todo 添加验证身份功能
router.post('/uploadFile', upload.single('file', 5), (req, res, next) => {
	
	let img_src = req.file.fieldname + req.file.originalname
	res.json({
		code: 1,
		message: '上传成功',
		img_src: 'http://192.168.205.28:9528/upload/' + img_src
	})
})
// 登录
/*
 *请求方式为：get
 *userName
 *password
 *响应内容{code:0,token:null}用户名或密码错误   {code:1,token:"fffsdfe",userName:"veb"}成功返回token
 */
router.get("/login", (req, res) => {
	
	pool.query("select * from user where username=? and password=?", [req.query.username, req.query.password], (err, data) => {
		if (data.length == 0) {
			res.json({
				code: 0
			})
			return;
		}
		// 签名，获取token
		// para1:对象;待签名数据
		// para2:字符串；签名使用密钥
		// para3:配置对象；expiresIn，有效期，以秒为单位
		var token = jwt.sign({
			username: req.query.username
		}, "hello world", {
			expiresIn: 60 * 60 * 24 * 7
		})

		res.json({
			code: 1,
			token: token,
			username: req.query.username,
		})

	})
})


// 注册
/*
 *请求方式为：get
 *username
 *password
 *响应内容{code:0}被占用   {code:1}成功
 */
router.get("/register", (req, res) => {
	
	pool.query("insert into user (username,password) values(?,?)", [req.query.username, req.query.password], (error, data) => {
		// // console.log(error);
		if (error) {
			res.json({
				code: 0
			})
			return;
		}
		res.json({
			code: 1
		})
	})
})
router.get("/getinfo", checktoken, (req, res) => {
	// console.log('user' + req.query.username);
	// pool.query(`SELECT username,roles,avatar FROM user WHERE username=?`, [req.query.username], (err, data) => {
	// 	if (err) {
	// 		res.json({
	// 			code: 2,
	// 		})
	// 	}
	// 	if (data.length === 0) {
	// 		res.json({
	// 			code: 0,
	// 		})
	// 	}
	// 	// console.log(data);
	// 	let {
	// 		username,
	// 		avatar
	// 	} = data[0]
	// 	let roles = []
	// 	roles.push(data[0].roles)
	// 	// console.log(roles);
	// 	res.json({
	// 		username,
	// 		avatar,
	// 		roles,
	// 	})
	// })
	res.json({
		username:'admin',
		roles:'admin',
		avatar:'dhf'
	})
})


// 加入购物车、商品份数增加1
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}添加成功 {code:2} 插入失败
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMzQ1NiIsImlhdCI6MTYwMTQzMDk3NCwiZXhwIjoxNjAyMDM1Nzc0fQ.n6gZONapBOf-6dJJdtdvT-5cGndU6FM6X-y9y4ux1Vc
*/

router.get("/add", checktoken, (req, res) => {
	// 判断购物车中是否有该商品
	pool.query("select * from shopcar where goodId=? and username=?", [req.query.goodId, req.query.username], function (err, d) {
		if (err) {
			res.json({
				code: 2
			})
			return;
		}

		//有该商品；更新份数
		if (d.length) {
			pool.query("update shopcar set count=? where goodId=? and username=?", [Number(d[0].count) + 1, req.query.goodId, req.query.username], (err, data) => {
				if (err) {
					res.json({
						code: 2
					})
					return;
				}

				res.json({
					code: 1
				})
				return;
			})

			return;

		}
		// 无该商品，添加商品
		pool.query("insert into shopcar (goodId,username,count) values(?,?,?)", [req.query.goodId, req.query.username, 1], (err, data) => {
			if (err) {
				res.json({
					code: 2
				})
				return;
			}
			res.json({
				code: 1
			})

		})
	})
})

// 商品份数减少1
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}成功 {code:2} 失败
 */
router.get("/remove", checktoken, (req, res) => {
	pool.query("select * from shopcar where goodId=? and username=?", [req.query.goodId, req.query.username], function (err, d) {
		if (err) {
			res.json({
				code: 2,
				message: "请求参数错误"
			})
			return;
		}

		if (d.length == 0) {
			res.json({
				code: 3,
				message: "购物车中不存在这项商品"
			})
			return;
		}

		pool.query("update shopcar set count=? where goodId=? and username=?", [Number(d[0].count) - 1, req.query.goodId, req.query.username], (err, data) => {
			if (err) {
				res.json({
					code: 2,
					message: "请求参数错误"
				})
				return;
			}
			res.json({
				code: 1
			})

		})
	})
})



// 删除购物车商品
/*
 *请求方式为：get
 *goodId
 *token
 *响应内容{code:0}token无效   {code:1}删除成功 {code:2} 删除失败
 */

router.get("/del", checktoken, (req, res) => {

	pool.query("delete from shopcar where username=? and goodId=?", [req.query.username, req.query.goodId], (err, data) => {

		if (err) {
			res.json({
				code: 2,
				message: "请求参数错误"
			})
			return;
		}
		res.json({
			code: 1
		})
	})
})



// 获取商品列表
/*
 * 参数 type_one  缺省则获取所有分类列表
 *使用实例 /goodlist?type_one=男装  获取所有男装列表
 */
router.get("/goodList", (req, res) => {

	var sql = "select Id,title,price,mack,nice,img_list_url,type_one,type_two from goods";
	if (req.query.type_one) {
		sql += " where type_one=?";
	}
	if (req.query.page) {
		sql += " limit " + (parseInt(req.query.page) - 1) * 30 + ",30";
	}
	pool.query(sql, [req.query.type_one], (err, data) => {

		res.json(data);
		// console.log(err);
	})

})

// router.get('/addShop',(req,res)=>{
// 	let { Id,title,price,nice,img_list_url,type_one,type_two } = req;
// 	let mark = ''
// 	let sql = `insert into goods (Id,title,price,nice,img_list_url,type_one,type_two,mark) values (?,?,?,?,?,?,?,?)`;
// 	pool.query(sql,[Id,title,price,nice,img_list_url,type_one,type_two,mark])
// })


// 获取商品详情
/*
 *goodId
 */
router.get("/detail", (req, res) => {

	pool.query("select * from goods where Id=?", [req.query.goodId], (err, data) => {

		res.json(data);
	})

})


// 获取購物車列表
router.get("/shoplist", checktoken, (req, res) => {
	// console.log(req.query.username);
	pool.query("select * from shopcar where username=?", [req.query.username], (err, data) => {
		// console.log(req.query.username, req.query.token);
		// console.log(data);

		var list = [];

		var i = 0;

		function getList() {

			pool.query("select * from goods where Id=?", [data[i].goodId], (err, d) => {
				// console.log('hahah ==========' + d);
				if (d.length <= 0) {
					res.json(list);
					return;
				}
				d[0].count = data[i].count

				list.push(d[0]);

				if (i < data.length - 1) {
					i++;
					getList();
				} else {
					res.json(list);
				}
			})
		}
		if (data.length > 0) {
			getList();
		} else {
			res.json(list);
		}
	})
})


/*
 *搜索接口
 *url   /search
 *query word
 *示例: /search?word=男装	
 */
router.get("/search", (req, res) => {

	pool.query("select * from goods where title like ? or type_one=? or type_two=?", ["%" + req.query.word + "%", req.query.word, req.query.word], (err, data) => {
		res.json(data);
	})

})

/*
 *获取一级分类
 *url   /getTypeOne
 */
router.get("/getTypeOne", (req, res) => {
	// console.log("getTypeOne")
	pool.query("select type_one from goods", (err, data) => {
		// console.log(err);
		// console.log(data);

		var data2 = [];

		for (var i = 0; i < data.length; i++) {
			var flag = true;

			for (var j = 0; j < data2.length; j++) {
				if (data[i].type_one == data2[j]) {
					flag = false;
					break;
				}
			}

			if (flag) {
				data2.push(data[i].type_one);
			}

		}


		res.json(data2);
	})

})

// 获取二级分类
// query {type_one:"咖啡"}
router.get("/getTypeTwo", (req, res) => {
	pool.query("select type_two from goods where type_one=?", [req.query.type_one], (err, data) => {
		var arr = [];
		data.forEach(item => {
			arr.push(item.type_two);
		})
		arr = [...new Set(arr)];
		res.json(arr);

	})
})

// 获取二级商品列表
// query {type_one:"咖啡",type_two:"手磨咖啡"}
router.get("/getTypeTwoList", (req, res) => {
	pool.query("select * from goods where type_one=? and type_two=?", [req.query.type_one, req.query.type_two], (err, data) => {
		res.json(data);
	})
})


// 获取商品总条数
/**
 * url: /api/shopTotal
 * method: get 
 * 没有参数
 */
router.get("/shopTotal", (req, res) => {
	pool.query('select count(*) from goods', [], (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "获取总数据量失败了",
				err,
			})
			return
		}
		let count = data[0]['count(*)'];
		res.json({
			code: 1,
			msg: "获取总数据量成功了",
			data,
			count
		})
	})
})

// 添加商品
/**
 * url:/api/addShop
 * method:post
 * 参数 roles:'admin' title, price, nice, img_list_url, type_one, type_two
 */
router.get("/addShop", (req, res) => {
	let roles = req.query.roles;
	// console.log(roles);
	if (roles != 'admin') {
		res.json({
			code: 3,
			msg: '你的身份不合法'
		})
		return
	}
	let {
		title,
		price,
		nice,
		img_list_url,
		type_one,
		type_two
	} = req.query;
	// console.log('12=================================',img_list_url,req.query);
	let mack = ''
	let arr = [title, price, nice, img_list_url, type_one, type_two, mack]
	let sql = `insert into goods (title,price,nice,img_list_url,type_one,type_two,mack) values (?,?,?,?,?,?,?)`;
	pool.query(sql, arr, (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "error",
				err
			})
			return
		}
		res.json({
			code: 1,
			msg: 'success',
			data
		})
	})
})

// 删除商品
/**
 * url:/api/deletShop
 * method:get
 * query参数：Id:munber roles:'admin'
 */
router.get("/deletShop", (req, res) => {
	// delete from shopcar where username=? and goodId=?
	let roles = req.query.roles;
	// console.log();
	if (roles != 'admin') {
		res.json({
			code: 3,
			msg: '你没有权限'
		})
		return
	}
	let Id = req.query.goodId
	pool.query(`delete from goods where Id=?`, [Id], (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "error",
				err
			})
			return
		}
		res.json({
			code: 1,
			msg: 'success',
			data
		})

	})
})
// 更新商品
/**
 * url:/api/updateShop
 * method:post
 * 参数 roles:'admin'  title, price, nice, img_list_url, type_one, type_two
 */
router.get("/updateShop", (req, res) => {
	let roles = req.query.roles;
	if (roles != 'admin') {
		res.json({
			code: 3,
			msg: '你没有权限'
		})
		return
	}
	let {
		Id,
		title,
		price,
		nice,
		img_list_url,
		type_one,
		type_two
	} = req.query;
	pool.query(`select * from goods where Id=?`, [Id], (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: '更新失败'
			})
			return
		}
		if (data.length === 0) {
			res.json({
				code: 2,
				msg: '商品不存在'
			})
			return
		}
		let arr = [title, price, nice, img_list_url, type_one, type_two, Id]
		let sql = 'update goods set title=?,price=?,nice=?,img_list_url=?,type_one=?,type_two=? where Id=?';
		pool.query(sql, arr, (err, data) => {
			if (err) {
				res.json({
					code: 2,
					msg: "error",
					err
				})
				return
			}
			res.json({
				code: 1,
				msg: 'success',
				data
			})

		})
	})

})
// 获取用户列表
/**
 * url:/api/userList
 * metho:get
 * query参数：roles:'admin' token page
 */
router.get("/userList", (req, res) => {
	let roles = req.query.roles;
	if (roles != 'admin') {
		res.json({
			code: 3,
			msg: '你的身份不合法'
		})
		return
	}
	let sql = `select * from user`;
	if (req.query.page) {
		sql += " limit " + (parseInt(req.query.page) - 1) * 10 + ",10";
	}
	pool.query(sql, [], (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "error",
				err
			})
			return
		}

		res.json({
			code: 1,
			msg: 'success',
			data
		})

	})
})
// 获取用户总条数
/**
 * url:/api/userTotal
 * method:get
 * 没有参数
 */
router.get("/userTotal", (req, res) => {
	pool.query(`select count(*) from user`, [], (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "error",
				err
			})
			return
		}
		let count = data[0]['count(*)']
		res.json({
			code: 1,
			msg: 'success',
			data,
			count
		})

	})
})
/**
 * 删除用户
 * url :'/api/deletuser
 * method:get
 * 参数：username：String类型  roles:'admin'
 */

router.get("/deletuser", (req, res) => {
	let username = req.query.username;
	let roles = req.query.roles;
	if (roles != 'admin') {
		res.json({
			code: 3,
			msg: '你没有权限'
		})
		return
	}
	pool.query(`delete from user where username=?`, [username], (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "error",
				err
			})
			return
		}
		res.json({
			code: 1,
			msg: 'success',
			data
		})

	})
})
/**
 * 新增用户
 */

router.get('/addUser', (req, res) => {
	let role = req.query.role
	if (role != 'admin') {
		res.json({
			code: 3,	
			msg: '您的身份不合法'
		})
		return
	}
	console.log(req.query);
	let {
		username,
		password,
		roles,
		avatar
	} = req.query;
	let arr = [username, password, roles, avatar]
	let sql = `insert into user (username, password, roles, avatar) values (?,?,?,?)`;
	pool.query(sql, arr, (err, data) => {
		if (err) {
			res.json({
				code: 2,
				msg: "error",
				err
			})
			return
		}
		res.json({
			code: 1,
			msg: 'success',
			data
		})
	})
})

// 更新密码
// username 
//  newPsd
// 
router.get("/updateUser", (req, res) => {
	let username = req.query.username;
	if (username) {
		pool.query(`select * from user where username=?`, [username], (err, data) => {
			if (err) {
				res.json({
					code: 2,
					msg: '出错了',
					err
				})
				return
			}
			if (data.length === 0) {
				res.json({
					code: 4,
					msg: '用户不存在',
				})
				return
			}
			if (req.query.newPsd) {
				pool.query(`update user set password=? where username=?`, [req.query.newPsd, username], (err, data) => {
					if (err) {
						res.json({
							code: 2,
							msg: '变更密码失败',
							err
						})
						return
					}
					res.json({
						code: 1,
						msg: '更新密码名成功',
						data,
						username: req.query.newUser
					})
					return
				})
			}
		})
	}

})
module.exports = router