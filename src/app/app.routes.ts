import { Routes } from '@angular/router';
import { DayOneComponent } from './day-one/day-one.component';
import { DayTwoComponent } from './day-two/day-two.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    { path: 'test', component: TestComponent },
    { path: 'day1', component: DayOneComponent },
    { path: 'day2', component: DayTwoComponent },];
