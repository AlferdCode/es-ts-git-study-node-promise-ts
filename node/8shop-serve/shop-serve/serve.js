const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const router = express.Router();

// 登录
router.post('/user/login', async (req, res) => {
	let {
		code
	} = req.body;
	let appid = `wxf6a3e4dfd65f066b`;
	let secret = `c5d75e726b8f1ec05db8f1919e1352e4`
	
	
 //   let {{access_token,expires_in:}} = await axios({
	// 	url: 'https://api.weixin.qq.com/cgi-bin/token',
	// 	method: 'get',
	// 	params: {
	// 		appid: 'wxf6a3e4dfd65f066b',
	// 		secret,
	// 		grant_type: 'client_credential'
	// 	}
	// })
	
	
	// res.json({
	// 	code:200
	// })
	axios({
		url: 'https://api.weixin.qq.com/sns/jscode2session',
		method: 'get',
		params: {
			appid,
			secret,
			js_code: code,
			grant_type: 'authorization_code'
		}
	}).then(data => {
		console.log(data.data);
		let {
			session_key,
			openid
		} = data.data;
		// session_key oppenid 加密，在相应

		res.json({
			code: 200,
			data: {
				session_key,
				openid,
				token: 'fasldjfjasldfjlsdkjf'
			}
		})

	})
})
// 连个接口写法
router.post('/user/access', (req, res) => {
	let {
		token
	} = req.body;
	let appid = `wxf6a3e4dfd65f066b`;
	let secret = `c5d75e726b8f1ec05db8f1919e1352e4`
	axios({
		url: 'https://api.weixin.qq.com/cgi-bin/token',
		method: 'get',
		data: {
			appid,
			secret,
			grant_type: 'client_credential'
		}
	}).then(data => {
		let {
			access_token,
			expires_in
		} = data;
		// 看具体怎么施一公，不一定返回前端

		res.json({
			code: 200
		})
	})
})



// 登录和access_token 一个金额口

router.post('/user/authority', (req, res) => {
	let {
		code
	} = req.body;
	let appid = `wxf6a3e4dfd65f066b`;
	let secret = `c5d75e726b8f1ec05db8f1919e1352e4`
	let t1 = axios({
		url: 'https://api.weixin.qq.com/cgi-bin/token',
		method: 'get',
		data: {
			appid,
			secret,
			grant_type: 'client_credential'
		}
	})
	let t2  =axios({
		url: 'https://api.weixin.qq.com/cgi-bin/token',
		method: 'get',
		data: {
			appid,
			secret,
			grant_type: 'client_credential'
		}
	})
	let tasks = [t1,t2];
	Promise.all(tasks).then(data=>{
		let {
			access_token,
			expires_in
		} = data.t1;
		let {
			session_key,
			oppenid
		} = data.t2;
		res.json({
			code:100,
			access_token,
			oppenid,
		})
		
	})
})

app.use(cors())
app.use(bodyParser())
app.use(router)
app.listen(8888,()=>{
	console.log('node is ok');
})
