import { AppThunk } from 'app/store.ts'
import { decksAPI } from 'features/decks/decks-api.ts'
import { setDecksAC } from 'features/decks/decks-reducer.ts'

export const fetchDecksTC = (): AppThunk => async dispatch => {
  const res = await decksAPI.getDecks()
  dispatch(setDecksAC(res.data.items))
}
