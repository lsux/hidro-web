import React from 'react'

const authLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen max-h-screen'>
        {children}
    </div>
  )
}

export default authLayout

