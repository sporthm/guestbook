import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { GuestbookFormComponent } from './guestbook-form/guestbook-form.component';
import { GuestbookListComponent } from './guestbook-list/guestbook-list.component';
import { GuestbookListItemComponent } from './guestbook-list-item/guestbook-list-item.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuestbookComponent,
    GuestbookFormComponent,
    GuestbookListComponent,
    GuestbookListItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
