import {
    trigger,
    state,
    style,
    animate,
    transition,
    useAnimation,
} from '@angular/animations';
import {
    ballOneSectionTransition,
    ballTwoSectionTransition,
    ballThreeSectionTransition,
    ballFourSectionTransition,
    ballOneIdleTransition,
    ballTwoIdleTransition,
    ballThreeIdleTransition,
    ballFourIdleTransition,
    ball,
    point
} from './balls.structures';

var about1;
var about2;
var about3;
var about4;



function test(){
    // about1 = document.getElementById('about1')?.getBoundingClientRect();
    // about2 = document.getElementById('about2')?.getBoundingClientRect();
    // about3 = document.getElementById('about3')?.getBoundingClientRect();
    // about4 = document.getElementById('about4')?.getBoundingClientRect();



    return {
        ballOneState : ball({
            idle1: point({x: 25, y: 0, x2: 0, y2: 0}),
            about: point({x: -140,  y: 178, x2: 0, y2: 30}),
            prog1: point({x: 0, y: 485, x2: -18, y2: 90}),
            web1: point({x: 0, y: 784, x2: -18, y2: 150}),
            edu: point({x: 0, y: 1050, x2: 0, y2: 210})
        }),
        
        ballTwoState : ball({
            idle1: point({x: 0, y: 25, x2: 0, y2: 0}),
            about: point({x: -140, y: 214, x2: 0, y2: 30}),
            prog1: point({x: 0, y: 525, x2: -18, y2: 90}),
            web1: point({x: 0, y: 824, x2: -18, y2: 150}),
            edu: point({x: 0, y: 1086, x2: 0, y2: 210})
        }),
        
        ballThreeState : ball({
            idle1: point({x: -25, y: 0, x2: 0, y2: 0}),
            about: point({x: -140, y: 250, x2: 0, y2: 30}),
            prog1: point({x: 0, y: 565, x2: -18, y2: 90}),
            web1: point({x: 0, y: 864, x2: -18, y2: 150}),
            edu: point({x: 0, y: 1122, x2: 0, y2: 210})
        }),
        
        ballFourState : ball({
            idle1: point({x: 0, y: -25, x2: 0, y2: 0}),
            about: point({x: -140, y: 286, x2: 0, y2: 30}),
            prog1: point({x: 0, y: 605, x2: -18, y2: 90}),
            web1: point({x: 0, y: 904, x2: -18, y2: 150}),
            edu: point({x: 0, y: 1158, x2: 0, y2: 210})
        })
    }
}




