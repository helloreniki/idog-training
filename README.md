# Dog Training App

## About

In progress...

Dog Training App is Laravel 10, Inertia, Vue3 application that tracks your dog's training.
User can:
* register and login to the application
* add a dog
* see all their dogs
* choose a dog and for that dog user can:
  * get random skill to practice on
  * add new skill with category (select from dropdown or add new one) and status(to learn, in progress, done)
  * choose category and see all dog's skills
  * edit status of a skill for that dog (todo, in progress, done)

  TODO:
  * add training
  * see all upcomming, past trainings with notes
  * dog's profile (edit, show all learned skills)
  * ...

## Setup

clone repository, adjust .env, create database

```composer install```

```npm install & npm run dev```

```php artisan key:generate```

```php artisan migrate```

```php artisan db:seed```

## Credentials

username: test@example.com

password: password
