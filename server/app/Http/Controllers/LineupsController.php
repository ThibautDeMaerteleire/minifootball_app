<?php

namespace App\Http\Controllers;

use App\Models\Lineups;
use App\Models\Teams;
use Illuminate\Http\Request;

class LineupsController extends Controller {
  
  public function getLineups(Request $request, $teamId) {
    $allLineups = Lineups::where('team_id', $teamId)
      ->with('team')
      ->get();
    return $allLineups;
  }

  public function getLineup(Request $request, $id) {
    $lineup = Lineups::find($id);
    return $lineup;
  }

  public function createLineup(Request $request) {
    $lineup = Lineups::insert([
      'name' => strlen($request->name) > 0 ? $request->name : "{{$request->user()->username}}'s {{$request->formation}}",
      'team_id' => $request->team_id,
      'formation' => $request->formation,
      'selection' => json_encode($request->selection),
    ]);
    
    return $lineup;
  }
}