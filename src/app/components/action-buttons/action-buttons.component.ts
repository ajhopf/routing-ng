import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-action-buttons',
	templateUrl: './action-buttons.component.html',
	styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {
	@Input() buttonTitlePrimary = 'Salvar'
	@Input() buttonTitleSecondary = 'Cancelar'
	@Output() primaryButtonClick = new EventEmitter<string>();
	@Output() secondaryButtonClick = new EventEmitter<string>();

	onPrimaryBtnClick() {
		console.log('primário ' + this.buttonTitlePrimary)
		this.primaryButtonClick.emit(this.buttonTitlePrimary)
	}

	onSecondaryBtnClick() {
		console.log('secundário ' + this.buttonTitleSecondary)
		this.secondaryButtonClick.emit(this.buttonTitleSecondary)
	}
}
