<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model {
    use HasFactory;

    /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
    protected $fillable = [
      'name',
      'surname',
      'birthday',
      'thumbnail',
      'user_id',
    ];

    public function user() {
      return $this->belongsTo('App\Models\User');
    }
}