import Image from 'next/image'
import { FC } from 'react'

const ChatHeader: FC = () => {
  return (
    <div className='w-full flex gap-3 justify-start items-center text-zinc-800 '>
      <div className='flex flex-col items-start text-sm'>
        <p className='text-xs'>Chat with</p>
        <div className='flex gap-1.5 items-center'>
          <Image src="/Chatbot.png" alt='chatbot' width={50} height={50} />
          <p className='font-medium'>Pc-Mods Buddy</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
