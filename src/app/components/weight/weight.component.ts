import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';
import { Weight_Measurement } from 'src/app/interfaces/weight';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  public isFetching : Boolean = false;

  public profile? : Profile;

  constructor(
    private profileService : ProfileService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.isFetching = true;
    //     this.profileService.fetchProfile(params['guid'])
    //       .subscribe(
    //         profile => {
    //           this.profile = profile;
    //           this.isFetching = false;
    //         }
    //       );
    //   }
    // );
  }

}
