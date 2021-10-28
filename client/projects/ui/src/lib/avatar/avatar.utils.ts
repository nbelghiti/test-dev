export const getInitials = (name: string): string => {
	const names = name.split(' ');
	let initials = names[0].slice(0, 1);

	if (names.length > 1) {
		initials += names[names.length - 1].slice(0, 1);
	}

	return initials.toUpperCase();
};
