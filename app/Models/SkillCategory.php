<?php

namespace App\Models;

use App\Models\Skill;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SkillCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function skills()
    {
      return $this->hasMany(Skill::class);
    }
}
