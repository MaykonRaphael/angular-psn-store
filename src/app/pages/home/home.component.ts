import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gameData = [
    {
      id: 1,
      gameImage: "",
      gameLabel: "",
      gamePrice: "",
      gameType: ""
    }
  ]

  constructor() {
    this.gameData = [
      {
        id: 1,
        gameImage: "assets/ac-cover.jpg",
        gameLabel: "GAME OF THE YEAR",
        gamePrice: "R$ 269.90",
        gameType: "DISC PS3 | PS4"
      },
      {
        id: 2,
        gameImage: "assets/bt-1.jpg",
        gameLabel: "GAME OF THE YEAR",
        gamePrice: "R$ 269.90",
        gameType: "DISC PS3 | PS4"
      },
      {
        id: 3,
        gameImage: "assets/bt-4.jpg",
        gameLabel: "GAME OF THE YEAR",
        gamePrice: "R$ 269.90",
        gameType: "DISC PS4 | PS5"
      },
      {
        id: 4,
        gameImage: "assets/bt-5.jpg",
        gameLabel: "GAME OF THE YEAR",
        gamePrice: "R$ 369.90",
        gameType: "DIGITAL PS4 | PS5"
      },
      {
        id: 5,
        gameImage: "assets/bt-bad-company-2.jpg",
        gameLabel: "EXCLUSIVE",
        gamePrice: "R$ 269.90",
        gameType: "DISC PS3 | PS4"
      },
      {
        id: 6,
        gameImage: "assets/bt-hardline.jpg",
        gameLabel: "DIGITAL",
        gamePrice: "R$ 269.90",
        gameType: "DIGITAL PS3 | PS4"
      }
    ]
  }
}
