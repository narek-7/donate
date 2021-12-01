import moment from "moment";
import 'moment-precise-range-plugin';

export const calculateSumOfNumbers = (numbers) => {
	numbers = numbers.map(donate => donate.amount)
	return numbers.reduce((sum, number) => sum + number);
};

export const getFormattedTime = (date) => {
	 return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};