import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent 
{

  private wordsToDisplay: string = "Something to be displayed";


  public getWords(): string
  {
    let cc_string: string = `Displayed string has ${this.wordsToDisplay.length} characters: \"${this.wordsToDisplay}\".`;

    return cc_string;
  }

}
