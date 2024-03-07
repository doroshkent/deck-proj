import { Dispatch } from 'redux'
import axios from 'axios'
import { ErrorMessages } from 'features/decks/decks-api.ts'
import { setAppError } from 'app/app-reducer.ts'

export const handleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessage: string
  if (axios.isAxiosError<ErrorMessages>(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(setAppError(errorMessage))
}
