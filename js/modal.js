var img = document.querySelectorAll(".img-type1, .img-type2");

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var modalList = document.getElementById("image-list");

for (i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    loadModal(this);
  });
}

function loadModal(img) {
  modal.style.display = "flex";
  var hiddenImgId = img.id + "-hidden-images";
  var hiddenImages = document
    .getElementById(hiddenImgId)
    .getElementsByTagName("img");

  for (let i = 0; i < hiddenImages.length; i++) {
    var newImg = hiddenImages.item(i).cloneNode(false);
    newImg.id = "img" + i;
    newImg.onclick = function() {
      modalImg.src = this.src;
    };

    modalList.appendChild(newImg);
  }

  modalImg.src = document.getElementById(img.id).firstElementChild.src;
  captionText.innerHTML = document.getElementById(
    img.id
  ).lastElementChild.lastElementChild.innerHTML;
  console.log(captionText.innerHTML);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

  while (modalList.hasChildNodes()) {
    modalList.removeChild(modalList.firstChild);
  }
};
