import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products: Product[];

  constructor(private productService: ProductService) {

  }


  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }
}
