import { experimental_use as use, Suspense } from 'react'
import GPS from './gps.jsx'


const Names = () => {
  const ids = use(fetch("/ids.json").then((res) => res.json()));

  return <div>{JSON.stringify(ids)}</div>

}

function App() {
  return (
    <div className="App">
      <Suspense>
        <Names />
        <GPS />
      </Suspense>
    </div>
  )
}

export default App
