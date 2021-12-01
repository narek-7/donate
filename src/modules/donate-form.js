import { Settings as set } from "../core/constants/settings";
//test

export class DonateForm {
	#donateFormBlock;

	constructor(totalAmount, createNewDonate) {
		this.createNewDonate = createNewDonate;
		this.totalAmount = totalAmount;

		this.#donateFormBlock = document.createElement('form');
		this.#donateFormBlock.classList.add("donate-form");
	}

	updateTotalAmount(newAmount) {
		const totalAmountBlock = document.querySelector("#total-amount");
		totalAmountBlock.innerText = String(newAmount) + set.currency;
	}

	render() {
		const titleTextBlock = document.createElement('h1');
		titleTextBlock.id = "total-amount";
		titleTextBlock.innerText = `${this.totalAmount} ${set.currency}`;

		const donateForm = document.createElement('label');
		donateForm.classList.add("donate-form__input-label");
		const textForDonate = `Введите сумму в ${set.currency}`;
		const donateInput = document.createElement('input');
		donateInput.classList.add("donate-form__donate-input");
		donateInput.name = "amount";
		donateInput.type = "number";
		donateInput.max = 100;
		donateInput.min = 1;
		donateInput.required = "";
		donateForm.append(textForDonate, donateInput);

		const donateFormSubmit = document.createElement('button');
		donateFormSubmit.classList.add("donate-form__submit-button");
		donateFormSubmit.type = "submit";
		donateFormSubmit.innerText = "Задонатить";


		this.#donateFormBlock.addEventListener("submit", (event) => {
			event.preventDefault();
			const InputEl = document.querySelector(".donate-form__donate-input");
			if (InputEl.value.trim()) {
				const newDonate = {
					date: new Date(),
					amount: InputEl.value,
				};
				this.createNewDonate(newDonate);
				InputEl.value = '';
			}
		});

		this.#donateFormBlock.append(titleTextBlock, donateForm, donateFormSubmit);
		return this.#donateFormBlock;
	}
}

