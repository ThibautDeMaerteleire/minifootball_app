<?php

namespace App\Http\Controllers;

use App\Models\Functions;
use Illuminate\Http\Request;

class FunctionsController extends Controller {
  public function getAll(Request $request) {
    $allFunctions = Functions::all();
    return $allFunctions;
  }
}