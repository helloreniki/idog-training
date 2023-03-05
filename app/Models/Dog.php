<?php

namespace App\Models;

use App\Models\User;
use App\Models\Skill;
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

    public function skills() // Many to Many
    {
      return $this->belongsToMany(Skill::class);
    }


}
