import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Style from './Header.module.scss'
import { useHistory } from 'react-router-dom'

// useHistoryはhistoryオブジェクトを返す。
// このオブジェクトはURLを変えたいときに使えるhistory.pushといったメソッドを提供。
const Header = () => {
  const [term, setTerm] = useState('')
  const history = useHistory()
  const handleSubmit = e=> {
    e.preventDefault()
    history.push(`/search?query=${term}`)
  }
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        {/* ↓検索実行時にurlを遷移 */}
        <form onSubmit={ handleSubmit }>
          {/* ↓値が入力されるたびにStateが変更されるように */}
          <input 
            type="text" 
            placeholder="検索"
            onChange={e => setTerm(e.target.value)} 
            value={term}/>
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header
