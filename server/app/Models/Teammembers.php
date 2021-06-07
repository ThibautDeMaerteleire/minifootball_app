<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teammembers extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'player_id',
    'function_id',
    'team_id',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
  ];
  
  public function user() {
    return $this->hasOne(User::class, 'id', 'player_id');
  }

  public function func() {
    return $this->hasOne(Functions::class, 'id', 'function_id');
  }

  public function team() {
    return $this->hasOne(Teams::class, 'id', 'team_id');
  }

  public $timestamps = true;
}