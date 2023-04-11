import '@/styles/globals.css'
import { PositionProvider } from '@/contexts/PositionProvider'
import { GridProvider } from '@/contexts/GridProvider'
import { GameStateProvider } from '@/contexts/GameStateProvider'

export default function App({ Component, pageProps }) {
  return (
    <PositionProvider>
      <GameStateProvider>
        <GridProvider>
          <Component {...pageProps} />
        </GridProvider>
      </GameStateProvider>
    </PositionProvider>
  )
}
