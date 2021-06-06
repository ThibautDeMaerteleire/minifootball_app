<?php

namespace Database\Seeders;

use App\Models\Functions;
use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        $functions = [[
            'name' => 'requested_acces',
            'description' => 'You requested access for a team.'
        ], [
            'name' => 'fan',
            'description' => 'You\'re a fan of this team.',
        ], [
            'name' => 'player',
            'description' => 'You\'re a player of this team.',
        ], [
            'name' => 'delegate',
            'description' => 'You\'re part of the staff.',
        ], [
            'name' => 'interim_trainer',
            'description' => 'You\'re the interim trainer for a match.',
        ], [
            'name' => 'trainer',
            'description' => 'You\'re the trainer of the team.',
        ], [
            'name' => 'coordinator',
            'description' => 'You\'re a coordinator in the club of a group.',
        ], [
            'name' => 'secretary',
            'description' => 'You help with the administration.',
        ], [
            'name' => 'board',
            'description' => 'You\'re one of the board members of the club.',
        ], [
            'name' => 'admin',
            'description' => 'You\'re the owner of the team.',
        ]];
      
        \App\Models\User::factory(10)->create();
        \App\Models\Messages::factory(10)->create();
        \App\Models\Player::factory(10)->create();
        \App\Models\Teams::factory(10)->create();
        \App\Models\PracticeMatches::factory(10)->create();
        \App\Models\Teammembers::factory(10)->create();
        \App\Models\Tutorials::factory(10)->create();
        \App\Models\Updates::factory(10)->create();

        $prepared = collect($functions)->map(function($item) {
            $item['created_at'] = Date::createFromTimestamp(time());
            $item['updated_at'] = Date::createFromTimestamp(time());
            return $item;
        });

        Functions::insert($prepared->toArray());
    }
}