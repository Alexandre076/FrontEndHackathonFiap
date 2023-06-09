﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users: any[] = [];
    loading: any;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router
        
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    navigateToCadastro() {
        this.router.navigate(['/cadastro']);
      }

    navigateToConsulta() {
        this.router.navigate(['/consulta']);
      }

    navigateToReclamacao() {
        this.router.navigate(['/reclamacao']);
      }

      navigateToDashboard() {
        this.router.navigate(['/dashboard']);
      }



}