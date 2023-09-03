import './Counter.scss'
export function Counter(props): JSX.Element {

  return (
    <div className="counter d-flex align-self-end">
      <div className="counter__minus me-5">
        <button className="border-0" data-id={props.id} onClick={props.onClickDecrement}>-</button>
      </div>
      <div className="counter__number me-5 fs-7">{props.count}</div>
      <div className="counter__plus">
        <button className="border-0" data-id={props.id} onClick={props.onClickIncrement} data-role="increment">+</button>
      </div>
    </div>
  )
}
