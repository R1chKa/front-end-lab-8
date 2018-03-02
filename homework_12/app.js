let rootNode = document.getElementById("root");

function buildTanksList(tanksArr) {
  let thumbnails = createElFunc("div", "thumbnails");
  rootNode.appendChild(thumbnails);

  let h1 = createElFunc("h1", "header", "Most popular tanks");
  thumbnails.appendChild(h1);

  let tanksList = createElFunc("div", "tanks-list");
  thumbnails.appendChild(tanksList);

  for (let i = 0; i < tanksArr.length; i++) {
    let block = createElFunc("div", "tank-block");
    tanksList.appendChild(block);
    let tPreview = createImgFunc(tanksArr[i].preview, tanksArr[i].model);
    block.appendChild(tPreview);
    tPreview.classList.add("tPreview");

    let info = createElFunc("div", "tank-info");
    block.appendChild(info);
    let tCountry = createImgFunc(
      tanksArr[i].country_image,
      tanksArr[i].country
    );
    info.appendChild(tCountry);
    let tLevel = createElFunc("p", "tLevel", tanksArr[i].level);
    info.appendChild(tLevel);
    let tModel = createElFunc("p", "tModel", tanksArr[i].model);
    info.appendChild(tModel);

    block.addEventListener("click", function() {
      location.hash = tanksArr[i].model;
    });
  }
  return thumbnails;
}

function buildTankDetails(tank) {
  let tankDetails = createElFunc("div", "tank-details");
  rootNode.appendChild(tankDetails);

  let info = createElFunc("div", "tank-info");
  tankDetails.appendChild(info);
  let tCountry = createImgFunc(tank.country_image, tank.country);
  info.appendChild(tCountry);
  let tModel = createElFunc("p", "tModel", tank.model);
  info.appendChild(tModel);
  let tLevel = createElFunc("p", "tLevel", `(level ${tank.level})`);
  info.appendChild(tLevel);

  let mainContent = createElFunc("div", "main-content");
  tankDetails.appendChild(mainContent);

  let previewBlock = createElFunc("div", "preview-block");
  mainContent.appendChild(previewBlock);
  tPreviewText = createElFunc("p", "preview-text", "Preview");
  previewBlock.appendChild(tPreviewText);
  let tPreview = createImgFunc(tank.preview, tank.model);
  previewBlock.appendChild(tPreview);
  tPreview.classList.add("tPreview");

  let details = createElFunc("div", "details-block");
  mainContent.appendChild(details);
  let dTable = createElFunc("table", "detaill-table");
  details.appendChild(dTable);
  let tCaption = createElFunc("caption", "", "Characteristic");
  dTable.appendChild(tCaption);

  for (let key in tank.details) {
    let tr = createElFunc("tr");
    dTable.appendChild(tr);
    let th = createElFunc("th", "", key);
    tr.appendChild(th);
    let td = createElFunc("td", "", tank.details[key]);
    tr.appendChild(td);
  }

  let backLink = createElFunc("a", "back-link", "Back to list view");
  backLink.href = "#";
  tankDetails.appendChild(backLink);
  backLink.addEventListener("click", function() {
    location.hash = "";
    window.history.go();
  });

  return tankDetails;
}

function createElFunc(tag, elClass = "", insideText = "") {
  let el = document.createElement(tag);
  if (elClass != "") {
    el.className = elClass;
  }
  if (insideText != "") {
    el.innerHTML = insideText;
  }
  return el;
}

function createImgFunc(url, title = "image") {
  let img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("title", title);
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
