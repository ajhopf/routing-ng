import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	itemEscolhido = ''

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.params.subscribe(() => {
			this.itemEscolhido = this.route.snapshot.params['product']
		})
	}
}
