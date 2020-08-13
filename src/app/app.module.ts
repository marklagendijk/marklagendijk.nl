import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { IconModule } from "@visurel/iconify-angular";
import { ProfileComponent } from "./profile/profile.component";
import { RepositoryListComponent } from "./repository-list/repository-list.component";
import { ServerComponent } from "./server/server.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryListComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
