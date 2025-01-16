import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: `./app.component.html`,
})
export class AppComponent implements OnInit{
  
  constructor(
    public  router: Router,
    private location: Location
  ){
    let path = this.location.path();
    // router.navigate(['/add']);
  }
  ngOnInit(): void {
    
  }
  
}
