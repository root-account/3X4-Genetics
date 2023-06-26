<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    protected $model = Patient::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'surname' => $this->faker->lastName,
            'address' => $this->faker->address,
            'phone_number' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
        ];
    }
}