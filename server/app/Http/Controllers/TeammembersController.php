<?php

namespace App\Http\Controllers;

use App\Models\Teammembers;
use App\Models\Teams;
use Illuminate\Http\Request;

class TeammembersController extends Controller {

  public function getTeamMembers(Request $request, $id) {
    $teammembers = Teammembers::where('team_id', $id)
      ->with(['function', 'player.user'])
      ->orderBy('function_id', 'desc')
      ->get();
    return $teammembers;
  }

  public function addTeammembers(Request $request) {
    $GLOBALS['teamId'] = $request->teamId;
    $players = [];
    $checkEmpty = count($request->players) === 0;
    

    // Mapper
    $players = collect($request->players)->map(function ($player) {
      return [
        'player_id' => $player['id'],
        'function_id' => $player['function'],
        'team_id' => $GLOBALS['teamId'],
      ];
    });
    $players = $players->toArray();
    
    if (!$request->addMyselfAsAdmin) {
      if (!$checkEmpty) {
        $teammembers = Teammembers::insert($players);
      } else {
        return abort(418, 'You need to give some players at least.');
      }
    } else {
      $me = [
        'player_id' => $request->user()->id,
        'function_id' => 10,
        'team_id' => $GLOBALS['teamId'],
      ];
      array_push($players, $me);
      $teammembers = Teammembers::insert($checkEmpty ? $me : $players);
    }
    
    return $teammembers;
  }


  public function getBirthDays(Request $request) {
    $allTeams = Teammembers::where('player_id', $request->user()->id)->get('team_id');
    $teamsArr = collect($allTeams)->map(function ($team) {
      return $team['team_id'];
    });
    
    return Teammembers::with(['user', 'player'])
      ->whereIn('team_id', $teamsArr->toArray())
      ->get();
  }


  public function getTeamWithFunction(Request $request, $id) {
    $me = Teammembers::where('team_id', $id)
      ->where('player_id', $request->user()->id)
      ->with('team', 'function')
      ->limit(1)
      ->get();
    
    if (count($me) > 0) {
      return $me[0];
    } else {
      return ['team' => Teams::find($id)];
    }
  }
}