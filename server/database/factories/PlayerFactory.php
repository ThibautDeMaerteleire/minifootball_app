<?php

namespace Database\Factories;

use App\Models\Player;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlayerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Player::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'birthday' => $this->faker->date(),
            'name' => $this->faker->firstName(),
            'surname' => $this->faker->lastName(),
            'thumbnail' => '/default/default-thumbnail.jpg',
            'user_id' => random_int(1, 11),
        ];          
    }
}