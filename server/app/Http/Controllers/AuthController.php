<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller {

  public function register(Request $request) {
    
    if(User::find(['email' => $request->input('email')])) {
      return response()->json([
        'message' => 'Email already exists'
      ], 406);
    }

    if(User::find(['username' => $request->input('username')])) {
      return response()->json([
        'message' => 'Username already exists'
      ], 406);
    }
    
    $validatedData = $request->validate([
      'email' => 'required|string|email|max:255|unique:users',
      'username' => 'required|string|min:6|max:30|unique:users',
      'password' => 'required|string|min:6',
    ]);
        
    $user = User::create([
      'email' => $validatedData['email'],
      'email_verified_at' => null,
      'username' => $validatedData['username'],
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
}