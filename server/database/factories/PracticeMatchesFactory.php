<?php

namespace Database\Factories;

use App\Models\PracticeMatches;
use Illuminate\Database\Eloquent\Factories\Factory;

class PracticeMatchesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PracticeMatches::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'home_team' => random_int(0, 10),
            'away_team' => random_int(0, 10),
            'accepted' => null,
            'request_by' => random_int(0, 10),
        ];
    }
}