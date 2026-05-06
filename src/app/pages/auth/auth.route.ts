import { Route } from "@angular/router";
import { SignIn } from "./sign-in/sign-in";
import { SignUp } from "./sign-up/sign-up";
import { ForgotPassword } from "./forgot-password/forgot-password";

export const AUTH_ROUTES: Route[] = [
  { path: 'sign-in', component: SignIn, data: { title: 'Sign In' } },
  { path: 'sign-up', component: SignUp, data: { title: 'Sign Up' } },
  {
    path: 'forgot-password',
    component: ForgotPassword,
    data: { title: 'Forgot Password' },
  },
];
