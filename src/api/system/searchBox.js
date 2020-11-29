import request from '@/utils/request'

export function getTabDomain(query) {
  return request({
    url: '/tabDomain/getTabDomain',
    method: 'get',
  })
}

export function getPublisherAll() {
  return request({
    url: '/tabPublisher/getTabPublisher',
    method: 'get'
  })
}
