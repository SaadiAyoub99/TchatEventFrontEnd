import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { UserAuthService } from "../service/user-auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userAuthService: UserAuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') === 'True'){
            return next.handle(req.clone());
        }

        const token =  this.userAuthService.getToken();
        console.log(token);
        let jwttoken = req.clone({
            setHeaders: {
                Authorization: 'Bearer '+token
            }
        })

        return next.handle(jwttoken).pipe(
            catchError(
                (err:HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status === 401){
                        this.router.navigate(['/login']);
                    }else if(err.status === 403){
                        this.router.navigate(['/forbidden']);
                    }
                    return throwError("Some things is wrong")
                }
            )
        );
    }
    
}