import React, { ReactElement } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

const TooltipModified = ({
	tooltipText,
	children,
	side = 'right'
}: {
	tooltipText: string | ReactElement;
	children: ReactElement;
	side?: 'left' | 'right' | 'top' | 'bottom';
}) => {
	return (
		<Tooltip delayDuration={300}>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent side={side} className="p-1 max-w-[300px]">
				<p className="text-xs">{tooltipText}</p>
			</TooltipContent>
		</Tooltip>
	);
};

export { TooltipModified };
