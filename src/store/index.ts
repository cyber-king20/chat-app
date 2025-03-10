import { Store, createStore } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { initialState as chat } from '@store/branches/chat/reducer';
import rootReducer from './root-reducer';

const initialState = {
	chat
};

export const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export function configureStore(): Store<typeof initialState> {
	const store: Store<typeof initialState> = createStore(rootReducer(), initialState);

	return store;
}
