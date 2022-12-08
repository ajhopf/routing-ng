import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	OnChanges,
	OnInit,
	SimpleChanges
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked {
	ngOnInit() {
		console.log('AppComponent iniciado')
		setTimeout(
			() => {this.peopleArray = ['André', 'Rachel', 'Marley']},
			2000)
	}


	ngOnChanges(changes: SimpleChanges) {
		console.log(changes)
		console.log('hi')
	}

	ngDoCheck() {}

	ngAfterContentInit() {}

	ngAfterContentChecked() {}

	ngAfterViewInit() {}

	ngAfterViewChecked() {}


	peopleArray = ["André", "Rachel"]

	primaryBtn(name: string) {
		console.log('registro inserido com sucesso ' + name)
	}

	secondaryBtn(e: string) {
		console.log('registro deletado com sucesso ' + e)
	}
}
