import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppLandingComponent } from "./app-landing/app-landing.component";
import { GameWindowComponent } from "./game-window/game-window.component";

const routes: Routes = [
    {path: 'geography', component: GameWindowComponent},
    {path: '', component: AppLandingComponent},
    {path: 'starWars', component: GameWindowComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AppLandingComponent, GameWindowComponent]