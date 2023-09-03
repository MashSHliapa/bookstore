// core
import { useSelector, useDispatch } from 'react-redux'
// redux
import { removeFromFavorite, setFavorite } from '../../redux/favoriteSlice'
// images
import redheart from '../images/redheart.svg'
import heart from '../images/heart.svg'
// types
import { RootState } from '../../redux/store'
import { BookResponse } from '../../types/interfaces'
import { CardForBookProps } from '../../types/interfaces'


export function FavoritesCondition(props: CardForBookProps): JSX.Element {

   const isChecked: boolean = useSelector((state: RootState) => {
      return state.favorite.data.some((item: BookResponse) => item.isbn13 === props.book.isbn13)
   })
   const dispatch = useDispatch()

   function handleClickToogleFavorite() {
      if (isChecked) {
         console.log('удалить из избранного')
         dispatch(removeFromFavorite(props.book))
      } else {
         console.log('включить избранное')
         dispatch(setFavorite(props.book))
      }
   }

   return (
      <div className="favorites-condition">
         <button type="button" className="favorites-condition__like w-100 h-100 bg-black p-3" onClick={handleClickToogleFavorite} ><img src={isChecked ? redheart : heart} alt="" /></button>
      </div>
   )
}
