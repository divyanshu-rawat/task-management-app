import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class ProductService{

	private _productUrl = 'api/products/products.json';

	constructor(private _http:Http){}

	getProducts(): Observable<IProduct[]> {

		return this._http.get(this._productUrl)
		.map((response:Response) => <IProduct[]> response.json())
		// .do( data  => console.log('All: ' + JSON.stringify(data,null,4)))
		.catch(this.handleError);
	}

	 getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

	private handleError(error: Response){

		console.log(error);
		return Observable.throw(error.json().error || 'server error');

	}

}