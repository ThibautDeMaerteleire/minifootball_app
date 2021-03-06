<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RBFAController extends Controller {

  public function searchClub(Request $request, $searchStr, $amount = 10, $offset = 0) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=DoSearch&variables={\"first\":{$amount},\"offset\":{$offset},\"filter\":{\"query\":\"{$searchStr}\"},\"language\":\"{$request->user()->language}\",\"channel\":\"belgianfootball\",\"location\":\"BE\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"c120b8966cc8f35c5057d149b6071938f597909486fa820b2e8385a50a5dd938\"}}";
    
    return Http::get($url);
  }

  public function getClubInfo(Request $request, $clubId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=getClubInfo&variables={\"clubId\":\"{$clubId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"e882264b79eaabb7f66f94101fc81921565fa9496ea0c9604e8c6115b83a527a\"}}";

    return Http::get($url);
  }

  public function getClubMatches(Request $request, $clubId, $startDate = "2000/09/25", $endDate= "2020/10/01") {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=clubMatchesAssignations&variables={\"clubId\":\"{$clubId}\",\"language\":\"{$request->user()->language}\",\"startDate\":\"{$startDate}\",\"endDate\":\"{$endDate}\",\"hasLocation\":false}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"dce94fb92144a8ad9585674cd5ebc07953abbfb024f24ee50fe2ba9237e29542\"}}";

    return Http::get($url);
  }

  public function getClub(Request $request, $clubId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=getClub&variables={\"clubId\":\"{$clubId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"06c0247013693e2d50cc348462b47640d0c1b61e12e6c0c618534c2d404e4779\"}}";

    return Http::get($url);
  }

  public function getAllClubTeams(Request $request, $clubId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=getClubTeams&variables={\"clubId\":\"{$clubId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"d44e19259679780fe6932644072463997cfe60b66c223d8ba1f53430b0671728\"}}";
    
    return Http::get($url);
  }
  
  public function getUpcomingMatches(Request $request, $teamId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables={\"teamId\":\"{$teamId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d\"}}";

    return Http::get($url);
  }

  public function getLastPlayedMatches(Request $request, $teamId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables={\"teamId\":\"{$teamId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092\"}}";

    return Http::get($url);
  }

  public function getRanking(Request $request, $teamId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=getSeriesAndRankingsQuery&variables={\"teamId\":\"{$teamId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"ac1d225e713827feea3013deb89bff2740c3c623079807f36374212eb92ea285\"}}";

    return Http::get($url);
  }

  public function getTeam(Request $request, $teamId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeam&variables={\"teamId\":\"{$teamId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"66888f01d376a6484c0c6824e5f266cb3c3513ab83964e50e0a7c30b8fddb4fa\"}}";

    return Http::get($url);
  }
  
  public function getTeamCalendar(Request $request, $teamId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables={\"teamId\":\"{$teamId}\",\"language\":\"{$request->user()->language}\",\"sortByDate\":\"asc\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d\"}}";

    return Http::get($url);
  }

  public function getTeamMembers(Request $request, $teamId) {
    $url = "https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamMembers&variables={\"teamId\":\"{$teamId}\",\"language\":\"{$request->user()->language}\"}&extensions={\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"cbbaa32e4580c9385409c85464d2578c88f1c051f6e3c55a2e5a47f11dce9e64\"}}";

    return Http::get($url);
  }
  
  // Get upcoming matches from multiple teams
  public function getUpcomingMatchesTeams(Request $request, $teams) {
    $data = [];
    
    foreach ($teams as $team) {
      array_push($data, $this->getUpcomingMatches($request, $team["team"]["rbfa_team_id"]));
    }
    
    return $data;
  } 
}