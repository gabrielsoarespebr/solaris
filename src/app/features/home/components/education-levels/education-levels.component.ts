import { Component } from '@angular/core';

@Component({
  selector: 'app-education-levels',
  templateUrl: './education-levels.component.html',
  styleUrl: './education-levels.component.css',
})
export class EducationLevelsComponent {
  babyPhoto: string = 'assets/images/babyClass3.jpg';
  kidPhoto: string = 'assets/images/kidClass2.jpg';
  teenPhoto: string = 'assets/images/teenClass1.jpg';
  youngAdultPhoto: string = 'assets/images/youngAdultClass3.jpg';

  onMouserOver(lifeStage: string): void {
    if (lifeStage === 'baby') this.babyPhoto = 'assets/images/babyClass8.jpg';
    if (lifeStage === 'kid') this.kidPhoto = 'assets/images/kidClass1.jpg';
    if (lifeStage === 'teen') this.teenPhoto = 'assets/images/teenClass4.jpg';
    if (lifeStage === 'youngAdult')
      this.youngAdultPhoto = 'assets/images/youngAdultClass4.jpg';
  }

  onMouserOut(lifeStage: string): void {
    if (lifeStage === 'baby') this.babyPhoto = 'assets/images/babyClass3.jpg';
    if (lifeStage === 'kid') this.kidPhoto = 'assets/images/kidClass2.jpg';
    if (lifeStage === 'teen') this.teenPhoto = 'assets/images/teenClass1.jpg';
    if (lifeStage === 'youngAdult')
      this.youngAdultPhoto = 'assets/images/youngAdultClass3.jpg';
  }
}
