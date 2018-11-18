// ----- Adding card -----

// Template
var database = firebase.database();
var maroRef = database.ref('Partners/maro');
maroRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if(childData["type"] == "dog"){
            $('.dog-container').append(convertToTemplate(childData["name"], childData["image-url"]));
        }
        else if(childData["type"] == "cat"){
            $('.cat-container').append(convertToTemplate(childData["name"], childData["image-url"]));
        }
        
    });
});

$(".choose-dog").click(function(e) {
    e.preventDefault();
    chooseDog();
});

$(".choose-cat").click(function(e) {
    e.preventDefault();
    chooseCat();
});

$(".go-back").click(function(e) {
    e.preventDefault();
    goBack();
});

function chooseDog(){
    $(".dog-container").css("display", "flex").hide().fadeIn();
    $(".type-chooser").fadeOut();
    $(".type-head").fadeOut();
    $(".choose-head").fadeIn();
}

function goBack(){
    $(".dog-container").fadeOut()
    $(".cat-container").fadeOut()
    $(".type-chooser").fadeIn();
    $(".type-head").fadeIn();
    $(".choose-head").fadeOut();
}

function chooseCat(){
    $(".cat-container").css("display", "flex").hide().fadeIn();
    $(".type-chooser").fadeOut();
    $(".type-head").fadeOut();
    $(".choose-head").fadeIn();
}

function convertToTemplate(name, imageUrl){
    var template = '<div class="col-md-4 col-sm-12 m-top-25 adopt-animal" data-toggle="modal" data-target="#exampleModal">' +
                        '<div class="card-container">' +
                            '<div class="card-image">' +
                                '<img src="' + imageUrl + '" />' +
                            '</div>' +
                            '<div class="card-content">' +
                                '<h3 class="card-name">' + name + '</h3>' +
                            '</div>' +
                        '</div>' +
                '</div>';
    return template;
}