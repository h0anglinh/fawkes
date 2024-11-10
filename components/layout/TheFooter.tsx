'use client'


/* 11_08_24    components/layout/TheFooter.tsx */
import { FC } from 'react'

interface TheFooterProps extends React.PropsWithChildren {}

export const TheFooter:FC<TheFooterProps> = (props) => {

     return (
         <div className='bg-white bg-opacity-55 backdrop-blur-md w-full z-50 fixed bottom-0'>
          <div className="flex justify-between container mx-auto">
               <span>footer</span>
               <span> +420 692 778 280</span>
               <span> Prijmame platebni karty</span>
          </div>
         </div>
     )
}

export default TheFooter