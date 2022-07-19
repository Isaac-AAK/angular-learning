import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';


@Component({
  selector: 'app-listing-detial-page',
  templateUrl: './listing-detial-page.component.html',
  styleUrls: ['./listing-detial-page.component.css']
})
export class ListingDetialPageComponent implements OnInit {
 
  listing: Listing;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id ===id);
  }

}
