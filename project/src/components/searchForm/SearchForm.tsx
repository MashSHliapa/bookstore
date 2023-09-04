import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function SearchForm() {
const [query, setQuery] = useState('')
const navigate = useNavigate()
  function handleInputQuery(event) {
    (setQuery(event.target.value))
    console.log(query)
  }
  function handleSubmitForm(event) {
    event.preventDefault()
    console.log(query)
    navigate(`/search/${query}/1`)
  }

  return (
    <>
      <form onSubmit={handleSubmitForm} >
        <input type="text" className="form-control" id="inputSearch" placeholder="Search" value={query} onChange={handleInputQuery} />
      </form>
    </>
  )
}