export var ballOneTrigger = trigger('ballOne', [
    state('idle', style({
        transform: 'translate(' + test().ballOneState.idle1.x + 'px,' + test().ballOneState.idle1.y + 'px) translate(' + test().ballOneState.idle1.x2 + 'vw, ' + test().ballOneState.idle1.y2 + 'vh)',
        animation: 'ballOneIdleKeyframes 0.5s ease-in-out infinite'
    })),
    state('about', style({
        transform: 'translate(' + test().ballOneState.about.x + 'px,' + test().ballOneState.about.y + 'px) translate(' + test().ballOneState.about.x2 + 'vw, ' + test().ballOneState.about.y2 + 'vh)'
    })),
    state('prog1', style({
        transform: 'translate(' + test().ballOneState.prog1.x + 'px,' + test().ballOneState.prog1.y + 'px) translate(' + test().ballOneState.prog1.x2 + 'vw, ' + test().ballOneState.prog1.y2 + 'vh)',
        animation: 'ballOneProgKeyframes 0.5s 0.6s ease-out forwards'
    })),
    state('web1', style({
        transform: 'translate(' + test().ballOneState.web1.x + 'px,' + test().ballOneState.web1.y + 'px) translate(' + test().ballOneState.web1.x2 + 'vw, ' + test().ballOneState.web1.y2 + 'vh)',
        animation: 'ballOneWebKeyframes 0.5s 0.6s ease-out forwards'
    })),
    state('edu', style({
        transform: 'translate(' + test().ballOneState.edu.x + 'px,' + test().ballOneState.edu.y + 'px) translate(' + test().ballOneState.edu.x2 + 'vw, ' + test().ballOneState.edu.y2 + 'vh)'
    })),



    transition('* => idle',
        useAnimation(ballOneIdleTransition, {
            params: {
                x: test().ballOneState.idle1.x,
                y: test().ballOneState.idle1.y,
                x2: test().ballOneState.idle1.x2,
                y2: test().ballOneState.idle1.y2
            }
        })
    ),
    transition('* => about',
        useAnimation(ballOneSectionTransition, {
            params: {
                x: test().ballOneState.about.x,
                y: test().ballOneState.about.y,
                x2: test().ballOneState.about.x2,
                y2: test().ballOneState.about.y2
            }
        })
    ),
    transition('* => prog1',
        useAnimation(ballOneSectionTransition, {
            params: {
                x: test().ballOneState.prog1.x,
                y: test().ballOneState.prog1.y,
                x2: test().ballOneState.prog1.x2,
                y2: test().ballOneState.prog1.y2
            }
        })
    ),
    transition('* => web1',
        useAnimation(ballOneSectionTransition, {
            params: {
                x: test().ballOneState.web1.x,
                y: test().ballOneState.web1.y,
                x2: test().ballOneState.web1.x2,
                y2: test().ballOneState.web1.y2
            }
        })
    ),
    transition('* => edu',
        useAnimation(ballOneSectionTransition, {
            params: {
                x: test().ballOneState.edu.x,
                y: test().ballOneState.edu.y,
                x2: test().ballOneState.edu.x2,
                y2: test().ballOneState.edu.y2
            }
        })
    ),
    


    transition('* => *', [
        animate('1s 0s ease-in-out')
    ]),
])

export const ballTwoTrigger = trigger('ballTwo', [
    state('idle', style({
        transform: 'translate(' + test().ballTwoState.idle1.x + 'px,' + test().ballTwoState.idle1.y + 'px) translate(' + test().ballTwoState.idle1.x2 + 'vw, ' + test().ballTwoState.idle1.y2 + 'vh)',
        animation: 'ballTwoIdleKeyframes 0.5s ease-in-out infinite'
    })),
    state('about', style({
        transform: 'translate(' + test().ballTwoState.about.x + 'px,' + test().ballTwoState.about.y + 'px) translate(' + test().ballTwoState.about.x2 + 'vw, ' + test().ballTwoState.about.y2 + 'vh)'
    })),
    state('prog1', style({
        transform: 'translate(' + test().ballTwoState.prog1.x + 'px,' + test().ballTwoState.prog1.y + 'px) translate(' + test().ballTwoState.prog1.x2 + 'vw, ' + test().ballTwoState.prog1.y2 + 'vh)',
        animation: 'ballTwoProgKeyframes 0.5s 0.4s ease-out forwards'
    })),
    state('web1', style({
        transform: 'translate(' + test().ballTwoState.web1.x + 'px,' + test().ballTwoState.web1.y + 'px) translate(' + test().ballTwoState.web1.x2 + 'vw, ' + test().ballTwoState.web1.y2 + 'vh)',
        animation: 'ballTwoWebKeyframes 0.5s 0.4s ease-out forwards'
    })),
    state('edu', style({
        transform: 'translate(' + test().ballTwoState.edu.x + 'px,' + test().ballTwoState.edu.y + 'px) translate(' + test().ballTwoState.edu.x2 + 'vw, ' + test().ballTwoState.edu.y2 + 'vh)'
    })),



    transition('* => idle',
        useAnimation(ballTwoIdleTransition, {
            params: {
                x: test().ballTwoState.idle1.x,
                y: test().ballTwoState.idle1.y,
                x2: test().ballTwoState.idle1.x2,
                y2: test().ballTwoState.idle1.y2
            }
        })
    ),
    transition('* => about',
        useAnimation(ballTwoSectionTransition, {
            params: {
                x: test().ballTwoState.about.x,
                y: test().ballTwoState.about.y,
                x2: test().ballTwoState.about.x2,
                y2: test().ballTwoState.about.y2
            }
        })
    ),
    transition('* => prog1',
        useAnimation(ballTwoSectionTransition, {
            params: {
                x: test().ballTwoState.prog1.x,
                y: test().ballTwoState.prog1.y,
                x2: test().ballTwoState.prog1.x2,
                y2: test().ballTwoState.prog1.y2
            }
        })
    ),
    transition('* => web1',
        useAnimation(ballTwoSectionTransition, {
            params: {
                x: test().ballTwoState.web1.x,
                y: test().ballTwoState.web1.y,
                x2: test().ballTwoState.web1.x2,
                y2: test().ballTwoState.web1.y2
            }
        })
    ),
    transition('* => edu',
        useAnimation(ballTwoSectionTransition, {
            params: {
                x: test().ballTwoState.edu.x,
                y: test().ballTwoState.edu.y,
                x2: test().ballTwoState.edu.x2,
                y2: test().ballTwoState.edu.y2
            }
        })
    ),
    


    transition('* => *', [
        animate('1s 0s ease-in-out')
    ]),
])

