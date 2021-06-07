<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticeMatches extends Model {
  use HasFactory;
  
  public function home_team() {
    return $this->hasOne(Teams::class);
  }
  
  public function away_team() {
    return $this->hasOne(Teams::class);
  }

  public function request_by() {
    return $this->hasOne(User::class);
  }
  
  public $timestamps = true;
}