// images
import starBlack from '../images/starBlack.png'
import starWhite from '../images/starWhite.png'


export function Rating({ rating }: { rating: string }): JSX.Element {
  function renderRatingStar(): JSX.Element[] {
    const star = []

    for (let i: number = 1; i <= 5; i++) {
      star.push(
        <img key={i} src={i <= Number(rating) ? starBlack : starWhite} />
      )
    }
    return star
  }

  return (
    <div className="rating d-flex justify-content-around w-50 h1">
      {renderRatingStar()}
    </div>
  )
}
