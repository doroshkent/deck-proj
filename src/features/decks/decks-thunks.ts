import { AppActions, AppThunk } from 'app/store.ts'
import { AddDeckParams, decksAPI } from 'features/decks/decks-api.ts'
import { addDeckAC, setDecksAC } from 'features/decks/decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
  const res = await decksAPI.getDecks()
  dispatch(setDecksAC(res.data.items))
}

export const createDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch<AppActions>) => {
  const res = await decksAPI.createDeck(params)
  dispatch(addDeckAC(res.data))
}
