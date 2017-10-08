import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcxCoperacionesComponent } from './icx-coperaciones/icx-coperaciones.component';
import { OdComponent } from './od/od.component';
import { OgxCoperacionesComponent } from './ogx-coperaciones/ogx-coperaciones.component';
import { UrOgeComponent } from './ur-oge/ur-oge.component';
import { OgxSgdComponent } from './ogx-sgd/ogx-sgd.component';
import { UrOgtComponent } from './ur-ogt/ur-ogt.component';
import { UrOgvComponent } from './ur-ogv/ur-ogv.component';
import { IcxSgdComponent } from './icx-sgd/icx-sgd.component';


// Importar componenetes

const appRouter:Routes = [
    {path: '' , component:IcxCoperacionesComponent}
    ,{path: 'ixc_sgd' , component:IcxSgdComponent}
    ,{path: 'od', component: OdComponent}
    ,{path: 'ogx_coperaciones', component: OgxCoperacionesComponent}
    ,{path: 'ur_oge', component: UrOgeComponent}
    ,{path: 'ogx_sgd', component: OgxSgdComponent}
    ,{path: 'ur_ogt', component: UrOgtComponent}
    ,{path: 'ur_ogv', component: UrOgvComponent}
    
];

export const appRouterProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);