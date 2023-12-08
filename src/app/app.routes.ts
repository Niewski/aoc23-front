import { Routes } from '@angular/router';
import { ProblemComponent } from './problem/problem.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    { path: 'test', component: TestComponent },
    {
        path: 'day1',
        component: ProblemComponent,
        data: { title: 'Day 1 Problem', submitFunction: 'solveDayOne' }
    },
    {
        path: 'day2',
        component: ProblemComponent,
        data: { title: 'Day 2 Problem', submitFunction: 'solveDayTwo' }
    },
    {
        path: 'day3',
        component: ProblemComponent,
        data: { title: 'Day 3 Problem', submitFunction: 'solveDayThree' }
    },];
