<?php

namespace App\Http\Controllers;

use App\Models\Teammembers;
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
}