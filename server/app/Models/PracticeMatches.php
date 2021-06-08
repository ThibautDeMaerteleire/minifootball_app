<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticeMatches extends Model {
  use HasFactory;

   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'home_team',
    'away_team',
    'accepted',
    'request_by',
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
  
  public function teammembers() {
    return $this->belongsToMany(Teammembers::class, 'team_id');
  }
  
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