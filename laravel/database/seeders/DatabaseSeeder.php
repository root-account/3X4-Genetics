<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // Clear the DB before adding new fake data
        Schema::disableForeignKeyConstraints();
        
        // Truncate tables
        DB::table('orders')->truncate();
        DB::table('patients')->truncate();
        DB::table('kits')->truncate();
        
        Schema::enableForeignKeyConstraints();

        // Call the seeders from class
        $this->call(KitSeeder::class);
        $this->call(PatientSeeder::class);
        $this->call(OrderSeeder::class);
    }
}
