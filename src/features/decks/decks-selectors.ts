import { useAppSelector } from 'app/store.ts'
import { DeckType } from 'features/decks/decks-api.ts'

export const useDecks = () => {
  return useAppSelector<DeckType[]>( (state) => state.decksReducer.decks )
}
