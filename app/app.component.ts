import {Component} from "@angular/core";
import {ProductService} from "./products/product.service";

@Component ({
	selector:'pm-app',
	template:
	`	<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<h3>{{pageTitle}}</h3>
			<pm-products></pm-products>
		</div>
	`,
	providers:[ProductService]
})

export class AppComponent{
	pageTitle:string = "A product Management system";
}

