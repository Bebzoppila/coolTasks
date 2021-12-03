import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { stateType, dispatchType } from '../store/store'

export const useAppDispatch = () => useDispatch<dispatchType>()
export const useAppSelector: TypedUseSelectorHook<stateType> = useSelector