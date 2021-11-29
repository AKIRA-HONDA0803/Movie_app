import axios from 'axios'
// import { config } from "./apikey"
const KEY = process.env.REACT_APP_API_KEY;
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
})

export const fetchPopularData = async () => {
  return await youtube.get('/videos',{
    params: {
      part: 'snippet',
      maxResults: 40,
      key:KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular'
    }
  })
}