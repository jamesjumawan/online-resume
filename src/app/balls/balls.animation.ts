import {
    trigger,
    state,
    style,
    animate,
    transition,
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
]);

export const ballThreeTrigger = trigger('ballThree', [             // ---------------------------------
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
]);