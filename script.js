var start;

$(document).ready(function () {
  start = document.getElementById("body").innerHTML;
  AddHandlerToNewCardButton();
  AddHandlerToNewGroupButton();
  Setup();
});

function Setup() {
  AddHandlerToTitleInput();
  AddHandlerToKeyInput();
  AddHandlerToTitleLabel();
  AddHandlerToKeyLabel();
  AddHandlerToNewElementButton();
  AddHandlerToRemoveElementButton();
  AddHandlerToRemoveCardButton();
}

function reload(){
  if (confirm('Are you sure you want to start over?')) {
      document.getElementById("body").innerHTML = start;
      AddHandlerToNewCardButton();
      AddHandlerToNewGroupButton();
      Setup();
    }
}

function AddHandlerToRemoveCardButton() {
  $("button.removeCard").off();
  $("button.removeCard").on("click", function(evt){
    var numCardsInGroup = $(this).parent().parent().parent().parent().find(".card").length;
    if (numCardsInGroup === 1 && confirm("Are you sure you want to delete this entire group?")) {
      $(this).parent().parent().parent().parent().parent().find(".newCardWrap").remove();
      $(this).parent().parent().parent().parent().parent().find("hr").remove();
      $(this).parent().parent().parent().parent().remove();
    }
    else if (confirm('Are you sure you want to delete this entire card?')) {
      $(this).parent().parent().parent().remove()
    }
  })
}

function AddHandlerToRemoveElementButton() {
  $("button.removeElement").off();
  $("button.removeElement").on("click", function(evt){
    if (confirm('Are you sure you want to delete this element?')) {
      $(this).parent().parent().remove()
    }
  })
}

function AddHandlerToNewGroupButton() {  
  $("button.newGroup").off();
  $("button.newGroup").on("click", function (evt){
    const newGroup = `<div class="container-fluid groupContainer"><hr></hr><div class="row groupWrap"><div class="card main-card"><div class="row card-header"><div class="col-sm-11 title-col"><input class="form-control title" type="text" placeholder="Title"></div><div class="col-sm-1 remove-card-col"><button class="btn btn-outline-danger removeCard">-</button></div></div><div class="card-body main-card-body"><div class=container id=divElements><div class=row><div class="col-sm-4 keyCol main-element-col"><input class="form-control key"placeholder="Key Name"></div><div class="col-sm-7 main-value"><input class="form-control value"placeholder=Value></div><div class="col-sm-1 remove-element-col"><button class="btn btn-outline-danger removeElement">-</button></div></div><div class="row divCardControls"><div class="col main-add-element"><button class="btn btn-success newElement"type=button><p class=h5>+</button></div></div></div></div></div></div><div class="row newCardWrap"><button class="btn btn-success newCard"type=button>New Card</button></div><div class="row newGroupWrap"><button class="btn btn-success newGroup"type=button>New Group</button></div></div>`;
    $('body').append(newGroup);
    Setup();
    AddHandlerToNewCardButton();
    AddHandlerToNewGroupButton();
    $(this).parent().remove();
  })
}

function AddHandlerToNewCardButton() {
  // Adds a new Card to the #main-wrap div
  $("button.newCard").off();
  $("button.newCard").on("click", function (evt){
    const newCard = '<div class="card main-card"><div class="row card-header"><div class="col-sm-11 title-col"><input class="form-control title" type="text" placeholder="Title"></div><div class="col-sm-1 remove-card-col"><button class="btn btn-outline-danger removeCard">-</button></div></div><div class="card-body main-card-body"><div class=container id=divElements><div class=row><div class="col-sm-4 keyCol main-element-col"><input class="form-control key"placeholder="Key Name"></div><div class="col-sm-7 main-value"><input class="form-control value"placeholder=Value></div><div class="col-sm-1 remove-element-col"><button class="btn btn-outline-danger removeElement">-</button></div></div><div class="row divCardControls"><div class="col main-add-element"><button class="btn btn-success newElement"type=button><p class=h5>+</button></div></div></div></div></div>';
    $(this).parent().parent().children(".groupWrap").append(newCard);
    Setup();
  });
}

function AddHandlerToTitleInput() {
  $('input.title').off();
  $('input.title').on("keypress", function(evt) {
    if (evt.keyCode == 13) {
      var title = $(this).val();
      if (title == "") {
        title = 'Title'
      }
      $(this).replaceWith("<span class='title'>" + title +"</span>");
      evt.preventDefault();
      AddHandlerToTitleLabel();
    }
  });
}

function AddHandlerToKeyInput() {
  $('input.key').off();
  $('input.key').on("keypress", function(evt) {
    if (evt.keyCode == 13) {
      var label = $(this).val();
      if (label == "") {
        label = 'Key'
      }
      $(this).replaceWith("<span class='key'>" + label +"</span>");
      evt.preventDefault();
      AddHandlerToKeyLabel();
    }
  });
}

function AddHandlerToTitleLabel() {
  $("span.title").off();
  $("span.title").on("click", function (evt) {
    var title = $(this).text();
    $(this).replaceWith("<input class='title form-control' value='" + title + "'></input>");
    AddHandlerToTitleInput();
  })
}

function AddHandlerToKeyLabel() {
  $("span.key").off();
  $("span.key").on("click", function (evt) {
    var label = $(this).text();
    $(this).replaceWith("<input class='key form-control' value='" + label + "'></input>");
    AddHandlerToKeyInput();
  })
}

function AddHandlerToNewElementButton() {
  // Adds a new Key Value Pair Element
  $(".newElement").off();
  $(".newElement").on("click", function (evt) {
    const newKVP = "<div class='row'><div class='col-sm-4 keyCol main-element-col'><input class='form-control key' type='text' placeholder='Key Name'></div><div class='col-sm-7 main-value'><input class='form-control value' type='text' placeholder='Value'></div><div class='col-sm-1 remove-element-col'><button class='btn btn-outline-danger removeElement'>-</button></div></div>";
    $(this).parent().parent().before(newKVP);
    AddHandlerToKeyInput();
    AddHandlerToRemoveElementButton();
  })
}

function SavePageToJson() {
  var pageData = [];
}