<?php

namespace App\Http\Controllers;

use App\Models\Teams;
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

  public function searchTeams(Request $request) {
    $teams = Teams::where('name', 'like', "%{$request->search}%")->get();
    return $teams;
  }
}