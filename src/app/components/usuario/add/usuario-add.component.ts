import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidatorForm } from "src/app/shared/validator-form";
import { ValidadorErrosKeys, ValidadorKeys } from "src/app/models/validator-form.model";
import UsuarioAddRequestModel from "src/app/models/usuario/usuario-add.model";
import UsuarioGetModel from "src/app/models/usuario/usuario-get.model";

@Component({
    templateUrl: "./usuario-add.component.html",
    selector: "confitec-add-usuario",
})
export class UsuarioAddComponent implements OnInit, OnChanges{
    public form: FormGroup = {} as FormGroup;
    public errosMsg: ValidadorErrosKeys[] = [];
    @Input() usuario: UsuarioGetModel = {} as UsuarioGetModel;
    @Output() SendForm = new EventEmitter<UsuarioGetModel>();
    constructor(private formBuilder: FormBuilder,
        public validatorMsg: ValidatorForm) {
    }

    ngOnInit() {
        this.CreateForm();
    }

    ngOnChanges(){
        this.CreateForm();
    }

    Send(): void {
        if (this.form.valid) { 
            this.SendForm.emit(this.form.value);
            this.form.reset();
        }
        else
            this.errosMsg = this.validatorMsg.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
    }

    filterDate = (date: Date | null): boolean => {
        date = date || new Date();
        // Prevent Saturday and Sunday from being selected.
        return date < new Date();
    }

    private CreateForm(): void {
        this.form = this.formBuilder.group(
            {
                id: [this.usuario.id],
                Nome: [this.usuario.nome, [Validators.required, Validators.maxLength(100)]],
                Sobrenome: [this.usuario.sobrenome, [Validators.required, Validators.maxLength(100)]],
                Email: [this.usuario.email, [Validators.required, Validators.email]],
                DataNascimento: [this.usuario.dataNascimento, [Validators.required]],
                Escolaridade: [this.usuario.escolaridade, [Validators.required]]
            });
    }

    private CreateKeysLabelsErrors = (): ValidadorKeys[] =>
        [
            { Label: "Nome", Name: "Nome" },
            { Label: "Sobrenome", Name: "Sobrenome" },
            { Label: "E-mail", Name: "Email" },
            { Label: "Data de Nascimento", Name: "DataNascimento" },
            { Label: "Escolaridade", Name: "Escolaridade" }
        ]
}