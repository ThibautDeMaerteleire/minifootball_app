<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller {
  
  public function createPlayer(Request $request) {
    $assetsController = new AssetsController();
    
    $data = Player::create([
      'user_id' => $request->user()->id,
      'name' => $request->name,
      'surname' => $request->surname,
      'thumbnail_path' => $assetsController->uploadImage($request, $request->thumbnail),
    ]);
    
    return $data;
  }

  public function updatePlayer(Request $request) {
    $assetsController = new AssetsController();
    
    $data = Player::where('user_id', $request->user()->id)
      ->update([
        'name' => $request->name,
        'surname' => $request->surname,
        'thumbnail_path' => $assetsController->uploadImage($request, $request->thumbnail),
      ]);
    
    return $data;
  }
  
}