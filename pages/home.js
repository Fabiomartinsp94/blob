import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blob</title>
        <link rel="icon" href="/logo1.png" />
        </Head>

        <main>
                
                <h1 className="title">
                     Bem vindo ao Blob
                </h1>
                  <p className="description">
                    esperamos que o blob possa te ajudar como leitor, tanto quanto ajuda a nós como editores
                </p>
            
                <div className="grid">
          <a href="/posts" className="card">
            <h3>Posts &rarr;</h3>
            <p>Lista dos nossos posts</p>
          </a>

          <a href="/bios" className="card">
            <h3>Bios &rarr;</h3>
            <p>Conheça os autores!</p>
          </a>

          
        </div>
        </main>
        <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src=" /logo1.svg" alt="logo1" className="logo" />
        </a>
      </footer>
        <style jsx>{`
        .container {
          background-color: #004400;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;  
        }

        main { 
          background-color: #004400;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #adff2f;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: 	#dcdcdc;
          text-decoration: none;
        }

        .title a {
          color: 	#dcdcdc;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .subtitle,
        .description {
          color: 	#bcbcbc;
          text-align: center;
        }

        
        .subtitle {
          margin: 0;
          line-height: 1.5;
          font-size: 1.7rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          color: 	#bcbcbc;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: left;
          justify-content: center;
          flex-wrap: flex;

          max-width: 800px;
          margin-top: 4rem;
        }


        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 2rem;
          text-align: center;
          color: 	#bcbcbc;
          text-decoration: none;
          border: 1px solid;
          border-radius: 15px;
          transition: color 0.5s ease, border-color 0.5s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #adff2f;
          border-color: #adff2f;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 5em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


