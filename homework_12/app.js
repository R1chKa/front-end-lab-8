let rootNode = document.getElementById("root");

function buildTanksList(tanksArr) {
  let thumbnails = createElFunc("div", "thumbnails", "", rootNode);

  let h1 = createElFunc("h1", "header", "Most popular tanks", thumbnails);

  let tanksList = createElFunc("div", "tanks-list", "", thumbnails);

  for (let i = 0; i < tanksArr.length; i++) {
    let block = createElFunc("div", "tank-block", "", tanksList);
    block.setAttribute("title", "Click to details");
    let tPreview = createImgFunc(
      tanksArr[i].preview,
      "Click to details",
      block
    );
    tPreview.classList.add("tPreview");

    let info = createElFunc("div", "tank-info", "", block);
    let tCountry = createImgFunc(
      tanksArr[i].country_image,
      tanksArr[i].country,
      info
    );
    let tLevel = createElFunc("p", "tLevel", tanksArr[i].level, info);
    let tModel = createElFunc("p", "tModel", tanksArr[i].model, info);
    tModel.setAttribute("title", tanksArr[i].model);

    block.addEventListener("click", function() {
      location.hash = tanksArr[i].model;
    });
  }
  return thumbnails;
}

function buildTankDetails(tank) {
  let tankDetails = createElFunc("div", "tank-details", "", rootNode);

  let info = createElFunc("div", "tank-info", "", tankDetails);
  let tCountry = createImgFunc(tank.country_image, tank.country, info);
  let tModel = createElFunc("p", "tModel", tank.model, info);
  let tLevel = createElFunc("p", "tLevel", `(level ${tank.level})`, info);

  let mainContent = createElFunc("div", "main-content", "", tankDetails);

  let previewBlock = createElFunc("div", "preview-block", "", mainContent);
  let tPreviewText = createElFunc("p", "preview-text", "Preview", previewBlock);
  let tPreview = createImgFunc(tank.preview, tank.model, previewBlock);
  tPreview.classList.add("tPreview");

  let details = createElFunc("div", "details-block", "", mainContent);
  let dTable = createElFunc("table", "detaill-table", "", details);
  let tCaption = createElFunc("caption", "", "Characteristic", dTable);

  for (let key in tank.details) {
    let tr = createElFunc("tr", "", "", dTable);
    let th = createElFunc("th", "", key, tr);
    let td = createElFunc("td", "", tank.details[key], tr);
  }

  let backLink = createElFunc(
    "a",
    "back-link",
    "Back to list view",
    tankDetails
  );
  backLink.href = "#";
  backLink.addEventListener("click", function() {
    location.hash = "";
    window.history.go();
  });

  return tankDetails;
}

function createElFunc(tag, elClass = "", insideText = "", parent) {
  let el = document.createElement(tag);
  if (elClass !== "") {
    el.className = elClass;
  }
  if (insideText !== "") {
    el.innerHTML = insideText;
  }
  el = parent.appendChild(el);
  return el;
}

function createImgFunc(url, title = "image", parent) {
  let img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("title", title);
  img = parent.appendChild(img);
  return img;
}

function changeHash() {
  let hash = location.hash.slice(1);
  tanks.some(function(el) {
    if (el.model === hash) {
      rootNode.innerHTML = "";
      return rootNode.appendChild(buildTankDetails(el));
    }
  });
}

rootNode.appendChild(buildTanksList(tanks));
window.onhashchange = changeHash;
