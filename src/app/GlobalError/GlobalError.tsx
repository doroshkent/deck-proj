import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { selectError } from 'app/app-selectors.ts'
import { useAppDispatch } from 'app/store.ts'
import { setAppError } from 'app/app-reducer.ts'

export const GlobalError = () => {
  const errorMessage = useSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
    return () => {
      toast.onChange(() => dispatch(setAppError(null)))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
