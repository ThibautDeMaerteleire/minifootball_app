<?php

namespace App\Http\Controllers;

use App\Mail\ForgotPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Error;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Throwable;

class AuthController extends Controller {

  public function register(Request $request) {
    
    if(count(User::find(['email' => $request->input('email')])) > 0) {
      return response()->json([
        'message' => 'Email already exists' . $request->input('email')
      ], 406);
    }

    if(count(User::find(['username' => $request->input('username')])) > 0) {
      return response()->json([
        'message' => 'Username already exists'
      ], 406);
    }
    
    $validatedData = $request->validate([
      'email' => 'required|string|email|max:255|unique:users',
      'username' => 'required|string|min:5|max:30|unique:users',
      'password' => 'required|string|min:6',
    ]);
        
    $user = User::create([
      'email' => $validatedData['email'],
      'email_verified_at' => null,
      'username' => $validatedData['username'],
      'language' => 'nl',
      'password' => Hash::make($validatedData['password']),
    ]);
    
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
      'access_token' => $token,
      'token_type' => 'Bearer',
    ]);
  }

  public function login(Request $request) {
    if (!Auth::attempt($request->only('email', 'password'))) {
      return response()->json([
        'message' => 'Invalid login details'
      ], 401);
    }

    $user = User::where('email', $request['email'])->firstOrFail();

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
      'access_token' => $token,
      'token_type' => 'Bearer',
    ]);
  }

  public function forgotPassword(Request $request) {
    $user = DB::table('users')->where('email', $request->email)->limit(1)->get();
    
    if (count($user) > 0) {
      $user = $user[0];
      Mail::to($user->email)->send(new ForgotPassword($user));
      return ['message' => "We've sent you an email. <br/> Check your inbox."];
    } else {
      return abort(404, "The emailaddress doesn't exists.");
    }
  }
}