import '@styles/globals.css';
import { Html } from 'next/document';
import { Children } from 'react';

export const metadata = {
    title: "share promopt",
    description: 'Discover & Share AI prompt'
}

const layout = () => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient" />
            </div>
            
            <main className='app'>
                {Children}
            </main>
        </body>
    </html>
  )
}

export default layout