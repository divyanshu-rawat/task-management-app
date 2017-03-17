import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
// import { StarComponent } from './shared/star.components';
// import {ProductFilterPipe} from './products/product-filter.pipe';
// import {ProductDetailComponent} from './products/product-detail.component';
// import {ProductListComponent} from './products/product-list.component';
import { AppComponent }  from './app.component';
import {ProductModule} from './products/product.module';

@NgModule({
  imports: [ BrowserModule,
  			 HttpModule,
  			 RouterModule.forRoot([
  			 
  			 	{path: 'welcome',component:WelcomeComponent},
  			 	{path: '' , redirectTo: 'welcome' , pathMatch:'full'},
  			 	{path:'**',redirectTo:'welcome',pathMatch:'full'}

  			 	]),
         ProductModule
  			],


  declarations: [ 
  					AppComponent,
  					WelcomeComponent
  				],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
