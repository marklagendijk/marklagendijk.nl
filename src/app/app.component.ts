import { icons } from "./icons";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ɵa as IconService } from "@visurel/iconify-angular";
import { GitHubService } from "./git-hub.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  userWithRepositories$: Observable<any>;

  constructor(github: GitHubService, iconService: IconService) {
    this.userWithRepositories$ = github.getUserWithRepositories(
      "marklagendijk"
    );
    iconService.registerAll(icons);
  }

  ngOnInit(): void {}
}
