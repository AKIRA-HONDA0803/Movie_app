import React, { useEffect, useContext }from 'react'
import Layout from '../components/Layout/Layout'
import { useLocation } from "react-router-dom"
import { fetchSearchData } from '../apis'
import { Store } from '../store/index'

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location= useLocation()
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({type: 'SET_SEARCHED', payload: {searched: res.data.items}})
      })
    }
  }
  useEffect(() => {
    setSearchResult()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Layout>
      Search page
    </Layout>
  )
}

export default Search
