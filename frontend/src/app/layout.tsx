import ReduxProvider from "@/components/ReduxProvider";
import './globals.css'


export const metaData = {
  title : 'Pet Finder',
  description : 'Find your perfect pet companion'

}

export default function RootLayout ({children}:{ children: React.ReactNode }){
  return (
    <html lang="eg">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}