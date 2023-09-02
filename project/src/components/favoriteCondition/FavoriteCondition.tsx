import { useSelector, useDispatch } from 'react-redux'
import { removeFromFavorite, setFavorite } from '../../redux/favoriteSlice'
import redheart from '../images/redheart.svg'
import heart from '../images/heart.svg'
import './FavoriteCondition.scss'


export function FavoritesCondition(props): JSX.Element {

   const isChecked: boolean = useSelector(state => {
      return state.favorite.data.some(item => item.isbn13 === props.book.isbn13)
   })
   const dispatch = useDispatch()

   function handleClickFavorite() {
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
         <button type="button" className="like" onClick={handleClickFavorite} ><img src={isChecked ? redheart : heart} alt="" /></button>
      </div>
   )
}
