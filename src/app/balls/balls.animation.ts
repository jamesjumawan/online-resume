import {
    trigger,
    state,
    style,
    animate,
    transition,
    group,
    query
} from '@angular/animations';



export const ballOneTrigger = trigger('ballOne', [               // ---------------------------------
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
    

    transition('idle2 => idle1', [
        animate('0s')
    ]),
    transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
    ]),
    transition('about1 <=> about2', [
        animate('1s 0s ease-in-out')
    ]),
    transition('prog2 <=> prog3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('web2 <=> web3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('edu1 <=> edu2', [
        animate('1s 0s ease-in-out')
    ]),

    transition('* => idle1', [
        group([
            query(':self', [
                animate('1s 0s ease-out', style({
                    transform: 'translateX(25px)'
                }))
            ]),
            query('@ballOneWrapper', [
                animate('1s 0s ease-in-out', style({
                    transform: 'translateY(0px)'
                }))
            ])
        ])
    ]),
    transition('* => about1', [
        group([
            query(':self', [
                animate('1s 0s ease-out', style({
                    transform: 'translateX(-145px)'
                }))
            ]),
            query('@ballOneWrapper', [
                animate('1s 0s ease-in-out', style({
                    transform: 'translateY(525px)'
                }))
            ])
        ])
    ]),
    transition('* => prog1', [
        group([
            query(':self', [
                animate('1s 0s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballOneWrapper', [
                animate('1s 0s ease-in-out', style({
                    transform: 'translateY(1243px)'
                }))
            ])
        ])
    ]),
    transition('* => web1', [
        group([
            query(':self', [
                animate('.5s 0s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballOneWrapper', [
                animate('.5s 0s ease-in-out', style({
                    transform: 'translateY(1983px)'
                }))
            ])
        ])
    ]),
    transition('* => edu1', [
        group([
            query(':self', [
                animate('.5s 0s ease-out', style({
                    transform: 'translateX(-50%)'
                }))
            ]),
            query('@ballOneWrapper', [
                animate('.5s 0s ease-in-out', style({
                    transform: 'translateY(2696px)'
                }))
            ])
        ])
    ]),
    

    transition('* => *', [
        animate('0.75s 0s ease-out')
    ])
]);

export const ballTwoTrigger = trigger('ballTwo', [               // ---------------------------------
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
    

    transition('idle2 => idle1', [
        animate('0s')
    ]),
    transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
    ]),
    transition('about1 <=> about2', [
        animate('1s 0s ease-in-out')
    ]),
    transition('prog2 <=> prog3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('web2 <=> web3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('edu1 <=> edu2', [
        animate('1s 0s ease-in-out')
    ]),

    transition('* => idle1', [
        group([
            query(':self', [
                animate('1s 0.2s ease-out', style({
                    transform: 'translateX(0px)'
                }))
            ]),
            query('@ballTwoWrapper', [
                animate('1s 0.2s ease-in-out', style({
                    transform: 'translateY(25px)'
                }))
            ])
        ])
    ]),
    transition('* => about1', [
        group([
            query(':self', [
                animate('.5s 0.2s ease-out', style({
                    transform: 'translateX(-145px)'
                }))
            ]),
            query('@ballTwoWrapper', [
                animate('.5s 0.2s ease-in-out', style({
                    transform: 'translateY(553px)'
                }))
            ])
        ])
    ]),
    transition('* => prog1', [
        group([
            query(':self', [
                animate('.5s 0.2s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballTwoWrapper', [
                animate('.5s 0.2s ease-in-out', style({
                    transform: 'translateY(1276px)'
                }))
            ])
        ])
    ]),
    transition('* => web1', [
        group([
            query(':self', [
                animate('.5s 0.2s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballTwoWrapper', [
                animate('.5s 0.2s ease-in-out', style({
                    transform: 'translateY(2016px)'
                }))
            ])
        ])
    ]),
    transition('* => edu1', [
        group([
            query(':self', [
                animate('.5s 0.2s ease-out', style({
                    transform: 'translateX(-50%)'
                }))
            ]),
            query('@ballTwoWrapper', [
                animate('.5s 0.2s ease-in-out', style({
                    transform: 'translateY(2724px)'
                }))
            ])
        ])
    ]),
    
    
    transition('* => *', [
        animate('0.75s 0s ease-out')
    ])
]);

export const ballThreeTrigger = trigger('ballThree', [           // ---------------------------------
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
    

    transition('idle2 => idle1', [
        animate('0s')
    ]),
    transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
    ]),
    transition('about1 <=> about2', [
        animate('1s 0s ease-in-out')
    ]),
    transition('prog2 <=> prog3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('web2 <=> web3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('edu1 <=> edu2', [
        animate('1s 0s ease-in-out')
    ]),

    transition('* => idle1', [
        group([
            query(':self', [
                animate('1s 0.4s ease-out', style({
                    transform: 'translateX(-25px)'
                }))
            ]),
            query('@ballThreeWrapper', [
                animate('1s 0.4s ease-in-out', style({
                    transform: 'translateY(0px)'
                }))
            ])
        ])
    ]),
    transition('* => about1', [
        group([
            query(':self', [
                animate('.5s 0.4s ease-out', style({
                    transform: 'translateX(-145px)'
                }))
            ]),
            query('@ballThreeWrapper', [
                animate('.5s 0.4s ease-in-out', style({
                    transform: 'translateY(581px)'
                }))
            ])
        ])
    ]),
    transition('* => prog', [
        group([
            query(':self', [
                animate('.5s 0.4s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballThreeWrapper', [
                animate('.5s 0.4s ease-in-out', style({
                    transform: 'translateY(1309px)'
                }))
            ])
        ])
    ]),
    transition('* => prog', [
        group([
            query(':self', [
                animate('.5s 0.4s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballThreeWrapper', [
                animate('.5s 0.4s ease-in-out', style({
                    transform: 'translateY(2049px)'
                }))
            ])
        ])
    ]),
    transition('* => prog', [
        group([
            query(':self', [
                animate('.5s 0.4s ease-out', style({
                    transform: 'translateX(-50%)'
                }))
            ]),
            query('@ballThreeWrapper', [
                animate('.5s 0.4s ease-in-out', style({
                    transform: 'translateY(2752px)'
                }))
            ])
        ])
    ]),
    
    
    transition('* => *', [
        animate('0.75s 0s ease-out')
    ])
]);

export const ballFourTrigger = trigger('ballFour', [             // ---------------------------------
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
    

    transition('idle2 => idle1', [
        animate('0s')
    ]),
    transition('idle1 => idle2', [
        animate('0.5s 0s ease-in-out')
    ]),
    transition('about1 <=> about2', [
        animate('1s 0s ease-in-out')
    ]),
    transition('prog2 <=> prog3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('web2 <=> web3', [
        animate('1s 0s ease-in-out')
    ]),
    transition('edu1 <=> edu2', [
        animate('1s 0s ease-in-out')
    ]),

    transition('* => idle1', [
        group([
            query(':self', [
                animate('1s 0.6s ease-out', style({
                    transform: 'translateX(0px)'
                }))
            ]),
            query('@ballFourWrapper', [
                animate('1s 0.6s ease-in-out', style({
                    transform: 'translateY(-25px)'
                }))
            ])
        ])
    ]),
    transition('* => about1', [
        group([
            query(':self', [
                animate('.5s 0.6s ease-out', style({
                    transform: 'translateX(-145px)'
                }))
            ]),
            query('@ballFourWrapper', [
                animate('.5s 0.6s ease-in-out', style({
                    transform: 'translateY(609px)'
                }))
            ])
        ])
    ]),
    transition('* => prog1', [
        group([
            query(':self', [
                animate('.5s 0.6s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballFourWrapper', [
                animate('.5s 0.6s ease-in-out', style({
                    transform: 'translateY(1342px)'
                }))
            ])
        ])
    ]),
    transition('* => web1', [
        group([
            query(':self', [
                animate('.5s 0.6s ease-out', style({
                    transform: 'translateX(-172px)'
                }))
            ]),
            query('@ballFourWrapper', [
                animate('.5s 0.6s ease-in-out', style({
                    transform: 'translateY(2082px)'
                }))
            ])
        ])
    ]),
    transition('* => edu1', [
        group([
            query(':self', [
                animate('.5s 0.6s ease-out', style({
                    transform: 'translateX(-50%)'
                }))
            ]),
            query('@ballFourWrapper', [
                animate('.5s 0.6s ease-in-out', style({
                    transform: 'translateY(2780px)'
                }))
            ])
        ])
    ]),
    
    
    transition('* => *', [
        animate('0.75s 0s ease-out')
    ])
]);

export const ballOneWrapper = trigger('ballOneWrapper', []);

export const ballTwoWrapper = trigger('ballTwoWrapper', []);

export const ballThreeWrapper = trigger('ballThreeWrapper', []);

export const ballFourWrapper = trigger('ballFourWrapper', []);










export const testTrigger = trigger('testTrigger', [
]);

export const testTriggerB = trigger('testTriggerB', [
    state('stateB1', style({
        transform: 'translateY(400px) translateX(20px)'
    })),
    state('stateB2', style({
        transform: 'translateY(600px) translateX(50px)'
    })),

    transition('* => *', [
        group([
            query(':self', [
                animate('1s 0s cubic-bezier(.42,-0.64,.99,.38)', style({
                    transform: 'translateX(50px)'
                }))
            ]),
            query('@testTrigger', [
                animate('1s 0s ease-out', style({
                    transform: 'translateY(600px)'
                }))
            ])
        ])
    ])
])