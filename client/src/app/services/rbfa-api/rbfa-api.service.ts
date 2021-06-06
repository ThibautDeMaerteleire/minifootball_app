import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RbfaApiService {

  public searchClubs(search: string, language = 'nl', first = 10, offset = 0): string {
    return `https://datalake-prod2018.rbfa.be/graphql?operationName=DoSearch&variables={"first":${first},"offset":${offset},"filter":{"query":"${search}","type":"club"},"language":"${language}","channel":"belgianfootball","location":"BE"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"c120b8966cc8f35c5057d149b6071938f597909486fa820b2e8385a50a5dd938"}}`;
  }

  public searchClubTeams(clubId: number | string, language = 'nl'): string {
    return `https://datalake-prod2018.rbfa.be/graphql?operationName=getClubTeams&variables={"clubId":"${clubId}","language":"${language}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"d44e19259679780fe6932644072463997cfe60b66c223d8ba1f53430b0671728"}}`;
  }

  public clubInfo(clubId: number | string, language = 'nl'): string {
    return `https://datalake-prod2018.rbfa.be/graphql?operationName=getClubInfo&variables={"clubId":"${clubId}","language":"${language}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"e882264b79eaabb7f66f94101fc81921565fa9496ea0c9604e8c6115b83a527a"`;
  }

}
