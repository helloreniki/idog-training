<?php

namespace App\Models;

use App\Models\User;
use App\Models\Skill;
use App\Models\SkillCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Dog extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'dob', 'breed', 'user_id'];

    protected $dates = ['dob']; // carbon object

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    // $dog->skills (dont know if i'll need this, probably I'll get skillCategories->skills())
    // public function skills() // Many to Many
    // {
    //   return $this->belongsToMany(Skill::class);
    // }

    // $dog->skillCategories (the other way around i probably wont need, or maybe category->dogs)
    // dog hasMany Categories through Skill
    // public function skillCategories()
    // {
    //   return $this->belongsToMany(SkillCategory::class);
    // }

    // $dog->skillCategories through Skill


}
