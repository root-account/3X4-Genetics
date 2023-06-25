<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Patient;
use App\Models\Kit;
use Faker\Factory as Faker;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed fake orders
        //Also consider that IDs must already exist from kits and patients table
        $faker = Faker::create();

        $patients = Patient::pluck('id')->all();
        $kits = Kit::pluck('id')->all();

        for ($i = 0; $i < 10; $i++) {
            $patientId = $faker->randomElement($patients);
            $kitId = $faker->randomElement($kits);

            Order::create([
                'patient_id' => $patientId,
                'kit_id' => $kitId,
                'paid' => $faker->boolean,
            ]);
        }

    }
}
