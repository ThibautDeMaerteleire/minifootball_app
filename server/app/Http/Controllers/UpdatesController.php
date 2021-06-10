<?php

namespace App\Http\Controllers;

use App\Models\Updates;
use Illuminate\Http\Request;

class UpdatesController extends Controller {
  public function getAllUpdates(Request $request) {
    $updates = Updates::orderByDesc('version')->get();
    return $updates;
  }
}