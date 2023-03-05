<?php

namespace App\Enums;


enum SkillStatus:string
{
  case TODO = 'todo';
  case IN_PROGRESS = 'in_progress';
  case DONE = 'done';
}
