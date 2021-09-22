import {
    animation,
    group,
    query,
    animate,
    style
} from '@angular/animations';

// var other = document.getElementsByClassName("cell");

// console.log(other[0].getBoundingClientRect().top);




// var sectionTransitionEasingX = "1s 0s cubic-bezier(0, 2, 1, 2)";
var ballOneSectionTransitionEasingX = "1s 0s ease-out";
var ballOneSectionTransitionEasingY = "1s 0s ease-in-out";
var ballTwoSectionTransitionEasingX = "1s 0.2s ease-out";
var ballTwoSectionTransitionEasingY = "1s 0.2s ease-in-out";
var ballThreeSectionTransitionEasingX = "1s 0.4s ease-out";
var ballThreeSectionTransitionEasingY = "1s 0.4s ease-in-out";
var ballFourSectionTransitionEasingX = "1s 0.6s ease-out";
var ballFourSectionTransitionEasingY = "1s 0.6s ease-in-out";



export function ball( args: {
    idle1: any,
    about: any,
    prog1: any,
    web1: any,
    edu: any
}){
    return {...args};
}

export function point( args: {
    x: number | null,
    y: number| null,
    x2: number | null,
    y2: number | null
}){
    return{...args};
}

export const ballOneSectionTransition = animation([
    group([
        query(':self', [
            animate(ballOneSectionTransitionEasingY, style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballOneWrapper', 
            animate(ballOneSectionTransitionEasingX, style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

export const ballTwoSectionTransition = animation([
    group([
        query(':self', [
            animate(ballTwoSectionTransitionEasingY, style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballTwoWrapper', 
            animate(ballTwoSectionTransitionEasingX, style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

export const ballThreeSectionTransition = animation([
    group([
        query(':self', [
            animate(ballThreeSectionTransitionEasingY, style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballThreeWrapper', 
            animate(ballThreeSectionTransitionEasingX, style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

export const ballFourSectionTransition = animation([
    group([
        query(':self', [
            animate(ballFourSectionTransitionEasingY, style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballFourWrapper', 
            animate(ballFourSectionTransitionEasingX, style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);



export const ballOneIdleTransition = animation([
    group([
        query(':self', [
            animate('1s 0s ease-out', style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballOneWrapper', 
            animate('1s 0s ease-in-out', style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

export const ballTwoIdleTransition = animation([
    group([
        query(':self', [
            animate('1s 0s ease-out', style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballTwoWrapper', 
            animate('1s 0s ease-in-out', style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

export const ballThreeIdleTransition = animation([
    group([
        query(':self', [
            animate('1s 0s ease-out', style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballThreeWrapper', 
            animate('1s 0s ease-in-out', style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

export const ballFourIdleTransition = animation([
    group([
        query(':self', [
            animate('1s 0s ease-out', style({
                transform: 'translateY({{y}}px) translateY({{y2}}vh)'
            }))
        ]),
        query('@ballFourWrapper', 
            animate('1s 0s ease-in-out', style({
                transform: 'translateX({{x}}px) translate({{x2}}vw)'
            }))
        )
    ])
]);

