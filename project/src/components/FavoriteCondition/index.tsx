// core
import { useSelector, useDispatch } from 'react-redux'
// slices
import { removeFromFavorite, addBookToFavorite } from '../../redux/favoriteSlice'
// images
import redheart from '../images/redheart.svg'
import heart from '../images/heart.svg'
// store
import { RootState } from '../../redux/store'
// types
import { BookResponse } from '../../types/interfaces'
import { BookProps } from '../../types/interfaces'


export function FavoritesCondition(props: BookProps): JSX.Element {

   const isChecked: boolean = useSelector((state: RootState) => {
      return state.favorite.data.some((item: BookResponse) => item.isbn13 === props.book.isbn13)
   })
   const dispatch = useDispatch()

   function handleClickToogleFavorite() {
      if (isChecked) {
         dispatch(removeFromFavorite(props.book))
      } else {
         dispatch(addBookToFavorite(props.book))
      }
   }

   return (
      <div className="favorites-condition">
         <button type="button" className="favorites-condition__like w-100 h-100 bg-black p-3" onClick={handleClickToogleFavorite} ><img src={isChecked ? redheart : heart} alt="" /></button>
      </div>
   )
}
