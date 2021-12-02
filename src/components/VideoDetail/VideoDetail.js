import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis/index'
import { Store } from '../../store/index'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import Linkify from 'react-linkify'

// useLocationを使用することで現在のurlのパスやサーチパラメーターなどの情報を取得できる
const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store)

  
  const location = useLocation()
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res) =>{
      const item = res.data.items.shift()
      setGlobalState({ type: 'SET_SELECTED', payload: {selected: item}})
  })
  }
  useEffect(() => {
    setSelectedVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])
  // idがなければno dataを返す
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      {/* <pre></pre>は整形済みの文をそのまま表示する */}
      {/* urlに対してリンクを追加する */}
      <Linkify>
      <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (<span>no data</span>)
}

export default VideoDetail
