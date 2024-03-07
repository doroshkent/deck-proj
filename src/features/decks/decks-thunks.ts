import { AppThunk } from 'app/store.ts'
import { AddDeckParams, decksAPI, UpdateDeckParams } from 'features/decks/decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from 'features/decks/decks-reducer.ts'
import { setAppRequestStatus } from 'app/app-reducer.ts'

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
  dispatch(setAppRequestStatus('loading'))
  try {
    const res = await decksAPI.getDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppRequestStatus('succeeded'))
  } catch (e) {
    dispatch(setAppRequestStatus('failed'))
  }
}

export const createDeckTC =
  (params: AddDeckParams): AppThunk =>
  async (dispatch) => {
    const res = await decksAPI.createDeck(params)
    dispatch(addDeckAC(res.data))
  }

export const deleteDeckTC =
  (id: string): AppThunk<Promise<void>> =>
  async (dispatch) => {
    return decksAPI.deleteDeck(id).then((res) => {
      dispatch(deleteDeckAC(res.data.id))
    })
  }

export const updateDeckTC =
  (params: UpdateDeckParams): AppThunk<Promise<void>> =>
  async (dispatch) => {
    return decksAPI.updateDeck(params).then((res) => {
      dispatch(updateDeckAC(res.data))
    })
  }
