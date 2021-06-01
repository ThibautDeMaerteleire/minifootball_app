<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller {
  
  public function createPlayer(Request $request) {    
    $data = Player::create([
      'user_id' => $request->user()->id,
      'name' => $request->name,
      'surname' => $request->surname,
      'thumbnail_path' => $request->thumbnail_path,
    ]);
    
    return $data;
  }

  public function updatePlayer(Request $request) {    
    $data = Player::where('user_id', $request->user()->id)
      ->update([
        'name' => $request->name,
        'surname' => $request->surname,
        'thumbnail_path' => $request->thumbnail,
      ]);
    
    return $data;
  }
  
}