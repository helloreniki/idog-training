<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
      $dogs = auth()->user()->dogs()->get();
      dd($dogs);

      return inertia('Dashboard', [
        'dogs' => $dogs
      ]);
    }
}
