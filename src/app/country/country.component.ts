import { Component, OnInit } from '@angular/core';
import {CountryService} from '../service/country.service'

@Component({
  selector: 'app-country',
  template: `
  
    <div class='header'>
      <h1 class='title'>Countries</h1>
    </div>

    <div class='cards' *ngFor='let l of listCountry'>
      <img src='{{l.flag}}' width='80' >
      <br/>
      <b>Country name:</b> {{l.name}}
      <br/>
      <b>Capital:</b> {{l.capital}}
      <br/>
      <b>Region:</b> {{l.region}}
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
      width:350px;
      border: 1px solid black; 
      margin-top:15px;
      padding:10px;
      border-radius:10px;
      box-shadow: 5px 5px rgba(0,0,0,0.3)
    }`,
    'img {display:block;margin:0 auto}'
  ]
})
export class CountryComponent implements OnInit {

  listCountry;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(){
    this.countryService.getCountry().subscribe(observer => {
      this.listCountry = observer;
      console.log(observer)
    })
  }

}
