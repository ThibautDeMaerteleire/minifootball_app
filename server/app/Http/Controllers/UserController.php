<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller {
  
  public function user($id) {    
    $user = User::with(['player'])->where('id', $id)->get();    
    return $user[0];
  }
  
  public function me(Request $request) {
    $me = $this->user($request->user()->id);
    return $me;
  }

}