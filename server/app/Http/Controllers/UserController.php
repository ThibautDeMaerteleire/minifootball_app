<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller {
  
  public function user($id) {    
    $user = User::find($id)->player;    
    return $user;
  }
  
  public function me(Request $request) {
    $me = $this->user($request->user()->id);
    return $me;
  }

}