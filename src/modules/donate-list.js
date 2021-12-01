import { Settings } from "../core/constants/settings";
import * as Utils from "../core/utils/index";
// test 2

export class DonateList {

	constructor(donates) {
		this.donates = donates;
	}

	render() {
		const donatesContainer = document.createElement('div');
		donatesContainer.classList.add("donates-container");
		const containerTitle = document.createElement("h2");
		containerTitle.classList.add("donates-container__title");
		containerTitle.innerText = "Список донатов";
		const donatesList = document.createElement("div");
		donatesList.classList.add("donates-container__donates");
		this.donates.forEach(donate => donatesList.append(this.#getDonatesItems(donate)));
		donatesContainer.append(containerTitle, donatesList);
		return donatesContainer;
	}

	updateDonates(updatedDonates) {
		const donatesList = document.querySelector(".donates-container__donates");
		while (donatesList.hasChildNodes()) {
			donatesList.removeChild(donatesList.firstChild);
		}
		updatedDonates.forEach(donate => donatesList.append(this.#getDonatesItems(donate)));
	}

	#getDonatesItems(item) {
		const donateItem = document.createElement("div");
		donateItem.classList.add("donate-item");
		const donationAmount = document.createElement("b");
		donationAmount.append(item.amount, Settings.currency);
		donateItem.append(Utils.getFormattedTime(item.date), " - ", donationAmount);
		return donateItem;
	};
}