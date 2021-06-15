<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePracticeMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('practice_matches', function (Blueprint $table) {
            $table->id();
            $table->integer('home_team');
            $table->integer('away_team');
            $table->boolean('accepted')->nullable();
            $table->integer('request_by')->comment('User ID from player who requested exercise match');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('practice_matches');
    }
}