import { useQuery } from '@tanstack/react-query'
import { getQuote } from '../apiClient.ts'
import React from 'react'

function QuoteGen() {
  const {
    data: quote,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['quote'],
    queryFn: getQuote,
  })

  const quoteButton = () => {
    refetch()
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }

  return (
    <div>
      <p>{quote.content}</p>
      <p>{quote.author}</p>
      <button onClick={quoteButton}>More quotes here</button>
    </div>
  )
}