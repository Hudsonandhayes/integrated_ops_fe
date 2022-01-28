import moment from 'moment';

export default function localdate(value) {
	let ret_val = '';

	try {
		if (value && value !== undefined) {
			ret_val = moment(value).format('DD/MM/YYYY');
		}
	} catch (e) {
		console.log('exception converting to local date format');
		ret_val = value;
	}
	return ret_val;
}
