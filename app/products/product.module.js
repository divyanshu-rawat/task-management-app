"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {FormsModule} from '@angular/forms';
// import {CommonModule} from '@angular/common';
var router_1 = require("@angular/router");
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
// import {StarComponent} from '../shared/star.components';
var product_service_1 = require("./product.service");
var shared_module_1 = require("../shared/shared.module");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        declarations: [
            product_list_component_1.ProductListComponent,
            product_detail_component_1.ProductDetailComponent,
            product_filter_pipe_1.ProductFilterPipe
            // StarComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            // FormsModule,
            // CommonModule,
            router_1.RouterModule.forChild([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'products/:id', component: product_detail_component_1.ProductDetailComponent },
            ])
        ],
        providers: [product_service_1.ProductService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map