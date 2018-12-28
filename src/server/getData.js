import { post, get } from './request.js'

// 登录
export const login = data => post('/index/Login/login', data)

export const getAddress = data => post('/index/api/getaddress', data)

export const adMasterApprove = data => post('/index/member/SetAdvertisement', data)

export const driverApprove = data => post('/index/member/SetDriverInfo', data)
