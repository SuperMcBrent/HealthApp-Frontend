import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ProfileSelectComponent } from '../components/profile-select/profile-select.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AddWeightComponent } from '../components/weight/add-weight/add-weight.component';
import { CompareWeightComponent } from '../components/weight/compare-weight/compare-weight.component';
import { PreviousWeightComponent } from '../components/weight/previous-weight/previous-weight.component';
import { WeightComponent } from '../components/weight/weight.component';

const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

const routes: Routes = [
  { path:"", component: ProfileSelectComponent},
  { path: ":guid", component: ProfileComponent, children: [
    { path: "weight", component: WeightComponent, children: [
      { path:"add", component: AddWeightComponent},
      { path:"previous", component: PreviousWeightComponent},
      { path:"compare", component: CompareWeightComponent},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
