import './CardForBook.scss'


export function CardForBook(props) {

  return (
    <div className="book">
      <div className="book__title">{props.book.title}</div>
      <div className="book__card-group">
        <div className="book__image">
          <img src={props.book.image} />
        </div>
        <div className="book__data">
          <div className="book__estimate">
            <div className="book__price">{props.book.price}</div>
          </div>
          <div className="book__authors"><b>Authors:</b> {props.book.authors} </div>
          <div className="book__publisher"><b>Publisher:</b> props.{props.book.publisher}, {props.book.year}</div>
          <div className="book__language"><b>language:</b> {props.book.language}</div>
          <div className="book__format"><b>Format:</b> Paper book / ebook (PDF) </div>
          <button type="button" className="btn btn-secondary">add to cart</button>
          <div className="book__preview"><a href="#">Preview book</a></div>
        </div>
      </div>
      <div className="book__subtitle">{props.book.subtitle}</div>
    </div>
  )
}
