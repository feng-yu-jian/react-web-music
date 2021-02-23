import request from './request';

export function getSearchSongData(keywords, limit = 6, type = 1) {
  // 搜索类型；默认为 1 即单曲
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      type
    }
  })
}
