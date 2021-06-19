import React, { createContext, FC, useState, useContext } from "react"

export interface ILayoutContext {
  isNavOpen: boolean
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  isCartOpen: boolean
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LayoutContext = createContext({} as ILayoutContext)

const LayoutProvider: FC = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <LayoutContext.Provider
      value={{
        isNavOpen,
        isCartOpen,
        setIsCartOpen,
        setIsNavOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => {
  return useContext(LayoutContext)
}

export default LayoutProvider
