<?php

namespace Database\Factories;

use App\Models\Updates;
use Illuminate\Database\Eloquent\Factories\Factory;

class UpdatesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Updates::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'version' => random_int(0, 10).random_int(0, 10).random_int(0, 10),
            'title' => $this->faker->title(),
            'content' => $this->faker->text(),
            'features' => json_encode([$this->faker->title(), $this->faker->title(), $this->faker->title(), $this->faker->title()]),
        ];
    }
}