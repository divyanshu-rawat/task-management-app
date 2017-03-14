import {Component} from "@angular/core";


@Component ({
	selector:'pm-app',
	template:
	`	<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<h3>{{pageTitle}}</h3>
			<pm-products></pm-products>
		</div>
	`
})

export class AppComponent{
	pageTitle:string = "A product Management system";
}

