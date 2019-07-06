import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  Item = new Item();
  items:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getitems();
  }

  getitems() {
    this.items = [];
    this.rest.getitems().subscribe((data: {}) => {
      this.items = JSON.stringify(this.countItems(data));
    });
  }

   countItems(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev),{})
  }
}

