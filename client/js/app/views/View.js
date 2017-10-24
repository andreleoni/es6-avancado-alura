class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(model) {
    throw new ("Metodo template precisa ser implementado");
  }

  update(model) {
    this._elemento.innerHTML = this._template(model);
  }
}
