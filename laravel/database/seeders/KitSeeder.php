<?php

namespace Database\Seeders;

use App\Models\Kit;
use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Seed fake data for Kits
        $faker = Faker::create();

        for ($i = 1; $i <= 10; $i++) {
            Kit::create([
                'name' => 'Kit ' . $i,
                'price' => $faker->randomFloat(2, 10, 100),
                'description' => $faker->paragraph,
            ]);
        }
    }
}
