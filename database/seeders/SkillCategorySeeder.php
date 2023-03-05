<?php

namespace Database\Seeders;

use File;
use App\Models\SkillCategory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SkillCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

      $json = File::get("database/data/categories.json");
      $skillCategories = json_decode($json);

      foreach ($skillCategories as $key => $value) {
          SkillCategory::create([
              "name" => $value->name,
          ]);
      }
    }
}
