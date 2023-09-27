import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export function useFilter () {
  const context = useContext(FilterContext)

  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }

  return context
}
