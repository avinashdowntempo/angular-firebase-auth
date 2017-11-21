import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BdGuard } from './loginscreen/bd.guard';
import { IntervieweeGuard } from './loginscreen/interviewee.guard';
import { SpocGuard } from './loginscreen/spoc.guard';

const appRoutes: Routes = [
    { path: 'login', loadChildren: 'app/loginscreen/loginscreen.module#LoginscreenModule' },
    { path: 'bd-dash', loadChildren: 'app/bd/bd.module#BdModule', canLoad: [BdGuard] },
    { path: 'spoc-dash', loadChildren: 'app/spoc/spoc.module#SpocModule', canLoad: [SpocGuard] },
    { path: 'interview-dash', loadChildren: 'app/interview/interview.module#InterviewModule', canLoad: [IntervieweeGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadChildren: 'app/loginscreen/loginscreen.module#LoginscreenModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
