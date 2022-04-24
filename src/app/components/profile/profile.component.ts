import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isFetching : Boolean = false;

  public profile? : Profile;

  constructor(
    private profileService : ProfileService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.isFetching = true;
        this.profileService.fetchProfile(params['guid'])
          .subscribe(
            profile => {
              this.profile = profile;
              this.isFetching = false;
            }
          )
      }
    );
  }

}
