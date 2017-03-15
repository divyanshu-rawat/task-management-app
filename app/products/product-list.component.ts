

import {Component,OnInit} from '@angular/core';
import {IProduct}  from './product';
import {ProductService} from './product.service';

@Component({
	selector:'pm-products',
    moduleId: module.id,
	templateUrl:'product-list.component.html',
	styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit{

	pageTitle:string = "Product List";
	imageWidth:number = 50;
	imageMargin:number = 2;
	imageStatus:boolean = false;
	filterBy:string = '';
	products:IProduct[];


    constructor(private _productService:ProductService){

    }

	toggleImagestatus():void{

		this.imageStatus = !this.imageStatus;

	}

	ngOnInit():void{
        console.log(ProductService);
		
        this.products = this._productService.getProducts();
	}
}

