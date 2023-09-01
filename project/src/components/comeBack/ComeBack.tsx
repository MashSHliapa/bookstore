import arrow from '../images/arrow.png'
import './ComeBack.scss'

export function ComeBack() {
  function handleClickImage() {
    window.history.back()
  }

  return (
    <div className="come-back" onClick={handleClickImage}>
      <img src={arrow} />
    </div>
  )
}
