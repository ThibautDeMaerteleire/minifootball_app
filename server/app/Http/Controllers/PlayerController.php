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
      'thumbnail' => $request->thumbnail,
      'birthday' =>  date('Y-m-d H:i:s', strtotime($request->birthday)),
    ]);
    
    return $data;
  }

  public function updatePlayer(Request $request) {    
    $data = Player::where('user_id', $request->user()->id)
      ->update([
        'name' => $request->name,
        'surname' => $request->surname,
        'thumbnail' => $request->thumbnail,
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
    $GLOBALS['search'] = $request->search;
    $teammembers = Teammembers::where('team_id', $request->teamId)->get('player_id');
    $teammemberIds = [];
    foreach ($teammembers as $item) {
      array_push($teammemberIds, $item->player_id);
    }

    // return $teammemberIds;
    $players = ['page' => $request->page];
    
    $players['totalItems'] =  DB::table('users')
    ->leftJoin('players', 'users.id', '=', 'players.user_id')
    ->where('players.user_id', '!=', $request->user()->id)
    ->whereNotIn('users.id', $teammemberIds)
    ->where(function($query) {
      $query->where('users.email', 'like', "%{$GLOBALS['search']}%")
            ->orWhere('users.username', 'like', "%{$GLOBALS['search']}%")
            ->orWhere('players.name', 'like', "%{$GLOBALS['search']}%")
            ->orWhere('players.surname', 'like', "%{$GLOBALS['search']}%");
    })
    ->count();
    
    $players['data'] = DB::table('users')
      ->leftJoin('players', 'users.id', '=', 'players.user_id')
      ->where('players.user_id', '!=', $request->user()->id)
      ->whereNotIn('users.id', $teammemberIds)
      ->where(function($query) {
        $query->where('users.email', 'like', "%{$GLOBALS['search']}%")
              ->orWhere('users.username', 'like', "%{$GLOBALS['search']}%")
              ->orWhere('players.name', 'like', "%{$GLOBALS['search']}%")
              ->orWhere('players.surname', 'like', "%{$GLOBALS['search']}%");
      })
      ->offset(($request->page-1)*10)
      ->limit(10)
      ->get([
        'users.id',
        'username',
        'surname',
        'name',
        'email',
        'birthday',
        'thumbnail'
      ]);

    return $players;
  }
}