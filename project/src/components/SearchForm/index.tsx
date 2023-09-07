import { useNavigate } from 'react-router-dom'
import { useState, ChangeEvent, FormEvent } from 'react'

export function SearchForm() {
const [query, setQuery] = useState('')
const navigate = useNavigate()
  function handleInputQuery(event: ChangeEvent<HTMLInputElement>) {
    (setQuery(event.target.value))
  }
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
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
