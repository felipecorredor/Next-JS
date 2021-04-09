import "bootswatch/dist/litera/bootstrap.min.css"
import { Navbar } from "../components/Navbar"

export default function MyApp({ Component, pageProps }) {
   return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}