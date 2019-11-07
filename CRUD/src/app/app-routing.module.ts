
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { title: 'List of Users' }
  },
  {
    path: 'users/add',
    component: UsersAddComponent,
    data: { title: 'Add User' }
  },
  {
    path: 'users/edit/:id',
    component: UsersEditComponent,
    data: { title: 'Edit User' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
