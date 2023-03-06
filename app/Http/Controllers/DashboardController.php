<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
      $dogs = auth()->user()->dogs()->with('skills')->get()->map(fn($dog) => [
          'id' => $dog->id,
          'name' => $dog->name,
          'dob' => $dog->dob,
          'breed' => $dog->breed,
          'categories' => $dog->skills()->get()->groupBy('category')
      ]);

      // dd($dogs->toArray());

      return inertia('Dashboard', [
        'dogs' => $dogs
      ]);
    }
}