export const ballThreeTrigger = trigger('ballThree', [
    state('idle', style({
        transform: 'translate(' + test().ballThreeState.idle1.x + 'px,' + test().ballThreeState.idle1.y + 'px) translate(' + test().ballThreeState.idle1.x2 + 'vw, ' + test().ballThreeState.idle1.y2 + 'vh)',
        animation: 'ballThreeIdleKeyframes 0.5s ease-in-out infinite'
    })),
    state('about', style({
        transform: 'translate(' + test().ballThreeState.about.x + 'px,' + test().ballThreeState.about.y + 'px) translate(' + test().ballThreeState.about.x2 + 'vw, ' + test().ballThreeState.about.y2 + 'vh)'
    })),
    state('prog1', style({
        transform: 'translate(' + test().ballThreeState.prog1.x + 'px,' + test().ballThreeState.prog1.y + 'px) translate(' + test().ballThreeState.prog1.x2 + 'vw, ' + test().ballThreeState.prog1.y2 + 'vh)',
        animation: 'ballThreeProgKeyframes 0.5s 0.2s ease-out forwards'
    })),
    state('web1', style({
        transform: 'translate(' + test().ballThreeState.web1.x + 'px,' + test().ballThreeState.web1.y + 'px) translate(' + test().ballThreeState.web1.x2 + 'vw, ' + test().ballThreeState.web1.y2 + 'vh)',
        animation: 'ballThreeWebKeyframes 0.5s 0.2s ease-out forwards'
    })),
    state('edu', style({
        transform: 'translate(' + test().ballThreeState.edu.x + 'px,' + test().ballThreeState.edu.y + 'px) translate(' + test().ballThreeState.edu.x2 + 'vw, ' + test().ballThreeState.edu.y2 + 'vh)'
    })),


    

    transition('* => idle1',
        useAnimation(ballThreeIdleTransition, {
            params: {
                x: test().ballThreeState.idle1.x,
                y: test().ballThreeState.idle1.y,
                x2: test().ballThreeState.idle1.x2,
                y2: test().ballThreeState.idle1.y2
            }
        })
    ),
    transition('* => about',
        useAnimation(ballThreeSectionTransition, {
            params: {
                x: test().ballThreeState.about.x,
                y: test().ballThreeState.about.y,
                x2: test().ballThreeState.about.x2,
                y2: test().ballThreeState.about.y2
            }
        })
    ),
    transition('* => prog1',
        useAnimation(ballThreeSectionTransition, {
            params: {
                x: test().ballThreeState.prog1.x,
                y: test().ballThreeState.prog1.y,
                x2: test().ballThreeState.prog1.x2,
                y2: test().ballThreeState.prog1.y2
            }
        })
    ),
    transition('* => web1',
        useAnimation(ballThreeSectionTransition, {
            params: {
                x: test().ballThreeState.web1.x,
                y: test().ballThreeState.web1.y,
                x2: test().ballThreeState.web1.x2,
                y2: test().ballThreeState.web1.y2
            }
        })
    ),
    transition('* => edu',
        useAnimation(ballThreeSectionTransition, {
            params: {
                x: test().ballThreeState.edu.x,
                y: test().ballThreeState.edu.y,
                x2: test().ballThreeState.edu.x2,
                y2: test().ballThreeState.edu.y2
            }
        })
    ),
    


    transition('* => *', [
        animate('1s 0s ease-in-out')
    ]),
])

