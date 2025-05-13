import { Diary } from './../../../models/student-models/diary/diary';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FieldsetModule } from 'primeng/fieldset';
import { DiaryService } from '../../../services/student-services/diary/diary.service';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

const dateToday = new Date();

@Component({
  selector: 'app-diary',
  imports: [
    FormsModule,
    DatePicker,
    FieldsetModule,
    TableModule,
    DataViewModule,
    CommonModule,
    NavigationBarComponent,
  ],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
})
export class DiaryComponent implements OnInit {
  // private MessageService = inject(MessageService);
  date: Date | undefined = dateToday;
  DiaryS: Diary[] = [];
  classID: string = '67bd7a9b75c003636fc9672d';
  diaryDate: string = '2025-04-02';
  newDiaryDate!: Date;

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private service: DiaryService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getDiary();
  }

  getDiary() {
    this.service.getDiary(this.classID, this.diaryDate).subscribe({
      next: (d) => {
        this.DiaryS = d;
      },
    });
  }
  newDate(newDiaryDate: Date) {
    this.diaryDate = newDiaryDate.toString();
    this.getDiary();
  }
}

export interface DiaryS {
  date: string;
  classID: string;
  diary: string;
}
