import { Component, OnInit } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faBed, faDog, faUser, faUsersCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser =faUser;
  faDog = faDog;
  faBed =faBed;
  faUsersCog =faUsersCog;
  faDotCircle = faDotCircle;


  constructor() { }

  ngOnInit() {
  }

}
