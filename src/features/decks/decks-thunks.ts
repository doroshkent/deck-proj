import { AppActions, AppThunk } from 'app/store.ts'
import { decksAPI } from 'features/decks/decks-api.ts'
import { createDeckAC, setDecksAC } from 'features/decks/decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = (): AppThunk => async dispatch => {
  const res = await decksAPI.getDecks()
  dispatch( setDecksAC( res.data.items ) )
}

export const createDeckTC = (title: string) => async (dispatch: Dispatch<AppActions>) => {
  return decksAPI.createDeck( title ).then( (res) => {
    dispatch( createDeckAC( res.data ) )
  } )
}
