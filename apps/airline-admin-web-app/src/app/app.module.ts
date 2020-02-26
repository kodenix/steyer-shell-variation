import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('@steyer-shell-variation/booking/shell').then(
        m => m.BookingShellModule
      )
  },
  {
    path: 'check-in',
    loadChildren: () =>
      import('@steyer-shell-variation/check-in/shell').then(
        m => m.CheckInShellModule
      )
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
