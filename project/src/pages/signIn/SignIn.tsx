import { useState, ChangeEvent, FormEvent } from 'react'
import './SignIn.scss';


export function SignIn(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  function hangleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  const [password, setPassword] = useState<string>('')
  function hangleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert(`Your email: ${email}, Your password: ${password} `)
  }

  return (
    <div className="sign-in">
      <form className="form mt-3 mb-5" onSubmit={handleSubmitForm} >
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your email" value={email} onChange={hangleChangeEmail} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword" placeholder="Your password" value={password} onChange={hangleChangePassword} />
        </div>
        <div id="passwordHelp" className="form-text mb-5">Forgot password ?</div>
        <button type="submit" className="btn btn-secondary">SIGN IN</button>
      </form>
    </div>
  )
}
