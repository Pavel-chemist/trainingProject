import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.css']
})
export class TestCardComponent {

  public textVariable: string = "sampleData";
  public changingLabelText: string = "Input Label";

  public checkBoxState: boolean = false;

  public b1Counter: number = 0;
  
  public returnCBstate(): string {
    let stateString: string = "Default";

    if ( this.checkBoxState )
    {
      stateString = "Uncheck me!";
    }
    else
    {
      stateString = "Check me!";
    }

    return stateString;
  }

  public CountUp() {
    this.b1Counter++;
  }

  public CountDown() {
    this.b1Counter--;
  }

  public GetInputValue() {
    this.changingLabelText = "Something changed!";
    console.log("!");
  }


}
