<?php

namespace App\Http\Controllers;

use App\Models\Teammembers;
use App\Models\Teams;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamsController extends Controller {
  
  public function getTeams(Request $request) {
    $teams = Teammembers::with(['team'])
      ->where('player_id', strval($request->user()->id))
      ->get();

    return $teams;
  }

  public function searchTeams(Request $request) {
    $teams = Teams::where('name', 'like', "%{$request->search}%")->get();
    return $teams;
  }

  public function createTeam(Request $request) {
    $teammembersController = new TeammembersController;

    $team = Teams::create([
      'name' => $request->name,
      'description' => $request->description,
      'slogan' => $request->slogan,
      'thumbnail' => $request->thumbnail,
      'rbfa_club_id' => $request->rbfa_club_id,
      'rbfa_team_id' => $request->rbfa_team_id,
    ]);

    $request->teamId = $team->id;
    $teammembersController->addTeammembers($request);

    return $team;
  }
}