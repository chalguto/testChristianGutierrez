import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
  {
    path: 'items',
    component: ItemComponent,
    data: { title: 'Array' }
  },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
