import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
    {path: '', component: GameComponent, pathMatch: 'full' },
    {path: "**", redirectTo:"/", pathMatch: "full"}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouteModule {

}