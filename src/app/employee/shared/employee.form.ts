import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * This service stores all possible forms related to employee module only
 */
export class EmployeeForm {
    fb = new FormBuilder();

    /**
     * Default Employee value form - CreateEmployee | EditEmployee
     * @returns {FormGroup}
     */
    getEmployeeForm(): FormGroup {
        return this.fb.group({
            'first_name': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            'last_name': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            'email': ['', [Validators.required, Validators.email]],
            'phone': ['38', [Validators.required]],
            'gender': ['', [Validators.required]],
            'created': ['', [Validators.required]],
            'updated': ['', [Validators.required]],
            'roles': [[]]
        });
    }
}
