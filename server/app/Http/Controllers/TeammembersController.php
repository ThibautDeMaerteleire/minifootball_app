<?php

namespace App\Http\Controllers;

use App\Models\Teammembers;
use App\Models\Teams;
use Illuminate\Http\Request;

class TeammembersController extends Controller {

  public function addTeammembers(Request $request) {
    $GLOBALS['teamId'] = $request->teamId;
    $players = [];
    $checkEmpty = count($request->players) === 0;
    
    $me = [
      'player_id' => $request->user()->id,
      'function_id' => 10,
      'team_id' => $GLOBALS['teamId'],
    ];
    
    // Mapper
    if (!$checkEmpty) {
      $players = collect($request->players)->map(function ($player) {
        return [
          'player_id' => $player['id'],
          'function_id' => $player['function'],
          'team_id' => $GLOBALS['teamId'],
        ];
      });

      $players = $players->toArray();
      array_push($players, $me);
    }
    
    $teammembers = Teammembers::insert($checkEmpty ? $me : $players);
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