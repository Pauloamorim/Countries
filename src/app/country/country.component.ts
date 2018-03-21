import { Component, OnInit } from '@angular/core';
import {CountryService} from '../service/country.service'

@Component({
  selector: 'app-country',
  template: `
  
    <div class="alert alert-danger" role="alert" *ngIf='noResultsFound'>
      No results for your search :(   
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 mx-auto">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Search information about specif country.</h5>
            <input type="text" [(ngModel)]='searchInput' class='form-control' placeholder='Name of country...'
              (keyup)='searchCountry()'><br/>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-between" >
      <div class='col-sm-3 col-md-3 col-xs-3 cards' *ngFor='let l of listCountry'>
        <img src='{{l.flag}}' width='80' >
        <br/>
        <b>Country name:</b> {{l.name}}
        <br/>
        <b>Capital:</b> {{l.capital}}
        <br/>
        <b>Region:</b> {{l.region}}
      </div>
    </div>

  `,
  styles: [
    `
    .header{
      width:50%;
      border:1px solid black;
      margin: 0 auto;
    }

    .title{
      text-align:center;
    }

    .cards { 
      width:200px;
      border: 1px solid black; 
      margin:25px ;
      padding:10px;
      border-radius:10px;
      box-shadow: 5px 5px rgba(0,0,0,0.3)
    }`,
    'img {display:block;margin:0 auto}'
  ]
})
export class CountryComponent implements OnInit {

  listCountry: Object[];
  searchInput;
  noResultsFound: boolean;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(){
    this.countryService.getCountry().subscribe(observer => {
      this.listCountry = observer as Object[];
      console.log(observer)
    })
  }
  searchCountry(){
    this.noResultsFound = false;
    if(!this.searchInput){
      this.getCountry();
    }else{    
      this.countryService.getCountryByName(this.searchInput).subscribe(observer => {
        this.listCountry = observer as Object[];
      }, error => {
        this.listCountry = null;
        this.noResultsFound = true;
      })
    }
  }

}
