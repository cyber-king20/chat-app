import { cn } from '@src/lib/utils';
import React from 'react';

const AVATAR_COLORS = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200'];

const InitialsAvatar = ({ name, classNames }: { name: string; classNames?: string }) => {
	const colorClass = AVATAR_COLORS[(name?.length || 0) % AVATAR_COLORS.length];
	return (
		<div className={cn(' flex items-center justify-center  px-3 py-2 rounded-full', colorClass, classNames)}>
			{!!name && name[0]}
		</div>
	);
};

export default InitialsAvatar;
