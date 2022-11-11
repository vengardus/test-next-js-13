import '../styles/globals.css'
import Navigation from "../components/Navigation";


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app nextjs13</title>
      </head>

      <body>
        <Navigation></Navigation> 

        {children}
      </body>
    </html>
  )
}
