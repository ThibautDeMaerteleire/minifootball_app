<?php

namespace Database\Factories;

use App\Models\Tutorials;
use Illuminate\Database\Eloquent\Factories\Factory;

class TutorialsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tutorials::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title(),
            'youtube_url' => $this->faker->url(),
        ];
    }
}