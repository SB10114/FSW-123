import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios'

function App() {
  const [value, setValue] = useState('dog')
  const [image, setImage] = useState('')
  const [alt, setAlt] = useState('')
  const [error, setError] = useState('')

  const getGif = () => {
    var url = `http://api.giphy.com/v1/gifs/search?api_key=cLMpsfE1tFk1ZzWffkC81V1AQ1o7DJ67&q=${value}&limit=1`

    console.log(url)

    axios.get(url)
      .then(res => {
        if (res.data.data.length){
          setImage(res.data.data[0].images.original.url)
          setAlt(res.data.data[0].title)
        }else {
          setError('No data found...')
        }
        console.log('Gif is successful')})
      .catch((err) => console.log(err))

      //encodeURIComponent()
  }
  useEffect(() => {

 
    getGif()
},[])

  function newQuery(e){
    e.preventDefault()

    var input = document.getElementById('input')
    setValue(input.value)

    getGif()
    console.log(value)
  }


  return (
    <div>
      {error ? (error) : <img alt = {alt} src = {image}></img>}

      <form onSubmit = {newQuery}>
        <input id = 'input' type = 'text'></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
