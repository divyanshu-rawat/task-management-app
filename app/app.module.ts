import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StarComponent } from './shared/star.components'
import {ProductFilterPipe} from './products/product-filter.pipe'
import {ProductListComponent} from './products/product-list.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
