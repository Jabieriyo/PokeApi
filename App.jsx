import { useEffect, useState } from "react"

const cat_endpoint_random_fact = 'https://catfact.ninja/fact'
//const cat_endpoint_image_url = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(cat_endpoint_random_fact)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWords = fact.split(' ', 3).join()
        console.log(firstWords)

        setImageUrl(`https://cataas.com/cat/says/${firstWords}`)

        // fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        //   .then(res => res.json())
        //   .then(response => {
        //     const { url } = response
        //     setImageUrl(url)
        //     console.log(url)
        //   })
      })

  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}


