<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {
  
  public function user(Request $request, $id) {
    // $user = DB::table('users')
    //   ->leftJoin('players', 'users.id', '=', 'players.user_id')
    //   ->where('users.id', $id)
    //   ->limit(1)
    //   ->get(['*', 'users.id as id', 'players.id as player_id']);
    
    $user = User::find($id);
    $user->player = Player::where('user_id', $id);

    return $user;
  }
  
  public function me(Request $request) {
    $me = $this->user($request, $request->user()->id);
    return $me;
  }


}