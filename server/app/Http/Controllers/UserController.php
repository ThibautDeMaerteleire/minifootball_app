<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class UserController extends Controller {
  
  public function me(Request $request) {
    $player = Player::find(1)->where('user_id', $request->user()->id);

    $data = $request->user();
    $data->player = $player;

    return $data;
  }

}