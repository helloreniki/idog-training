<?php

namespace App\Models;

use App\Models\Dog;
use App\Models\SkillCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'skill_category_id'];

    public function dogs()
    {
      return $this->belongsToMany(Dog::class);
    }

    public function skillCategory()
    {
      return $this->belongsTo(SkillCategory::class);
    }
}
