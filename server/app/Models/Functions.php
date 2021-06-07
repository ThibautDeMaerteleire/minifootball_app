<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Functions extends Model {
  use HasFactory;

  public function teammembers() {
    return $this->belongsToMany(Teammembers::class, 'function_id');
  }

  public $timestamps = true;  
}