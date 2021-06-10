<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user) {
      $this->user = $user;
      $this->url = env('APP_URL', 'footy.thibautdemaerteleire.be');
      $this->appName = env('APP_NAME', 'Footy');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
      return $this->from('footy@thibautdemaerteleire.be', env('APP_NAME', 'Footy'))
        ->view('forgot-password')
        ->with([
          'user' => $this->user,
          'url' => $this->url,
          'appName' => $this->appName,
        ]);
    }
}