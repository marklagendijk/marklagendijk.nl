import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const repositoryQuery = gql(`
query($username: String!) {
  user(login: $username){
    login
    avatarUrl
    name
    company
    email
    websiteUrl
    repositories(isFork: false, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}, first: 100) {
      totalCount
      nodes {
        name
        description
        url
        languages(first: 5){
          nodes{
            color
            name
          }
        }
        issues{
          totalCount
        }
        stargazers{
          totalCount
        }
        pullRequests{
          totalCount
        }
      }
    }
  }
}
`);

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private apollo: Apollo) { }

  getUserWithRepositories(username: string): Observable<any> {
    return this.apollo
      .watchQuery<any>({
        query: repositoryQuery,
        variables: {
          username
        }
      })
      .valueChanges
      .pipe(
        map(result => result.data),
      );
  }
}
