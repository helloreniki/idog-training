<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TrialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrainingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DogProfileController;
use App\Http\Controllers\SkillStatusController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// home is Dashboard -> if not auth -> login page
Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/skills-to-learn', [SkillController::class, 'index'])->middleware(['auth', 'verified'])->name('skill.index');
Route::post('/skills-to-learn', [SkillController::class, 'store'])->middleware(['auth', 'verified'])->name('skill.store');
Route::put('/dogs/{dog}/skills/{skill}/skillstatus', [SkillStatusController::class, 'update'])->middleware(['auth', 'verified'])->name('skill.status.update');

Route::get('/training', [TrainingController::class, 'index'])->middleware(['auth', 'verified'])->name('training.index');
Route::get('/trial', [TrialController::class, 'index'])->middleware(['auth', 'verified'])->name('trial.index');
Route::get('/dog-profile', [DogProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('dogprofile.index');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
