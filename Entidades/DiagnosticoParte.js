class  DiagnosticoParte {
  constructor(idDiagnosticoParte, idDiagnostico, idParte) {
    this._idDiagnosticoParte = idDiagnosticoParte;
    this._idDiagnostico  = idDiagnostico;
    this._idParte  = idParte;
  }

  get idDiagnosticoParte() {
    return this._idDiagnosticoParte;
  }

  get idDiagnostico() {
    return this._idDiagnostico;
  }

  get idParte() {
    return this._idParte;
  }

  set idDiagnosticoParte(newIdDiagnosticoParte) {
    this._idDiagnosticoParte = newIdDiagnosticoParte;
  }

  set idDiagnostico(newidDiagnostico) {
    this._idDiagnostico = newidDiagnostico;
  }

  set idParte(newidParte) {
    this._idParte = newidParte;
  }

}
export default DiagnosticoParte;
