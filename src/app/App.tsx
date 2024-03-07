import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from 'app/GlobalError/GlobalError.tsx'
import { useSelector } from 'react-redux'
import { selectStatus } from 'app/app-selectors.ts'
import { LinearLoader } from 'common/components/Loader/LinearLoader.tsx'

export const App = () => {
  const status = useSelector(selectStatus)
  return (
    <div>
      <Decks />
      <GlobalError />
      {status === 'loading' && <LinearLoader />}
    </div>
  )
}
