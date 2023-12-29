// education-levels.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "app-education-levels",
  templateUrl: "./education-levels.component.html",
  styleUrls: ["./education-levels.component.css"],
})
export class EducationLevelsComponent {
  babyPhoto: string = "assets/images/babyClass3.jpg";
  kidPhoto: string = "assets/images/kidClass2.jpg";
  teenPhoto: string = "assets/images/teenClass1.jpg";
  youngAdultPhoto: string = "assets/images/youngAdultClass3.jpg";

  // Utiliza um objeto para rastrear a classe de transição de cada item
  fadeClasses: { [key: string]: string } = {
    baby: "",
    kid: "",
    teen: "",
    youngAdult: "",
  };

  onMouserOver(lifeStage: string): void {
    this.fadeClasses[lifeStage] = "fade-in";
    setTimeout(() => {
      this.updateImage(lifeStage);
      this.fadeClasses[lifeStage] = "fade-out";
    }, 300);
  }

  onMouserOut(lifeStage: string): void {
    this.fadeClasses[lifeStage] = "fade-in";
    setTimeout(() => {
      this.resetImages(lifeStage);
      this.fadeClasses[lifeStage] = "fade-out";
    }, 300);
  }

  private updateImage(lifeStage: string): void {
    // Atualiza a imagem com base na fase de vida
    switch (lifeStage) {
      case "baby":
        this.babyPhoto = "assets/images/babyClass8.jpg";
        break;
      case "kid":
        this.kidPhoto = "assets/images/kidClass1.jpg";
        break;
      case "teen":
        this.teenPhoto = "assets/images/teenClass4.jpg";
        break;
      case "youngAdult":
        this.youngAdultPhoto = "assets/images/youngAdultClass4.jpg";
        break;
    }
  }

  private resetImages(lifeStage: string): void {
    switch (lifeStage) {
      case "baby":
        this.babyPhoto = "assets/images/babyClass3.jpg";
        break;
      case "kid":
        this.kidPhoto = "assets/images/kidClass2.jpg";
        break;
      case "teen":
        this.teenPhoto = "assets/images/teenClass1.jpg";
        break;
      case "youngAdult":
        this.youngAdultPhoto = "assets/images/youngAdultClass3.jpg";
        break;
    }
  }
}
