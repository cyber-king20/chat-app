import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import * as Loadables from './loadables';

import RootLayout from '@layouts/RootLayout';
import { Routes as AppRoutes } from '@utilities/enums';
import './assets/styles/index.css';

export const App = () => (
	<RootLayout>
		<Routes>
			<Route path={AppRoutes.BASE} element={<Navigate to={AppRoutes.CHAT_APP} />} />
			<Route path={AppRoutes.CHAT_APP} element={<Loadables.Home />} />
		</Routes>
	</RootLayout>
);
