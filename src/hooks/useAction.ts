import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../redux/actions/actions'

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}
