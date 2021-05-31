<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamsController extends Controller {
  public function getTeams(Request $request) {
    $teams = DB::table('teammembers')
      ->leftJoin('teams', 'teammembers.team_id', '=', 'teams.id')
      ->where('teammembers.player_id', $request->user()->id)
      ->get();
    
    return $teams;
  }
}