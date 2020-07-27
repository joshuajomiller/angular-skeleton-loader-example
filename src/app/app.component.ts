import { Component } from '@angular/core';
import {Profile, ProfileService} from "./profile.service";
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skeload';
  profiles: Profile[] = [];
  skeletonComponent = ProfileComponent;
  skeletonData = new Profile();

  constructor(private profileService: ProfileService) {
    profileService.getProfiles()
      .subscribe(profiles => {
        this.profiles = profiles;
      })
  }
}
