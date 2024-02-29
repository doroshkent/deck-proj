import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch } from 'app/store.ts'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'
import { fetchDecksTC } from 'features/decks/decks-thunks.ts'
import { useDecks } from 'features/decks/decks-selectors.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useDecks()

  useEffect( () => {
    dispatch( fetchDecksTC() )
  }, [] )

  return <ul className={ s.list }>
    { decks.map( d => (
      <li>
        <DeckItem deck={ d } />
      </li>
    ) ) }
  </ul>
}
