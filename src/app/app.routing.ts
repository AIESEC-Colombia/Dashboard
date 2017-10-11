import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdComponent } from './od/od.component';
import { UrOgvComponent } from './ur-ogv/ur-ogv.component';
import { UrOgeComponent } from './ur-oge/ur-oge.component';
import { UrOgtComponent } from './ur-ogt/ur-ogt.component';

import { IcxCoperacionesComponent } from './icx-coperaciones/icx-coperaciones.component';
import { OgxCoperacionesComponent } from './ogx-coperaciones/ogx-coperaciones.component';
import { OgxSgdComponent } from './ogx-sgd/ogx-sgd.component';
import { IcxSgdComponent } from './icx-sgd/icx-sgd.component';

// Importar componenetes

const appRouter:Routes = [
    {path: '', component: OgxCoperacionesComponent}
    ,{path: 'od', component: OdComponent}

    ,{path: 'ur_ogt', component: UrOgtComponent}
    ,{path: 'ur_ogv', component: UrOgvComponent}
    ,{path: 'ur_oge', component: UrOgeComponent}

    
    ,{path: 'operaciones_coperaciones', component: OgxCoperacionesComponent}
    ,{path: 'operaciones_sgd', component: OgxSgdComponent}
    
    /*,{path: 'ixc_sgd' , component:IcxSgdComponent}
    ,{path: '' , component:IcxCoperacionesComponent}*/
    
];

export const appRouterProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);