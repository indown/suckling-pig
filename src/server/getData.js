import { post, get } from './request.js'

// 登录
export const login = data => post('/index/Login/login', data)

// 获取我的信息
export const getMyInfo = data => get('/index/member/GetMyInfo', data)

// 获取汽车地址
export const getAddress = data => post('/index/api/getaddress', data)

// 广告主认证
export const adMasterApprove = data => post('/index/member/SetAdvertisement', data)

// 司机认证
export const driverApprove = data => post('/index/member/SetDriverInfo', data)
