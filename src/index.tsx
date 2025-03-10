import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@store/index';
import { App } from './app';

import { TooltipProvider } from '@components/ui/tooltip';

export const store = configureStore();

const node: HTMLElement | null = document.getElementById('app') || document.createElement('div');
const root = createRoot(node);

const renderRoot = (Application: any): void => {
	root.render(
		<Provider store={store}>
			<BrowserRouter>
				<TooltipProvider>
					<Application />
				</TooltipProvider>
			</BrowserRouter>
		</Provider>
	);
};

renderRoot(App);
