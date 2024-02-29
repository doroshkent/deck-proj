import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI, DeckType } from 'features/decks/decks-api.ts'
import { useDispatch, useSelector } from 'react-redux'
import { setDecksAC } from 'features/decks/decks-reducer.ts'
import { AppRootState } from 'app/store.ts'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useDispatch()
  const decks = useSelector<AppRootState, DeckType[]>( (state) => state.decksReducer.decks )
  useEffect( () => {
    decksAPI.getDecks()
      .then( (res) => dispatch( setDecksAC( res.data.items ) ) )
  }, [] )
  return <ul className={ s.list }>
    {decks.map(d => (
      <li>
        <DeckItem deck={d} />
      </li>
    ))}
  </ul>
}
