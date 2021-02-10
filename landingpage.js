//Open
function openacca() {accaview.style.visibility = "visible";}
function openpet() {petview.style.visibility = "visible";}
function openmech() {mechview.style.visibility = "visible";}

function openpad() {padview.style.visibility = "visible";}
function openpapp() {appview.style.visibility = "visible";}

function spsl() {spslview.style.visibility = "visible";}
function petro() {petroview.style.visibility = "visible";}
function gulf() {gulfview.style.visibility = "visible";}

function simeng() {blogview.style.visibility = "visible";}
function gcad() {cadview.style.visibility = "visible";}

//Close
function closeacca() {accaview.style.visibility = "hidden";}
function closepet() {petview.style.visibility = "hidden";}
function closemech() {mechview.style.visibility = "hidden";}

function closepad() {padview.style.visibility = "hidden";}
function closepapp() {appview.style.visibility = "hidden";}

function clspsl() {spslview.style.visibility = "hidden";}
function clpetro() {petroview.style.visibility = "hidden";}
function clgulf() {gulfview.style.visibility = "hidden";}

function clsimeng() {blogview.style.visibility = "hidden";}
function clgcad() {cadview.style.visibility = "hidden";}

window.addEventListener('click', outsideClick);
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.visibility = "hidden";
  }
}

window.addEventListener('click', outsideClick);
function outsideClick(e) {
  if (e.target == accaview) {
    accaview.style.visibility = "hidden";
  }
  if (e.target == petview) {
    petview.style.visibility = "hidden";
  }
  if (e.target == mechview) {
    mechview.style.visibility = "hidden";
  }
  if (e.target == padview) {
    padview.style.visibility = "hidden";
  }
  if (e.target == appview) {
    appview.style.visibility = "hidden";
  }
  if (e.target == spslview) {
    spslview.style.visibility = "hidden";
  }
  if (e.target == petroview) {
    petroview.style.visibility = "hidden";
  }
  if (e.target == gulfview) {
    gulfview.style.visibility = "hidden";
  }
  if (e.target == blogview) {
    blogview.style.visibility = "hidden";
  }
  if (e.target == cadview) {
    cadview.style.visibility = "hidden";
  }
}



