import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import{StarComponent} from './star.components';



@NgModule({

	declarations:[StarComponent],
	imports:[CommonModule,FormsModule],
	exports:[
		CommonModule,
		FormsModule,
		StarComponent
	]
})

export class SharedModule{}