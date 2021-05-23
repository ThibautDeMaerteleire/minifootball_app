<?php

namespace Database\Factories;

use App\Models\Messages;
use Illuminate\Database\Eloquent\Factories\Factory;

class MessagesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Messages::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'sender_id' => random_int(0, 10),
            'receiver_id' => random_int(0, 10),
            'content' => $this->faker->text(),
        ];
    }
}