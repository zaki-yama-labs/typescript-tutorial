import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Hello from '../components/Hello'
import * as actions from '../actions'
import { StoreState } from '../types';

export function mapStateToProps({ enthusiamLevel, languageName }: StoreState) {
  return {
    enthusiamLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);