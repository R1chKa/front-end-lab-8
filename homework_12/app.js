let rootNode = document.getElementById("root");

let thumbnails = createElFunc("div", "thumbnails");
rootNode.appendChild(thumbnails);

let h1 = createElFunc("h1", "header", "Most popular tanks");
thumbnails.appendChild(h1);

let parentNode = createElFunc("div", "tanks_list");
thumbnails.appendChild(parentNode);

function buildTanksList(tanksArr, parent) {
  for (let i = 0; i < tanksArr.length; i++) {
    let div = createElFunc("div");
    let h3 = createElFunc("h3");
    let p = createElFunc("p");

    let block = createElFunc("div", "tank_block");
    parent.appendChild(block);

    let tPreview = createImgFunc(tanksArr[i].preview, tanksArr[i].model);
    block.appendChild(tPreview);
    tPreview.classList.add("tPreview");

    let info = createElFunc("div", "tank_info");
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
}

function createElFunc(tag, elClass = "", insideText = "") {
  let el = document.createElement(tag);
  el.className = elClass;
  el.innerHTML = insideText;
  return el;
}

function createImgFunc(url, title = "image") {
  let img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("title", title);
  img.setAttribute("title", title);
  return img;
}

buildTanksList(tanks, parentNode);
