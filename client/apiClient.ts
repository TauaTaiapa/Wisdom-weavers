import request from 'superagent'
import { Root } from './models/quotes'

export async function getGreeting(): Promise<string> {
  const res = await request.get('/api/v1/greeting')
  return res.body.greeting
}

export async function getQuote(): Promise<Root> {
  const res = await request.get(`https://api.quotable.io/random`)
  return res.body
}
