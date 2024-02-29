import { useAppSelector } from 'app/store.ts'
import { Deck } from 'features/decks/decks-api.ts'

export const useDecks = () => {
  return useAppSelector<Deck[]>( (state) => state.decksReducer.decks )
}
