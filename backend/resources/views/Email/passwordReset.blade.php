@component('mail::message')
# Cambio de Contrasenia

Por favor, dale click al botón para cambiar tu contrasenia

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Cambiar Contrasenia
@endcomponent

Gracias,<br>
{{ config('app.name') }}
@endcomponent
