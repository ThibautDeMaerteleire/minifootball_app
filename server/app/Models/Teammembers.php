<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teammembers extends Model
{
    use HasFactory;

    public function player_id() {
      return $this->hasOne('App\Models\Player');
    }

    public function function_id() {
      return $this->hasOne('App\Models\Functions');
    }

    public function team_id() {
      return $this->hasOne('App\Models\Teams');
    }
}