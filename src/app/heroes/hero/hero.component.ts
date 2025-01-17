import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: String = 'Ironman';
  public age: number = 45;

  get capitalizedName():String {
    return this.name.toUpperCase();
  }

  getHeroDescription():String {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 22;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
