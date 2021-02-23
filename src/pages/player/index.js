import React, { memo } from 'react'

import { SongDetailWrapper, SongLeft, SongRight } from './style'

import SongInfo from './child-pages/song-info'
import SongComment from './child-pages/song-comment'

import { useGlobalKeyboardEvent } from '../../hooks/change-state'

// 歌曲详情页面
export default memo(function FSongDetail(props) {
  useGlobalKeyboardEvent()
  return (
    <SongDetailWrapper>
      <div className="content w980">
        <SongLeft>
          <SongInfo />
          <SongComment />
        </SongLeft>
        <SongRight>
          <h2>SongInclude 包含音乐</h2>
          <h2>SongRelevant 相关音乐</h2>
          <h2>客户端下载</h2>
        </SongRight>
      </div>
    </SongDetailWrapper>
  )
})
