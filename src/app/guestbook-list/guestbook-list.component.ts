import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'gb-guestbook-list',
  templateUrl: './guestbook-list.component.html',
  styleUrls: ['./guestbook-list.component.css']
})
export class GuestbookListComponent implements OnInit {

  items: Observable<any>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('entry').valueChanges();
  }

  ngOnInit(): void {
  }

}
