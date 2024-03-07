export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

export const appReducer = (state: AppStateType = initialState, action: AppActions): AppStateType => {
  switch (action.type) {
    case 'APP/SET-APP-REQUEST-STATUS':
      return { ...state, status: action.status }
    case 'APP/SET-APP-ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}

// actions
export const setAppRequestStatus = (status: RequestStatusType) =>
  ({ type: 'APP/SET-APP-REQUEST-STATUS', status }) as const
export const setAppError = (error: string | null) => ({ type: 'APP/SET-APP-ERROR', error }) as const

// types
type AppStateType = typeof initialState
export type AppActions = ReturnType<typeof setAppRequestStatus> | ReturnType<typeof setAppError>
