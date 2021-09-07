import { Component, OnInit, HostListener } from '@angular/core';
import { ballOneTrigger, ballTwoTrigger, ballThreeTrigger, ballFourTrigger } from './balls.animation';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css'],
  animations: [
    ballOneTrigger,
    ballTwoTrigger, 
    ballThreeTrigger, 
    ballFourTrigger
  ]
})
export class BallsComponent implements OnInit {

  public ballState: string = "idle1";
  public nextBallState: string = "idle2";

  public one:any;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onscroll(event:any){
    if(this.ballState!="stop"){
      if (window.pageYOffset < 300) {
        if (this.nextBallState != "idle1" && this.nextBallState != "idle2") {
          this.nextBallState = "idle1";
        }
      } else if (window.pageYOffset < 900) {
        if (this.nextBallState != "about1" && this.nextBallState != "about2") {
          this.nextBallState = "about1";
        }
      } else if (window.pageYOffset < 1600) {
        if (this.nextBallState != "prog1" && this.nextBallState != "prog2" && this.nextBallState != "prog3") {
          this.nextBallState = "prog1";
        }
      } else if (window.pageYOffset < 2300) {
        if (this.nextBallState != "web1" && this.nextBallState != "web2" && this.nextBallState != "web3") {
          this.nextBallState = "web1";
        }
      } else if (window.pageYOffset < 30000) {
        if (this.nextBallState != "edu1" && this.nextBallState != "edu2") {
          this.nextBallState = "edu1";
        }
      }
    }
  }
  ballStateManager(){

    this.ballState = this.nextBallState;
    
    switch (this.ballState) {
      case "idle1":
        this.nextBallState = "idle2";
        break;
      
      case "idle2":
        this.nextBallState = "idle1";
        break;
        
      case "about1":
        this.nextBallState = "about2";
        break;

      case "about2":
        this.nextBallState = "about1";
        break;
  
      case "prog1":
        this.nextBallState = "prog2";
        break;
  
      case "prog2":
        this.nextBallState = "prog3";
        break;
  
      case "prog3":
        this.nextBallState = "prog2";
        break;
        
      case "web1":
        this.nextBallState = "web2";
        break;
  
      case "web2":
        this.nextBallState = "web3";
        break;
  
      case "web3":
        this.nextBallState = "web2";
        break;
        
      case "edu1":
        this.nextBallState = "edu2";
        break;

      case "edu2":
        this.nextBallState = "edu1";
        break;
          
                      
    
      default:
        break;
    }
  }

  testFunc(){

    if (this.ballState != "stop") {
      this.ballState = "stop";
      this.nextBallState = "stop";
    } else {
      this.ballState = "idle1"
      this.nextBallState = "idle2";
    }
  }


}
