<?php

namespace Database\Factories;

use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dog>
 */
class DogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $breed = Arr::random(['border colli', 'german shephard', 'golden retriever', 'mudi', 'sheltie']);

        return [
            // 'name' => fake()->firstName,
            // 'breed' => $breed,
            // 'dob' => fake()->dateTimeBetween('-10 years', now())
        ];
    }
}
