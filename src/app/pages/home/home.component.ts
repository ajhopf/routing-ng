import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	userFirstName = 'user'
	userAge = 0
	userNickname = ''

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		console.log(this.route.snapshot.params)

		//na rota > mais usual de ser utilizado
		if (this.route.snapshot.params['fname']) {
			this.userFirstName = this.route.snapshot.params['fname']
		}

		//via query params
		if (this.route.snapshot.queryParams['idade']) {
			console.log(this.route.snapshot.queryParams)
			this.userAge = this.route.snapshot.queryParams['idade']
		}
		if (this.route.snapshot.queryParams['apelido']) {
			this.userNickname = this.route.snapshot.queryParams['apelido']
		}
	}
}
