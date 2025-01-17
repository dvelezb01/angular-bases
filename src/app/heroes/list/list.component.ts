import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: String[] = ['Spiderman','Ironman','Hulk','Thor','Loki'];
  public deletedHero?: String;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
