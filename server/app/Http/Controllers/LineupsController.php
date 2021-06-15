<?php

namespace App\Http\Controllers;

use App\Models\Lineups;
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
      'name' => $request->name,
      'team_id' => $request->team_id,
      'defenders' => $request->defenders,
      'attackers' => $request->attackers,
      'selection' => $request->selection,
    ]);
    
    return $lineup;
  }
}