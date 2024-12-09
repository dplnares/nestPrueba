import { Controller, Get, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller({})
export class AuthController {
  constructor(private authService: AuthService) {}

  //  En esta parte puedo estandarizar la respuesta que enviaré al cliente
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hola CPP!',
    });
  }
}
