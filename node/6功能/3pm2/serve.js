import express from 'express'

const app = express();
const router = express.Router()
app.listen(3001, () => {
    console.log('3000 running');
})

console.log('访问3001服务');