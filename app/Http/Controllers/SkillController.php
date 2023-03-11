<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
      return inertia('Skill/SkillView');
    }

    public function store()
    {
      // dd('here we are');
      $data = request()->validate([
        'name' => 'required|min:2|max:32',
        'description' => 'nullable|min:5|max:250',
        'category' => 'required',
        'status' => 'required',
      ]);
      // dd($data);

      $skill = Skill::create($data);

      // find dog attach this skill to pivot table
      $dog_ids = request('dog_ids');
      $skill->dogs()->attach($dog_ids);

      return redirect()->route('skill.index')->with('status', 'Successfully created new Skill');

    }
}
