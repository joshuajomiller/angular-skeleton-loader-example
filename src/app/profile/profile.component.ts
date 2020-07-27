import {Component, Input, OnInit} from '@angular/core';
import {Profile} from "../profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profileData: Profile

  constructor() { }

  ngOnInit(): void {
  }

}
