<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Messages::factory(10)->create();
        \App\Models\Player::factory(10)->create();
        \App\Models\Teams::factory(10)->create();
        \App\Models\PracticeMatches::factory(10)->create();
        \App\Models\Teammembers::factory(10)->create();
        \App\Models\Functions::factory(10)->create();
        \App\Models\Tutorials::factory(10)->create();
        \App\Models\Updates::factory(10)->create();
    }
}