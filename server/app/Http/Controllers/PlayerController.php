<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Teammembers;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlayerController extends Controller {
  
  public function createPlayer(Request $request) {  
    $data = Player::create([
      'user_id' => $request->user()->id,
      'name' => $request->name,
      'surname' => $request->surname,
      'thumbnail_path' => $request->thumbnail_path,
      'birthday' =>  date('Y-m-d H:i:s', strtotime($request->birthday)),
    ]);
    
    return $data;
  }

  public function updatePlayer(Request $request) {    
    $data = Player::where('user_id', $request->user()->id)
      ->update([
        'name' => $request->name,
        'surname' => $request->surname,
        'thumbnail_path' => $request->thumbnail,
        'birthday' => $request->birthday,
      ]);
    
    return $data;
  }
  
  public function getAllPlayers(Request $request) {    
    $teammembers = Teammembers::where('team_id', '!=', $request->teamId)->get('id');
    $players = Player::whereNotIn('user_id', $teammembers)
      ->whereNotIn('user_id', $request->user()->id)
      ->first(10)
      ->get();
    
    return $players;
  }

  public function searchPlayers(Request $request) {
    $teammembers = Teammembers::where('team_id', '!=', $request->teamId)->get('id');

    $players = DB::table('players')
      ->leftJoin('users', 'players.user_id', '=', 'users.id')
      ->where('players.user_id', '!=', $request->user()->id)
      ->whereNotIn('players.user_id', $teammembers)
      ->where(function($query, $request) {
        $query->orWhere('users.email', 'like', "%{$request->search}%")
              ->orWhere('users.username', 'like', "%{$request->search}%")
              ->orWhere('players.name', 'like', "%{$request->search}%")
              ->orWhere('players.surname', 'like', "%{$request->search}%");
      })
      ->first(10)
      ->get();

    return $players;
  }
}