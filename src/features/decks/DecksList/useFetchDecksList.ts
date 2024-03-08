import { useAppDispatch } from 'app/store.ts'
import { useSelector } from 'react-redux'
import { selectDecks } from 'features/decks/decks-selectors.ts'
import { useLayoutEffect, useState } from 'react'
import { fetchDecksTC } from 'features/decks/decks-thunks.ts'

export const useFetchDecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDecks)
  const [isLoading, setIsLoading] = useState(false)

  useLayoutEffect(() => {
    setIsLoading(true)
    dispatch(fetchDecksTC()).finally(() => setIsLoading(false))
  }, [dispatch])

  return { decks, isLoading }
}
