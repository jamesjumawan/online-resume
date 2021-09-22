import { Component, OnInit, HostListener } from '@angular/core';
import {
  ballOneTrigger,
  ballTwoTrigger, 
  ballThreeTrigger, 
  ballFourTrigger,
  ballOneWrapper,
  ballTwoWrapper,
  ballThreeWrapper,
  ballFourWrapper
} from './test.animations';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css'],
  animations: [
    ballOneTrigger,
    ballTwoTrigger, 
    ballThreeTrigger, 
    ballFourTrigger,
    ballOneWrapper,
    ballTwoWrapper,
    ballThreeWrapper,
    ballFourWrapper
  ]
})
export class BallsComponent implements OnInit {

  public ballState: string = "idle";

  public testStateB: string = "stateB1";

  public one:any;

  
  ball = document.getElementsByClassName("ball");

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onscroll(event:any){
    if(this.ballState!="stop"){
      if (window.pageYOffset < 300) {
        if (this.ballState != "idle") {
          this.ballState = "idle";
        }
      } else if (window.pageYOffset < 1000) {
        if (this.ballState != "about") {
          this.ballState = "about";
        }
      } else if (window.pageYOffset < 1900) {
        if (this.ballState != "prog1" && this.ballState != "prog2") {
          this.ballState = "prog1";
        }
      } else if (window.pageYOffset < 2800) {
        if (this.ballState != "web1" && this.ballState != "web2") {
          this.ballState = "web1";
        }
      } else if (window.pageYOffset < 30000) {
        if (this.ballState != "edu") {
          this.ballState = "edu";
        }
      }
    }
  }

  test = document.getElementById('about1')?.getBoundingClientRect().left;

  testFunc(){

    // if (this.testStateB == "stateB1") {
    //   this.testStateB = "stateB2";
    // } else {
    //   this.testStateB = "stateB1";
    // }

    // if (this.ballState != "stop") {
    //   this.ballState = "stop";
    //   this.nextBallState = "stop";
    // } else {
    //   this.ballState = "idle1"
    //   this.nextBallState = "idle2";
    // }

    var other = document.getElementsByClassName("cell");

    var test: Element;

    test = other[0];

    // console.log(test.getBoundingClientRect().left);

    // console.log(other[0].getBoundingClientRect().top);

    console.log(document.getElementById('about1')?.getBoundingClientRect().left);
    console.log(test);
    

  }
}