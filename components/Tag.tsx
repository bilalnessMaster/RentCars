import { Sparkles } from 'lucide-react'
import React from 'react'

const Tag = ({title} : {title : string}) => {
  return (
    <span className='flex justify-center items-center gap-2 rounded-full border-2 text-lime-600 font-outfit border-lime-400 px-2 py-1'>
        <span><Sparkles strokeWidth={1} size={14} /></span>
        <span className='text-sm'>{title}</span>
    </span>
  )
}

export default Tag