<?php

namespace Database\Factories;

use App\Models\Kit;
use Illuminate\Database\Eloquent\Factories\Factory;

class KitFactory extends Factory
{
    protected $model = Kit::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'price' => $this->faker->randomDigit,
            'description' => $this->faker->sentence,
        ];
    }
}