import { DateTimePipe } from './date-time.pipe';

describe('pipes: dateTime', () => {
	it('should format a date to a date time string', () => {
		const pipe = new DateTimePipe('en');
		// year, month, day, hour, minute
		const date = new Date(1988, 6, 15, 16, 23);
		const dateString = pipe.transform(date);
		expect(dateString).toBe('15/07/1988 04:23');
	});
});
