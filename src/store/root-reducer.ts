import { Reducer, combineReducers } from 'redux';

import chat from '@store/branches/chat/reducer';

export default (): Reducer =>
	combineReducers({
		chat
	});
