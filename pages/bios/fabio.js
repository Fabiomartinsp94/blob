import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const YourComponent = () => (
    <Image
    src="/images/nome facil.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
    />
    )

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blob</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div>
                
                <h1 className="title">
                     Fábio
                     
                </h1>
             <h2>
                 guilherme chupa minhas bolas
             </h2>
             {YourComponent()}
            </div>
        </main>
    </div>
  )
}
