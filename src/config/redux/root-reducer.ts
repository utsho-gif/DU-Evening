import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginState', 'localizeState'],
};

const appReducer = combineReducers({
  //FIXME: import when reducer needed
  //   loginState: loginReducer,
  //   forgetPasswordState: forgetPasswordReducer,
  //   changePasswordState: changePassword,
  //   securityQuestionState: securityQuestion,
  //   successState: successReducer,
  //   localizeState: LocalizeReducer,
  //   attendanceAlertState: attendanceAlertReducer,
});

const rootReducer = (state: any, action: any) => {
  //FIXME: this will be needed if translator system is required later.
  //   if (!localStorage.getItem('lang')) {
  //     localStorage.setItem('lang', 'en');
  //   }
  if (action.type === 'LOG_OUT') {
    storage.removeItem('persist:root');
    storage.removeItem('token');
    storage.removeItem('error');
    state = undefined;
  }
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof appReducer>;
export default persistReducer(persistConfig, rootReducer);
