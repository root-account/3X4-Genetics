<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Kit;
use App\Models\Patient;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {
        return [
            'kit_id' => Kit::factory(),
            'patient_id' => Patient::factory(),
            'paid' => $this->faker->boolean,
        ];
    }
}