<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testSetPasswordAttributeOK(){

        $user = new User();
        $password = '1234';
        $criptopassword = bcrypt($password);
        $this->assertSame($criptopassword, $user->setPasswordAttribute($password));
  }
}
