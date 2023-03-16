<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DogProfileController extends Controller
{
    public function index()
    {
      return inertia('DogProfile/DogProfileView');
    }
}
