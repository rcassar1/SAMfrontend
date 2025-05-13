import { Routes } from '@angular/router';
import { HomeSComponent } from './components/student-components/home-s/home-s.component';
import { SelectionPageComponent } from './components/student-components/selection-page/selection-page.component';
import { LoginComponent } from './components/login/login.component';
import { EducatorRoleComponent } from './components/admin-components/educator-role/educator-role.component';
import { AttendanceComponent } from './components/student-components/attendance-s/attendance-s.component';
import { DiaryComponent } from './components/student-components/diary/diary.component';
import { AnnouncementsSComponent } from './components/student-components/announcements-s/announcements-s.component';
import { ProfileSComponent } from './components/student-components/profile-s/profile-s.component';
import { CalendarSComponent } from './components/student-components/calendar-s/calendar-s.component';
import { NavigationBarComponent } from './components/student-components/navigation-bar/navigation-bar.component';

export const routes: Routes = [
  {
    path: '',
    component: SelectionPageComponent,
  },
  {
    path: 'home',
    component: ProfileSComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/educatorrole',
    component: EducatorRoleComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'diary',
    component: DiaryComponent,
  },
  {
    path: 'announcements',
    component: AnnouncementsSComponent,
  },
  {
    path: 'studentscalendar',
    component: CalendarSComponent,
  },
  {
    path: 'navbar',
    component: NavigationBarComponent,
  },
];

export class AppRoutingModule {}
