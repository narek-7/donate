import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import * as Utils from "../core/utils/index";

const mockDonates = [
	{ amount: 4, date: new Date() },
	{ amount: 20, date: new Date() },
	{ amount: 3, date: new Date() },
	{ amount: 1, date: new Date() },
];

export default class App {
	#donateForm;
	#donateList;

	constructor() {
		this.state = {
			donates: mockDonates,
			totalAmount: Utils.calculateSumOfNumbers(mockDonates),
		};
		this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
		this.#donateList = new DonateList(this.state.donates);
	}

	createNewDonate(newDonate) {

		this.state.donates.push(newDonate);
		console.log();
		this.state.totalAmount = this.state.totalAmount += Number(newDonate.amount);
		this.#donateList.updateDonates(this.state.donates);
		this.#donateForm.updateTotalAmount(this.state.totalAmount);
	}

	run() {
		document.body.append(this.#donateForm.render(), this.#donateList.render());
	}

}




