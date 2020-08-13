import { environment } from "./../environments/environment";
import { NgModule } from "@angular/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpHeaders } from "@angular/common/http";
import { ApolloClientOptions } from "apollo-client";

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri: "https://api.github.com/graphql",
      headers: new HttpHeaders({
        // This is a Personal Access Token for the GitHub API
        // The scopes of this Personal Access Token are limited to *public* data,
        // as such, there are no security implictations of putting it directly here.
        Authorization: `Bearer ${atob(
          "MDRkZDMxNmQ0ZDU1YTMyNzlmNGM4MzhiOTBhMDY0MGY3ODQ4NGE5Mw=="
        )}`,
      }),
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
