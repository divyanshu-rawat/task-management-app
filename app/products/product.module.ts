import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
// import {StarComponent} from '../shared/star.components';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({

	declarations:[

		ProductListComponent,
		ProductDetailComponent,
		ProductFilterPipe
		// StarComponent
	],
	imports:[
		SharedModule,
		// FormsModule,
		// CommonModule,
		RouterModule.forChild([
			 	{path: 'products',component: ProductListComponent},
  			 	{path: 'products/:id',component:ProductDetailComponent},
			])
	],
	providers:[ProductService]
})

export class ProductModule{}