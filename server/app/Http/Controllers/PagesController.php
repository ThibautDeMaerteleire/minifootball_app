<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class PagesController extends Controller {
  
  public function dashboard(Request $request) {
    $userController = new UserController();
    $teamsController = new TeamsController();
    $rbfaController = new RBFAController();
    
    $data = $userController->me($request);
    $data->teams = $teamsController->getTeams($request);
    $data->upcomingMatches = $rbfaController->getUpcomingMatchesTeams($request, $data->teams);
    
    return $data;
  }

  public function createPlayer(Request $request) {
    $playerController = new PlayerController();
    return $playerController->createPlayer($request);
  }
}