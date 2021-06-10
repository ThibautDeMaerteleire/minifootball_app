<?php

use App\Http\Controllers\AssetsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FunctionsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\TeammembersController;
use App\Http\Controllers\TeamsController;
use App\Http\Controllers\TutorialsController;
use App\Http\Controllers\UpdatesController;
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

Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);

// Route::middleware('auth:sanctum')->post('/reset-password', function (Request $request) {
//   return 'test';
// });

Route::get('/dashboard', [PagesController::class, 'dashboard'])->middleware('auth:sanctum');

Route::post('/dashboard', [PagesController::class, 'createPlayer'])->middleware('auth:sanctum');

Route::get('/teams', [TeamsController::class, 'getTeams'])->middleware('auth:sanctum');

Route::post('/search-teams', [TeamsController::class, 'searchTeams'])->middleware('auth:sanctum');

Route::post('/create-team', [TeamsController::class, 'createTeam'])->middleware('auth:sanctum');

Route::post('/search-players', [PlayerController::class, 'searchPlayers'])->middleware('auth:sanctum');

Route::post('/add-teammembers', [TeammembersController::class, 'addTeammembers'])->middleware('auth:sanctum');

Route::get('/all-functions', [FunctionsController::class, 'getAll'])->middleware('auth:sanctum');

Route::get('/player/{id}', [UserController::class, 'getUser'])->middleware('auth:sanctum');

Route::get('/me', [UserController::class, 'me'])->middleware('auth:sanctum');

Route::get('/birthdays', [TeammembersController::class, 'getBirthdays'])->middleware('auth:sanctum');

Route::post('/upload/image', [AssetsController::class, 'uploadImage'])->middleware('auth:sanctum');

Route::post('/search-tutorials', [TutorialsController::class, 'searchTutorials'])->middleware('auth:sanctum');

Route::get('/updates', [UpdatesController::class, 'getAllUpdates'])->middleware('auth:sanctum');

Route::get('/team/{id}', [TeammembersController::class, 'getTeamWithFunction'])->middleware('auth:sanctum');