import { Component } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {

	primaryBtn(name: string) {
		console.log('registro inserido com sucesso ' + name)
	}

	secondaryBtn(e: string) {
		console.log('registro deletado com sucesso ' + e)
	}
}
