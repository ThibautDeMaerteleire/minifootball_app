<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {
  
  public function user(Request $request) {
    // $user = DB::table('users')
    //   ->leftJoin('players', 'users.id', '=', 'players.user_id')
    //   ->where('users.id', $id)
    //   ->limit(1)
    //   ->get(['*', 'users.id as id', 'players.id as player_id']);
    
    $user = User::find($request->user()->id);
    $user->player = Player::where('user_id', $request->user()->id)->get()[0];
    
    return $user;
  }
  
  public function me(Request $request) {
    $me = $this->user($request);
    return $me;
  }

}