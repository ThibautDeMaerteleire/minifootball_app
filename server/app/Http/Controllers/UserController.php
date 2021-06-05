<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {
  
  public function user($id) {    
    $user = User::find($id);
    $playerData = Player::where('user_id', $id)->get();
    $user->player = count($playerData) > 0 ? $playerData[0] : (object) [];
    
    return $user;
  }
  
  public function me(Request $request) {
    $me = $this->user($request->user()->id);
    return $me;
  }

}