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
    'date',
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
  
  public function homeTeam() {
    return $this->hasOne(Teams::class, 'id', 'home_team');
  }
  
  public function awayTeam() {
    return $this->hasOne(Teams::class, 'id', 'away_team');
  }

  public function requestBy() {
    return $this->hasOne(User::class, 'id', 'request_by');
  }
  
  public $timestamps = true;
}