import { Component } from '@angular/core';

@Component({
  selector: 'app-education-levels',
  templateUrl: './education-levels.component.html',
  styleUrl: './education-levels.component.css'
})
export class EducationLevelsComponent {
  babyPhotoDefault:string = "assets/images/babyClass3.jpg";
  babyPhoto:string = this.babyPhotoDefault;

  kidPhotoDefault:string = "assets/images/kidClass2.jpg";
  kidPhoto:string = this.kidPhotoDefault;

  teenPhotoDefault:string = "assets/images/teenClass1.jpg";
  teenPhoto:string = this.teenPhotoDefault;

  youngAdultPhotoDefault:string = "assets/images/youngAdultClass3.jpg";
  youngAdultPhoto:string = this.youngAdultPhotoDefault;
}
