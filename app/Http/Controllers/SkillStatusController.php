<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillStatusController extends Controller
{
    public function update(Dog $dog, Skill $skill) // vrstni red pomemben, kakor v route: route model binding
    {
      $data = request()->validate([
        'status' => 'required'
      ]);

      $status = request('status');

      // attach status to skill & dog on pivot table
      $skill->dogs()->updateExistingPivot($dog, ['status' => $status]);

      return redirect()->back()->with('success', 'Successfully updated.');
    }
}
