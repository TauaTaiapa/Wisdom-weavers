import express from 'express'
import { getQuote } from '../../client/apiClient.ts'

const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const quote = await getQuote()
    res.json(quote)
  } catch (error) {
    res.status(500)
  }
})

export default router
