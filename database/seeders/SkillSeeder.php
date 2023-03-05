<?php

namespace Database\Seeders;

use File;
use App\Models\Skill;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $json = File::get("database/data/skills.json");
      $skills = json_decode($json);

      foreach ($skills as $key => $skill) {
          Skill::create([
              "name" => $skill->name,
              "category" => $skill->category
          ]);
      }

      // when you will be creating a dog (Dog:create in controller), attach all $skills to pivot table
      // so that each dog have all those seeded skills
    }
}
