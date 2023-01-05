//= require signature_pad

let JOHN_HANCOCK = {
  loadEvent: typeof Turbo === "undefined" ? "DOMContentLoaded" : "turbo:load"
}

document.addEventListener(JOHN_HANCOCK.loadEvent, function(){
  const canvas = document.getElementById("JohnHancock-canvas");
  const hidden_field = document.getElementById("JohnHancock-hidden");

  if (canvas && hidden_field) {
    const parent_form = canvas.closest("form");
    const signaturePad = new SignaturePad(canvas);

    parent_form.onsubmit = function() {
      hidden_field.value = signaturePad.toDataURL()
    }

    function resizeCanvas() {
      var ratio =  Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      signaturePad.clear();
    }

    window.addEventListener("resize", resizeCanvas, true);
    resizeCanvas();
  }
}, false)
