<?php

namespace Database\Factories;

use App\Models\Teammembers;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeammembersFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Teammembers::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'player_id' => random_int(0, 10),
            'function_id' => random_int(0, 10),
            'team_id' => random_int(0, 10),
        ];
    }
}