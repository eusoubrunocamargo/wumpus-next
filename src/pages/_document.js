import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Wumpus Game - Jogue Agora!</title>
        <meta property="og:title" content="Wumpus Game - Jogue Agora!" />
        <meta property="og:description" content="Jogue o clássico jogo Wumpus e teste suas habilidades!" />
        <meta property="og:image" content="https://wumpus-next.vercel.app/_next/image?url=%2Fswordsman.png&w=128&q=75" />
        <meta property="og:url" content="https://wumpus-next.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Desbrave o mundo de Wumpus!" />
        <meta name="twitter:title" content="Wumpus Game - Jogue Agora!" />
        <meta name="twitter:description" content="Jogue o clássico jogo Wumpus e teste suas habilidades!" />
        <meta name="twitter:image" content="https://wumpus-next.vercel.app/_next/image?url=%2Fswordsman.png&w=128&q=75" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://wumpus-next.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
