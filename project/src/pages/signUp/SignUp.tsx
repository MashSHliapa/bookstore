import { useState, ChangeEvent, FormEvent } from 'react'
// styles
import './SignUp.scss'

export function SignUp(): JSX.Element {

  const [name, setName] = useState<string>('')
  function hangleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
    console.log(event.target.value)
  }

  const [email, setEmail] = useState<string>('')
  function hangleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
    console.log(event.target.value)
  }

  const [password, setPassword] = useState<string>('')
  function hangleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  const [passwordConfirm, setpasswordConfirm] = useState('')
  function handleInputPasswordConfirm(event: ChangeEvent<HTMLInputElement>) {
    setpasswordConfirm(event.target.value)
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (password === passwordConfirm) {
      alert(`Your email: ${email}, Your password: ${password} `)
    } else {
      alert('Check your password')
    }
  }

  return (
    <div className="sign-up">
      <form className="form mt-3 mb-5" onSubmit={handleSubmitForm}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Your name" value={name} onChange={hangleChangeName} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your email" value={email} onChange={hangleChangeEmail} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" placeholder="Your password" value={password} onChange={hangleChangePassword} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputConfirmPassword" placeholder="Confirm your password" value={passwordConfirm} onChange={handleInputPasswordConfirm} />
        </div>
        <button type="submit" className="btn btn-secondary">SIGN Up</button>
      </form>
    </div>
  )
}
