import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class UserForms {
    fb = new FormBuilder();

    getUserForm(): FormGroup {
        return this.fb.group({
            'first_name': ['', [Validators.required]],
            'last_name': ['', [Validators.required]],
            'email': ['', [Validators.required, Validators.email]],
            'phone': ['', [Validators.required]],
            'gender': ['', [Validators.required]],
            'created': ['', [Validators.required]],
            'updated': ['', [Validators.required]]
        });
    }
}
