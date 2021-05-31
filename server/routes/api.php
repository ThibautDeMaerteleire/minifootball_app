<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\TeamsController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

// Route::middleware('auth:sanctum')->post('/reset-password', function (Request $request) {
//   return 'test';
// });

// Route::middleware('auth:sanctum')->post('/change-email', function (Request $request) {
//   return 'test';
// });

Route::get('/dashboard', [PagesController::class, 'dashboard'])->middleware('auth:sanctum');

Route::get('/teams', [TeamsController::class, 'teams'])->middleware('auth:sanctum');

Route::get('/me', [UserController::class, 'me'])->middleware('auth:sanctum');