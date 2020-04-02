import requests from "./requests";

export function getHomeMultiData() {
  return requests({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  console.log('type, page', type, page)
  return requests({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
