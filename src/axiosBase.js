import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://video-opinions-api.herokuapp.com/admin',
  headers: {
    'Content-Type': 'Application/json',
  }
})