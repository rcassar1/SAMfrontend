import { AnnouncementsS } from './../../../models/student-models/announcements/announcements-s';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AnnouncementsSService } from './../../../services/student-services/announcements/announcements-s.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MessageService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-announcements-s',
  imports: [
    ButtonModule,
    CommonModule,
    TableModule,
    TagModule,
    AccordionModule,
    NavigationBarComponent,
  ],
  templateUrl: './announcements-s.component.html',
  styleUrl: './announcements-s.component.scss',
  providers: [MessageService],
})
export class AnnouncementsSComponent implements OnInit {
  announcements: AnnouncementsS[] = [];

  constructor(private service: AnnouncementsSService) {}

  ngOnInit() {
    this.getAnnouncements();
  }

  async getAnnouncements() {
    this.service.getAnnouncements().subscribe({
      next: (d) => {
        console.log(d);
        this.announcements = d;
      },
    });
  }
}
