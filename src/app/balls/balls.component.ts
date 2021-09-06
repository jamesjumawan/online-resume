import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrls: ['./balls.component.css'],
  animations: [
    trigger('ballOne', [               // ---------------------------------
      state('idle1', style({
        transform: 'translateX(25px)'
      })),
      state('idle2', style({
        transform: 'translateY(25px) rotate(-360deg)'
      })),
      state('about1', style({
        transform: 'translateY(525px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(525px) translateX(-145px) rotate(360deg)'
      })),
      state('prog1', style({
        transform: 'translateY(1243px) translateX(-172px) rotate(360deg)'
      })),
      state('prog2', style({
        transform: 'translateY(1243px) translateX(178px)'
      })),
      state('prog3', style({
        transform: 'translateY(1243px) translateX(178px) rotate(360deg)'
      })),
      state('web1', style({
        transform: 'translateY(1983px) translateX(-172px) rotate(360deg)'
      })),
      state('web2', style({
        transform: 'translateY(1983px) translateX(-22px)'
      })),
      state('web3', style({
        transform: 'translateY(1983px) translateX(-22px) rotate(360deg)'
      })),
      state('edu1', style({
        transform: 'translateY(2696px) translateX(-50%) rotate(360deg)'
      })),
      state('edu2', style({
        transform: 'translateY(2696px) translateX(-50%)'
      })),
      

      transition('void => *', [
        animate('0s')
      ]),
      transition('idle2 => idle1', [
        animate('0s')
      ]),
      transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
      ]),
      transition('about2 <=> about1', [
        animate('1s 0s ease-in-out')
      ]),
      transition('* => *', [
        animate('0.75s 0s ease-out')
      ])
    ]),

    trigger('ballTwo', [               // ---------------------------------
      state('idle1', style({
        transform: 'translateY(25px)'
      })),
      state('idle2', style({
        transform: 'translateX(-25px) rotate(-360deg)'
      })),
      state('about1', style({
        transform: 'translateY(553px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(553px) translateX(-145px) rotate(360deg)'
      })),
      state('prog1', style({
        transform: 'translateY(1276px) translateX(-172px) rotate(360deg)'
      })),
      state('prog2', style({
        transform: 'translateY(1276px) translateX(78px)'
      })),
      state('prog3', style({
        transform: 'translateY(1276px) translateX(78px) rotate(360deg)'
      })),
      state('web1', style({
        transform: 'translateY(2016px) translateX(-172px) rotate(360deg)'
      })),
      state('web2', style({
        transform: 'translateY(2016px) translateX(-22px)'
      })),
      state('web3', style({
        transform: 'translateY(2016px) translateX(-22px) rotate(360deg)'
      })),
      state('edu1', style({
        transform: 'translateY(2724px) translateX(-50%) rotate(360deg)'
      })),
      state('edu2', style({
        transform: 'translateY(2724px) translateX(-50%)'
      })),

      transition('void => *', [
        animate('0s')
      ]),
      transition('idle2 => idle1', [
        animate('0s')
      ]),
      transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
      ]),
      transition('about2 <=> about1', [
        animate('1s 0s ease-in-out')
      ]),
      transition('* => *', [
        animate('0.75s 0s ease-out')
      ])
    ]),

    trigger('ballThree', [             // ---------------------------------
      state('idle1', style({
        transform: 'translateX(-25px)'
      })),
      state('idle2', style({
        transform: 'translateY(-25px) rotate(-360deg)'
      })),
      state('about1', style({
        transform: 'translateY(581px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(581px) translateX(-145px) rotate(360deg)'
      })),
      state('prog1', style({
        transform: 'translateY(1309px) translateX(-172px) rotate(360deg)'
      })),
      state('prog2', style({
        transform: 'translateY(1309px) translateX(78px)'
      })),
      state('prog3', style({
        transform: 'translateY(1309px) translateX(78px) rotate(360deg)'
      })),
      state('web1', style({
        transform: 'translateY(2049px) translateX(-172px) rotate(360deg)'
      })),
      state('web2', style({
        transform: 'translateY(2049px) translateX(-22px)'
      })),
      state('web3', style({
        transform: 'translateY(2049px) translateX(-22px) rotate(360deg)'
      })),
      state('edu1', style({
        transform: 'translateY(2752px) translateX(-50%) rotate(360deg)'
      })),
      state('edu2', style({
        transform: 'translateY(2752px) translateX(-50%)'
      })),

      transition('void => *', [
        animate('0s')
      ]),
      transition('idle2 => idle1', [
        animate('0s')
      ]),
      transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
      ]),
      transition('about2 <=> about1', [
        animate('1s 0s ease-in-out')
      ]),
      transition('* => *', [
        animate('0.75s 0s ease-out')
      ])
    ]),

    trigger('ballFour', [             // ---------------------------------
      state('idle1', style({
        transform: 'translateY(-25px)'
      })),
      state('idle2', style({
        transform: 'translateX(25px) rotate(-360deg)'
      })),
      state('about1', style({
        transform: 'translateY(609px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(609px) translateX(-145px) rotate(360deg)'
      })),
      state('prog1', style({
        transform: 'translateY(1342px) translateX(-172px) rotate(360deg)'
      })),
      state('prog2', style({
        transform: 'translateY(1342px) translateX(-22px)'
      })),
      state('prog3', style({
        transform: 'translateY(1342px) translateX(-22px) rotate(360deg)'
      })),
      state('web1', style({
        transform: 'translateY(2082px) translateX(-172px) rotate(360deg)'
      })),
      state('web2', style({
        transform: 'translateY(2082px) translateX(-122px)'
      })),
      state('web3', style({
        transform: 'translateY(2082px) translateX(-122px) rotate(360deg)'
      })),
      state('edu1', style({
        transform: 'translateY(2780px) translateX(-50%) rotate(360deg)'
      })),
      state('edu2', style({
        transform: 'translateY(2780px) translateX(-50%)'
      })),

      transition('void => *', [
        animate('0s')
      ]),
      transition('idle2 => idle1', [
        animate('0s')
      ]),
      transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
      ]),
      transition('about2 <=> about1', [
        animate('1s 0s ease-in-out')
      ]),
      transition('* => *', [
        animate('0.75s 0s ease-out')
      ])
    ])
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
    this.ballState = "stop";
    this.nextBallState = "stop";
  }


}
