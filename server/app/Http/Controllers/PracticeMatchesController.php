<?php

namespace App\Http\Controllers;

use App\Models\PracticeMatches;
use Illuminate\Http\Request;

class PracticeMatchesController extends Controller {
  public function Overview(Request $request, $id) {
    $matches = PracticeMatches::with(['homeTeam', 'awayTeam', 'requestBy'])
      ->where('home_team', $id)
      ->orWhere('away_team', $id)
      ->orderBy('date')
      ->get();

    return $matches;
  }

  public function AcceptRequest(Request $request) {
    $match = PracticeMatches::where('id', $request->id)
      ->update([
        'accepted' => true,
      ]);

    return $match;
  }

  public function Create(Request $request) {
    $practiceMatch = PracticeMatches::insert([
      'home_team' => $request->home_team,
      'away_team' => $request->away_team,
      'accepted' => false,
      'request_by' => $request->user()->id,
      'date' => date('Y-m-d H:i:s', strtotime($request->date)),
    ]);
    
    return $practiceMatch;
  }
}