<?php

namespace App\Http\Controllers;

use App\Models\Tutorials;
use Illuminate\Http\Request;

class TutorialsController extends Controller {
  public function searchTutorials(Request $request) {
    $tutorials = Tutorials::where('title', 'LIKE', "%{$request->search}%")->get();
    return $tutorials;
  }
}