export const ballFourTrigger = trigger('ballFour', [
    state('idle', style({
        transform: 'translate(' + test().ballFourState.idle1.x + 'px,' + test().ballFourState.idle1.y + 'px) translate(' + test().ballFourState.idle1.x2 + 'vw, ' + test().ballFourState.idle1.y2 + 'vh)',
        animation: 'ballFourIdleKeyframes 0.5s ease-in-out infinite'
    })),
    state('about', style({
        transform: 'translate(' + test().ballFourState.about.x + 'px,' + test().ballFourState.about.y + 'px) translate(' + test().ballFourState.about.x2 + 'vw, ' + test().ballFourState.about.y2 + 'vh)'
    })),
    state('prog1', style({
        transform: 'translate(' + test().ballFourState.prog1.x + 'px,' + test().ballFourState.prog1.y + 'px) translate(' + test().ballFourState.prog1.x2 + 'vw, ' + test().ballFourState.prog1.y2 + 'vh)',
        animation: 'ballFourProgKeyframes 0.5s ease-out forwards'
    })),
    state('web1', style({
        transform: 'translate(' + test().ballFourState.web1.x + 'px,' + test().ballFourState.web1.y + 'px) translate(' + test().ballFourState.web1.x2 + 'vw, ' + test().ballFourState.web1.y2 + 'vh)',
        animation: 'ballFourWebKeyframes 0.5s ease-out forwards'
    })),
    state('edu', style({
        transform: 'translate(' + test().ballFourState.edu.x + 'px,' + test().ballFourState.edu.y + 'px) translate(' + test().ballFourState.edu.x2 + 'vw, ' + test().ballFourState.edu.y2 + 'vh)'
    })),


    transition('* => idle1',
        useAnimation(ballFourIdleTransition, {
            params: {
                x: test().ballFourState.idle1.x,
                y: test().ballFourState.idle1.y,
                x2: test().ballFourState.idle1.x2,
                y2: test().ballFourState.idle1.y2
            }
        })
    ),
    transition('* => about',
        useAnimation(ballFourSectionTransition, {
            params: {
                x: test().ballFourState.about.x,
                y: test().ballFourState.about.y,
                x2: test().ballFourState.about.x2,
                y2: test().ballFourState.about.y2
            }
        })
    ),
    transition('* => prog1',
        useAnimation(ballFourSectionTransition, {
            params: {
                x: test().ballFourState.prog1.x,
                y: test().ballFourState.prog1.y,
                x2: test().ballFourState.prog1.x2,
                y2: test().ballFourState.prog1.y2
            }
        })
    ),
    transition('* => web1',
        useAnimation(ballFourSectionTransition, {
            params: {
                x: test().ballFourState.web1.x,
                y: test().ballFourState.web1.y,
                x2: test().ballFourState.web1.x2,
                y2: test().ballFourState.web1.y2
            }
        })
    ),
    transition('* => edu',
        useAnimation(ballFourSectionTransition, {
            params: {
                x: test().ballFourState.edu.x,
                y: test().ballFourState.edu.y,
                x2: test().ballFourState.edu.x2,
                y2: test().ballFourState.edu.y2
            }
        })
    ),
    


    transition('* => *', [
        animate('1s 0s ease-in-out')
    ]),
])

export const ballOneWrapper = trigger('ballOneWrapper', []);

export const ballTwoWrapper = trigger('ballTwoWrapper', []);

export const ballThreeWrapper = trigger('ballThreeWrapper', []);

export const ballFourWrapper = trigger('ballFourWrapper', []);


