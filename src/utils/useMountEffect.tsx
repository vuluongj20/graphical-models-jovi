/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

const useMountEffect = (fun: () => void) => useEffect(fun, [])

export default useMountEffect
