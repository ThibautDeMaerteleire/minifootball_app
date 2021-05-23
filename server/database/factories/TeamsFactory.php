<?php

namespace Database\Factories;

use App\Models\Teams;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Teams::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'description'=> $this->faker->text(),
            'slogan' => $this->faker->text(50),
            'rbfa_id' => $this->faker->text(10),
        ];
    }
}