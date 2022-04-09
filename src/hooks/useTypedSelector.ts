import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { StateType } from '../redux/store'

export const useTypedSelector: TypedUseSelectorHook<StateType> = useSelector
