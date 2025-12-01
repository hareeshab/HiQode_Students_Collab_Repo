
import { useEffect, useState } from 'react'

export function useLocalState(key, initial) {
  const [val, setVal] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(val))
    } catch {}
  }, [key, val])
  return [val, setVal]
}
