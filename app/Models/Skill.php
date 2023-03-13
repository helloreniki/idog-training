<?php

namespace App\Models;

use App\Models\Dog;
use App\Enums\SkillStatus;
use App\Models\SkillCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'category', 'status'];

    protected $casts = ['status' => SkillStatus::class];

    public function dogs()
    {
      return $this->belongsToMany(Dog::class)->withPivot('status');
    }

}
