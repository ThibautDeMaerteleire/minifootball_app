<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    use HasFactory;

    public function sender() {
      return $this->hasOne('App\Models\Player');
    }

    public function receiver() {
      return $this->hasOne('App\Models\Player');
    }
}