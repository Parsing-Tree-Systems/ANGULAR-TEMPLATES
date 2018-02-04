import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftComponent } from './common/left/left.component';

const AppRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      {enableTracing : true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
