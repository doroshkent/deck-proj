import { AppThunk } from 'app/store.ts'
import { AddDeckParams, decksAPI, UpdateDeckParams } from 'features/decks/decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from 'features/decks/decks-reducer.ts'
import { setAppRequestStatus } from 'app/app-reducer.ts'
import { handleError } from 'common/utils/handle-error.ts'

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
  dispatch(setAppRequestStatus('loading'))
  try {
    const res = await decksAPI.getDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppRequestStatus('succeeded'))
  } catch (e) {
    handleError(e, dispatch)
    dispatch(setAppRequestStatus('failed'))
  }
}

export const createDeckTC =
  (params: AddDeckParams): AppThunk =>
  async (dispatch) => {
    try {
      const res = await decksAPI.createDeck(params)
      dispatch(addDeckAC(res.data))
    } catch (e) {
      handleError(e, dispatch)
    }
  }

export const deleteDeckTC =
  (id: string): AppThunk<Promise<void>> =>
  async (dispatch) => {
    try {
      const res = await decksAPI.deleteDeck(id)
      dispatch(deleteDeckAC(res.data.id))
    } catch (e) {
      handleError(e, dispatch)
    }
  }

export const updateDeckTC =
  (params: UpdateDeckParams): AppThunk<Promise<void>> =>
  async (dispatch) => {
    try {
      const res = await decksAPI.updateDeck(params)
      dispatch(updateDeckAC(res.data))
    } catch (e) {
      handleError(e, dispatch)
    }
  }
