import { AppRootState } from 'app/store.ts'

export const selectStatus = (state: AppRootState) => state.app.status
