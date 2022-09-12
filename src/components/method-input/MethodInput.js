import styles from './MethodInput.module.css';
import { useReducer } from 'react';
import { classVariablesActions } from '../../store/class-variables';
import { useDispatch } from 'react-redux/es/exports';
import RemoveInputField from '../Buttons/RemoveInputField';

const initialState = { returns: '', name: '', params: '', isMethodPrivate: false };

const methodReducer = (state, action) => {
  if (action.type === 'RETURNS') {
    return { ...state, type: action.value };
  } else if (action.type === 'NAME') {
    return { ...state, name: action.value };
  } else if (action.type === 'PARAMS') {
    return { ...state, includesGetter: !state.includesGetter };
  } else if (action.type === 'IS_METHOD_PRIVATE') {
    return { ...state, includesSetter: !state.includesSetter };
  } else {
    return initialState;
  }
};

function MethodInput(props) {
  const [state, dispatchActions] = useReducer(methodReducer, initialState);

  const dispatch = useDispatch();

  const handleTextChange = event =>
    dispatchActions({ type: event.target.name, value: event.target.value });

  const handleChange = event => {
    if (event.target.type === 'text') {
      dispatchActions({ type: event.target.name, value: event.target.value });
    } else if (event.key === 'Enter') {
      dispatchActions({ type: event.target.name, value: event.target.value });
    }
    dispatch(classVariablesActions.updateVariable({ values: state, id: props.id }));
  };

  return (
    <div className='row'>
      <div className='col-7'>
        <input
          name='RETURNS'
          type='text'
          placeholder='Return Type'
          value={state.returns}
          onChange={handleTextChange}
          onBlur={handleChange}
        />

        <input
          name='NAME'
          type='text'
          placeholder="Method's name"
          value={state.name}
          onChange={handleTextChange}
          onBlur={handleChange}
        />
        <input
          name='PARAMS'
          type='text'
          placeholder='Params (seperated by commas)'
          value={state.name}
          onChange={handleTextChange}
          onBlur={handleChange}
        />
      </div>

      <div className='col-4'>
        <label>
          <input
            name='IS_METHOD_PRIVATE'
            type='checkbox'
            checked={state.isMethodPrivate}
            onKeyPress={handleChange}
            onChange={handleChange}
          />{' '}
          Private?
        </label>
      </div>
      <div className='col-1'>
        <RemoveInputField type={'method'} id={props.id} />
      </div>
    </div>
  );
}

export default MethodInput;
