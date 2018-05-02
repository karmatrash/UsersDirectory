import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class RoleForms {
    fb = new FormBuilder();

    getRoleForm(): FormGroup {
        return this.fb.group({
            'title': ['', [Validators.required]],
            'description': ['', [Validators.required]]
        });
    }
}
