import { Component, Input, OnInit } from '@angular/core';


import { Contact } from '../../contact.model';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

  }

  onSelected() {
    this.contactService.contactSelected.emit(this.contact);

  }

}
