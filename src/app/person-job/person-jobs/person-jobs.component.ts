import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PersonalDirective } from '../person.directive';
import { PersonJob } from '../personal-job';
import { PersonComponent } from '../person.component';
import { PersonalJobCardComponent } from '../personal-job-card/personal-job-card.component';

@Component({
  selector: 'app-person-jobs',
  templateUrl: './person-jobs.component.html',
  styleUrls: ['./person-jobs.component.css']
})
export class PersonJobsComponent implements OnInit, OnDestroy {

  personJobs: PersonJob[] = [
    new PersonJob(PersonalJobCardComponent, { id: '001', title: 'Seinor' }),
    new PersonJob(PersonalJobCardComponent, { id: '001', title: 'Junior' })
  ];

  currentAdIndex = -1;

  @ViewChild(PersonalDirective, { static: true }) personHost!: PersonalDirective;

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
    this.loadComponent();
  }

  ngOnDestroy() {
    this.clearTimer?.();
  }

  loadComponent() {
    const viewContainerRef = this.personHost.viewContainerRef;
    viewContainerRef.clear();
    this.personJobs.forEach(element => {
      const componentRef = viewContainerRef.createComponent<PersonComponent>(element.component);
      componentRef.instance.data = element.data;
    });
  }
}
