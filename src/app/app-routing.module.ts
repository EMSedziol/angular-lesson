import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LetterComponent } from './letter/letter.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserComponent } from './user/user.component';
import { UserListComponent} from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'letter', component: LetterComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }

]; // http://localhost:4200/user/detail/1

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
