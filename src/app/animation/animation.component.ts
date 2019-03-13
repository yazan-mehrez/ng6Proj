import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {transAnimation} from '../classes/animation';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.scss'],
    animations: [
        trigger('colorStep',
            [
                transition('* => active', [
                    animate('2s', keyframes([
                        style({backgroundColor: 'blue', offset: 0, color: '#fff', 'font-size': '15px'}),
                        style({backgroundColor: 'red', offset: 0.8, color: '#fff', 'font-size': '20px'}),
                        style({backgroundColor: 'orange', offset: 1.0, color: '#fff', 'font-size': '25px'}),
                    ]))
                ]),
                transition('* => inactive', [
                    animate('2s', keyframes([
                        style({backgroundColor: 'orange', offset: 0, color: '#000'}),
                        style({backgroundColor: 'red', offset: 0.2, color: '#000'}),
                        style({backgroundColor: 'blue', offset: 1.0, color: '#000'})
                    ]))
                ])
            ]
        ),
        trigger('flyInOut', [
            state('in', style({
                width: 120,
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    width: 10,
                    opacity: 0,
                    transform: 'translateX(250px)'
                }), group([
                    animate('1s 0.9s ease', style({
                        transform: 'translateX(0)',
                        width: 120
                    })),
                    animate('0.9s ease', style({
                        opacity: 1,
                        color: 'red'
                    }))
                ]),
                useAnimation(transAnimation, {
                    params: {
                        height: '100px',
                        opacity: 1,
                        backgroundColor: 'blue',
                        time: '1s'
                    }
                })
            ]),

        ])
    ],
})

export class AnimationComponent implements OnInit {
    toggle: boolean = true;
    fly: boolean = true;

    constructor() {
    }

    toggleReset() {
        this.toggle = false;
        setTimeout(() => {
            this.toggle = true;
        }, 1);
    }

    toggleFly() {
        this.fly = false;
        setTimeout(() => {
            this.fly = true;
        }, 1);
    }

    ngOnInit() {
    }
}
