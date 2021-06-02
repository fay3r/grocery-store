import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
//    this.filterByCategory('root')
  }

  // filterByCategory(categoryId: string){
  //   this.filteredList = this.cats.filter(cat => cat.parent_id == categoryId)
  // }

}
