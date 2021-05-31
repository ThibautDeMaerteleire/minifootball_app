<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class PagesController extends Controller {
  
  public function dashboard(Request $request) {
    $userController = new UserController();
    $teamsController = new TeamsController();
    
    $data = $userController->me($request);
    $data->teams = $teamsController->getTeams($request);
    
    return $data;
  }
}