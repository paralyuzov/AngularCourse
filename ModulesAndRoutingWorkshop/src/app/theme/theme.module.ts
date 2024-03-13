import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    ThemesListComponent,
    PostListComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,ThemeRoutingModule,SharedModule
  ]
})
export class ThemeModule { }
