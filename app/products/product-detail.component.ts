
import {Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({

	templateUrl:'app/products/product-detail.component.html'
})


export class ProductDetailComponent implements OnInit{

	pageTitle:string = 'Product Detail';
	errorMessage:String;
	product:IProduct;

	// to get the paramater from the url we use activated router !!!
	
	constructor(private _route:ActivatedRoute,private _router:Router,private _productService:ProductService){
	
	}

	ngOnInit():void{
		let id = +this._route.snapshot.params['id'];
		this.pageTitle += `: ${id}`;
		this.getProduct(id);
	}


	getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

	onBack():void{
		this._router.navigate(['/products']);
	}


}
