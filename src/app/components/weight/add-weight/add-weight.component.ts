import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Weight_Measurement } from 'src/app/interfaces/weight';
import { WeightService } from 'src/app/services/weight.service';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {

  public isFetching : Boolean = false;

  public measurements? : Weight_Measurement[];

  constructor(
    private weightService : WeightService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.isFetching = true;
        this.weightService.fetchLatestMeasurements(params['guid'], 7)
          .subscribe(
            measurements => {
              this.measurements = measurements;
              this.isFetching = false;
            }
          );
      }
    );
  }

  private getDifferenceToPreviousMeasurement(indexOfMeasurement : number) : number {
    if (indexOfMeasurement === (this.measurements!.length - 1)) return 0;
    const thisValue = this.measurements![indexOfMeasurement];
    const prevValue = this.measurements![indexOfMeasurement + 1];
    const diff = prevValue.weight - thisValue.weight;
    return diff;
  }

  public getStylizedWeightDifference(indexOfMeasurement : number) : string {
    const diff = this.getDifferenceToPreviousMeasurement(indexOfMeasurement);
    if (diff < 0) {
      return `+${Math.abs(diff).toFixed(1)}`
    } else if (diff > 0) {
      return `-${diff.toFixed(1)}`
    } else {
      return "0";
    }
  }

  public getColorBasedOnDifferenceToPreviousMeasurement(indexOfMeasurement : number) : boolean {
    const diff = this.getDifferenceToPreviousMeasurement(indexOfMeasurement);
    return +diff >= 0;
  }

}
