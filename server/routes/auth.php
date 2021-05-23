<?php 
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->post('/login', function (Request $request) {
  return 'test';
});

Route::middleware('auth:sanctum')->post('/register', function (Request $request) {
  return 'test';
});

Route::middleware('auth:sanctum')->post('/reset-password', function (Request $request) {
  return 'test';
});

Route::middleware('auth:sanctum')->post('/change-email', function (Request $request) {
  return 'test';
});