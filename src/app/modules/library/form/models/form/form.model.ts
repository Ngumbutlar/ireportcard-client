import {FormControlModel} from "./form-control.model";

interface FormAttributes {
  controls: FormControlModel[]
}

export class FormModel {
  constructor(
    public attribs: FormAttributes,
  ) {
  }

  static empty() {
    return new FormModel({controls: []});
  }
}
