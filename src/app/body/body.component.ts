import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {AppComponent} from './../app.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('ballOne', [
      state('idle1', style({
        transform: 'translateX(25px)'
      })),
      state('idle2', style({
        transform: 'translateY(25px) rotate(360deg)'
      })),
      state('about1', style({
        transform: 'translateY(535px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(535px) translateX(-145px) rotate(360deg)'
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

    trigger('ballTwo', [
      state('idle1', style({
        transform: 'translateY(25px) rotate(0deg)'
      })),
      state('idle2', style({
        transform: 'translateX(-25px) rotate(360deg)'
      })),
      state('about1', style({
        transform: 'translateY(563px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(563px) translateX(-145px) rotate(360deg)'
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

    trigger('ballThree', [
      state('idle1', style({
        transform: 'translateX(-25px)'
      })),
      state('idle2', style({
        transform: 'translateY(-25px) rotate(360deg)'
      })),
      state('about1', style({
        transform: 'translateY(591px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(591px) translateX(-145px) rotate(360deg)'
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

    trigger('ballFour', [
      state('idle1', style({
        transform: 'translateY(-25px)'
      })),
      state('idle2', style({
        transform: 'translateX(25px) rotate(360deg)'
      })),
      state('about1', style({
        transform: 'translateY(619px) translateX(-145px)'
      })),
      state('about2', style({
        transform: 'translateY(619px) translateX(-145px) rotate(360deg)'
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
export class BodyComponent implements OnInit {

  public ballState: string;
  
  constructor() {
    
    this.ballState = "stop";
    
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onscroll(event:any){
    if(this.ballState=='stop'){
      //
    } else if (window.pageYOffset < 300) {
      if (this.ballState != "idle1" && this.ballState != "idle2") {
        this.ballState = "idle1";
        console.log("here1");
      }
    } else if (window.pageYOffset >= 300) {
      if (this.ballState != "about1" && this.ballState != "about2") {
        this.ballState = "about1";
        console.log('here2');
      }
    }
  }

  ballStateManager(){
    
    switch (this.ballState) {
      case "idle1":
        this.ballState = "idle2";
        break;
      
      case "idle2":
        this.ballState = "idle1";
        break;
        
      case "about1":
        this.ballState = "about2";
        break;

      case "about2":
        this.ballState = "about1";
        break;
    
      default:
        break;
    }
  }

  stopAnim(){
    if (this.ballState="stop") {
      this.ballState="idle1";
    } else {
      this.ballState="stop";
    }
  }

}
