import $ from 'jquery';

export function subirArchivo() {
    $("#imgPreview").click();
    $("#imgPreview").change(function () {
      var inputFile = this.files[0];
      var url = window.URL.createObjectURL(inputFile);
      document.getElementById(`iframe`).src = url;
    });
  };