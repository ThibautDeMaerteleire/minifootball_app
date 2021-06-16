<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLineupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('lineups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('team_id');
            $table->string('formation');
            $table->json('selection')->comment('An array with all of the features listed as strings');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('lineups');
    }
}