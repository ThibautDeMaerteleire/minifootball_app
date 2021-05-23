<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller {

  public function register(Request $request) {
    
    $validatedData = $request->validate([
      'email' => 'required|string|email|max:255|unique:users',
      'password' => 'required|string|min:8',
    ]);
        
    $user = User::create([
      'email' => $validatedData['email'],
      'email_verified_at' => null,
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