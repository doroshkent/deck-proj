export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-APP-REQUEST-STATUS':
      return { ...state, status: action.status }
    default:
      return state
  }
}

export const setAppRequestStatus = (status: RequestStatusType) =>
  ({ type: 'APP/SET-APP-REQUEST-STATUS', status }) as const

type ActionsType = ReturnType<typeof setAppRequestStatus>
