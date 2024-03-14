import { useQuery } from '@tanstack/react-query'
import { getQuote } from '../apiClient'
import React, { useState } from 'react'

interface Quote {
  content: string;
  author: string;
}

function QuoteGen() {
  const [savedQuotes, setSavedQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);

  const {
    data: fetchedQuote,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['quote'],
    queryFn: getQuote,
  })

  React.useEffect(() => {
    setQuote(fetchedQuote);
  }, [fetchedQuote]);

  const handleSave = () => {
    if (quote) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  }

  const handleDelete = (index: number) => {
    const updatedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(updatedQuotes);
  }

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
    <div className="container mx-auto py-8">
      {quote && (
        <div className="mb-8">
          <p className="text-lg font-semibold">{quote.content}</p>
          <p className="text-gray-600">{quote.author}</p>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
            onClick={handleSave}
          >
            Save Quote
          </button>
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={quoteButton}
          >
            More quotes here
          </button>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold mb-4">Saved Quotes</h2>
        {savedQuotes.map((savedQuote, index) => (
          <div key={`${savedQuote.content}-${index}`} className="mb-4">
            <p className="text-lg font-semibold">{savedQuote.content}</p>
            <p className="text-gray-600">{savedQuote.author}</p>
            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuoteGen
