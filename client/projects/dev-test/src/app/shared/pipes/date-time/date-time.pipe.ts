import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { DateTimePipeConfig } from './date-time.const';

@Pipe({
	name: 'dateTime'
})
export class DateTimePipe extends DatePipe implements PipeTransform {
	transform(value: any): string | null {
		return super.transform(value, DateTimePipeConfig.DATE_TIME);
	}
}
