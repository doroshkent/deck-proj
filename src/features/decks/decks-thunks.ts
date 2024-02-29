import { AppThunk } from 'app/store.ts'
import { decksAPI } from 'features/decks/decks-api.ts'
import { createDeckAC, setDecksAC } from 'features/decks/decks-reducer.ts'

export const fetchDecksTC = (): AppThunk => async dispatch => {
  const res = await decksAPI.getDecks()
  dispatch( setDecksAC( res.data.items ) )
}
export const createDeckTC = (title: string): AppThunk => async dispatch => {
  const res = await decksAPI.createDeck( title )
  dispatch( createDeckAC( res.data ) )
}
