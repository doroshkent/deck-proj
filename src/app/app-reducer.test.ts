import { appReducer, RequestStatusType, setAppRequestStatus } from 'app/app-reducer.ts'

describe('appReducer', () => {
  // Initial state for the app
  const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
  }

  // Test case for setting app request status
  it('should handle SET-APP-REQUEST-STATUS action', () => {
    const action = setAppRequestStatus('loading')
    const expectedState = { ...initialState, status: 'loading' }
    expect(appReducer(initialState, action)).toEqual(expectedState)
  })
})
