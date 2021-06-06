<?php

namespace Database\Factories;

use App\Models\Functions;
use Illuminate\Database\Eloquent\Factories\Factory;

class FunctionsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Functions::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [[
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
    }
}