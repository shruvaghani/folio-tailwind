import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { JobDetails, jobDetailsData, jobMetaData } from '../../data';

@Component({
  selector: 'career-single-job',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './job.html',
  styles: ``,
})
export class Job {
  data: JobDetails = jobDetailsData;
  jobMetaData = jobMetaData;
}
