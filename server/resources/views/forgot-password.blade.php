<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>

<body>
  <style>
  @media only screen and (max-width: 600px) {
    .inner-body {
      width: 100% !important;
    }

    .footer {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 500px) {
    .button {
      width: 100% !important;
    }
  }
  </style>
  <table class="wrapper" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
    <tr>
      <td class="header">
        <a href="{{$url}}">
          {{$appName}}
        </a>
      </td>
    </tr>
    <!-- Email Body -->
    <tr>
      <td class="body" width="100%" cellpadding="0" cellspacing="0">
        <table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0">
          <!-- Body content -->
          <tr>
            <td class="content-cell">
              <h1>Forgot password</h1>
              <p>You forgot your password for your <a href="{{$url}}" style="color: #3869d4;">{{$appName}}</a> account, here you have your account credentials.</p>
              <h2>Credentials</h2>
              <div class="table">
                <table>
                  <tbody>
                    <tr>
                      <td class="bold">Email</td>
                      <td>{{$user->email}}</td>
                    </tr>
                    <tr>
                      <td class="bold">Username</td>
                      <td>{{$user->username}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Thanks,<br>{{$appName}}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table class="footer" align="center" width="570" cellpadding="0" cellspacing="0">
          <tr>
            <td class="content-cell" align="center">
              <p>© 2021 {{$appName}}. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>