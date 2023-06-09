﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { CadastroComponent } from './cadastro';
import { ConsultaComponent } from './consulta';
import { ReclamacaoComponent } from './reclamacao';
import { DashboardComponent } from './dashboard';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: 'reclamacao', component: ReclamacaoComponent },
    { path: 'dashboard', component: DashboardComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);