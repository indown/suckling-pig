import wepy from 'wepy'

const host = 'https://xiaoruzhu.xq.hk/public/index.php'
const header = {
  'content-type': 'application/x-www-form-urlencoded'
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: host + url,
      data: data,
      method: 'post',
      header
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function get(url, data) {
  return new Promise((resolve, reject) => {
    wepy.request({
      url: host + url,
      data: data,
      method: 'get',
      header
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
