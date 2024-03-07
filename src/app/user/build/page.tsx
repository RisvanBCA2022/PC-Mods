import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Modalcomponents from '@/components/Modalcomponents'
import PartsSelection from '@/components/ui/PartsSelection'
import React from 'react'

const page = () => {
  return (
    <MaxWidthWrapper>
     <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl"  >
        <h1 className="text-6xl font-bold">
          Build Your Dream Pc Online With{" "}
          <span className="text-indigo-600">Pc-Mods</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Craft your dream PC online with PC-Mods! Explore endless customization options for your ultimate gaming rig. Start building now!
        </p>
       
      </div>
      <PartsSelection />
    </MaxWidthWrapper>
  )
}

export default page
