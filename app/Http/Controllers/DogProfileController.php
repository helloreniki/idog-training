<?php

namespace App\Http\Controllers;

use App\Models\Dog;
use Illuminate\Http\Request;

class DogProfileController extends Controller
{
    public function index()
    {
      return inertia('DogProfile/DogProfileView');
    }

    public function store()
    {
      $data = request()->validate([
        'name' => 'required',
        'breed' => 'required',
        'dob' => 'required|date|before:today'
      ]);

      $data['user_id'] = auth()->user()->id;
      Dog::create($data);

      return back();
    }
}
