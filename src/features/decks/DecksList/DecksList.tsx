import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'

export const DecksList = () => {
  useEffect( () => {
    decksAPI.getDecks()
      .then(() => console.log("success"))
  }, [] )
  return <ul className={s.list}></ul>
}
