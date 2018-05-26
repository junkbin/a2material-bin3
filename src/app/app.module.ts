import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule} from '@angular/material';
import { MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { AtableComponent } from './atable/atable.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2',   component: Page2Component },
  { path: '',   component: Page1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AtableComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
