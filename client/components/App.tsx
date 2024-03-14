import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import QuoteGen from './QuoteGen.tsx'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const [count, setCount] = useState(0)

  const {
    data: greeting,
    isError,
    isPending,
  } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  if (isPending) return <p className='text-cyan-300 bg-amber-400'>Loading...</p>

  return (
    <>
      {/* {count}
      <h1 className="text-3xl font-bold underline">{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      <div className="header">
        <h2>Salutations, one who lacks knowledge</h2>
        <p>You have come to this website for one reason and one reason only.</p>
        <p>You wish to be enlightened, do you not?</p>
        <p>You have come to the right place.</p>
        <p>Step forward, into the light</p>
        <p>And let us weave wisdom into your mind...</p>
      </div>
      <div>
        <QuoteGen/>
      </div>
    </>
  )
}

export default App
