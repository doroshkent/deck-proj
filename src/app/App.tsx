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
      <footer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </footer>
    </div>
  )
}
