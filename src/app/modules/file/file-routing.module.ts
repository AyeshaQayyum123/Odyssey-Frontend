import { FileComponent } from 'src/app/components/file/file.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: 'files',
        component: FileComponent
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FileRoutingModule{

}
