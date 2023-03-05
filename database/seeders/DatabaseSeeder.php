<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Dog;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test',
            'email' => 'test@example.com',
        ]);

        User::factory(10)->create();

        // 0 dogs for user 1, on second migration seed 0 dogs for user 1 and 2, on 3rd 0 dogs for user 3 and 4 ???
        $users = User::all();
        foreach ($users as $key => $user) {
          $user->dogs()->saveMany(Dog::factory(rand(1,3))->create());
        }


        $this->call(SkillSeeder::class);


    }
}
