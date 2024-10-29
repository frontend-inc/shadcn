import React from 'react'

function VaulWrapper({ children }: { children: React.ReactNode }) {
  return(
    <div data-vaul-drawer-wrapper="">
      <div className="relative flex min-h-screen flex-col bg-background">
        { children }
      </div>
    </div>
  )
}

export { 
  VaulWrapper
}