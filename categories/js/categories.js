
window.onload = function() {

        //Check File API support
        if (window.File && window.FileList && window.FileReader) {
            // var filesInputs = [document.getElementById("files_1"), document.getElementById("files_2"), document.getElementById("files_3")] ;
            var filesInputs = Array.prototype.slice.call(document.querySelectorAll('.files'), 0);
            console.log(filesInputs);
            filesInputs.forEach(function(filesInput, index, filesInputs) {

                filesInput.addEventListener("change", function(event) {

                    var files = event.target.files; //FileList object
                    var output = document.getElementById("result_" + (index + 1));

                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];

                        //Only pics
                        if (!file.type.match('image'))
                            continue;

                        var picReader = new FileReader();

                        picReader.addEventListener("load", function(event) {

                            var picFile = event.target;

                            var div = document.createElement("div");

                            div.classList.add("img-wrap");

                            div.innerHTML = "<img class='img-responsive thumbnail' src='" + picFile.result + "'" +
                                "title='" + picFile.name + "'/> <a href='#' class='remove_pict'>X</a>";

                            output.insertBefore(div, null);
                            div.children[1].addEventListener("click", function(event) {
                                div.parentNode.removeChild(div);
                            });

                        });

                        //Read the image
                        picReader.readAsDataURL(file);
                    }

                });
            });
        } else {
            console.log("Your browser does not support File API");
        }
    }

    
    $(document).ready(function(){
        $('.collapse').collapse();

       
    });