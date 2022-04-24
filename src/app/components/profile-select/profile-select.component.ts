import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.css']
})
export class ProfileSelectComponent implements OnInit {

  public isFetching : Boolean = false;

  public profiles? : Profile[];

  constructor(
    private profileService : ProfileService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchProfiles();
  }

  public selectUser(guid : string) : void {
    this.router.navigate([guid,"weight","add"], {relativeTo: this.route})
  }

  public createProfile() {
    console.log("create clicked");
  }

  public fetchProfiles() : void {
    this.isFetching = true;
    this.profileService.fetchProfiles()
      .subscribe(
        profiles => {
          //console.log(tiles);
          this.profiles = profiles;
          this.isFetching = false;
        }
      );
  }

}
