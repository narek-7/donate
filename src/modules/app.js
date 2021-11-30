import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";

export default class App {
	#donateForm;
	#donateList;

	constructor() {
		this.state = {
			donates: [],
			totalAmount: 0,
		};
		this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
		this.#donateList = new DonateList(this.state.donates);
	}

	#getTotalAmount(donatesList) {
		let total = 0;
		donatesList.forEach((donate) => total += donate.amount);
		return total;
	};

	createNewDonate(newDonate) {
		
		this.state.donates.push(newDonate);
		console.log();
		this.state.totalAmount = this.#getTotalAmount(this.state.donates);
		this.#donateList.updateDonates(this.state.donates);
		this.#donateForm.updateTotalAmount(this.state.totalAmount);
	}

	run() {
		document.body.append(this.#donateForm.render(), this.#donateList.render());
	}

}