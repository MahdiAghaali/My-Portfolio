/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const projectsObject = {
  1: {
    name: 'Evaluation System',
    tools: ['Html', 'CSS', 'JavaScript'],
    image: './Contents/Resources/Pictures/Evaluation_img.jpg',
    text: 'This is test text for project 1,  dsadfasuwagifwafffffffffffffffffffafgvyibtdvwaiugdbauiwogbfipuwafgvbiagvuwyiiwuapfgb[waouigfiwapfgvuiwapgfbwauigfboui[waofnsegjrvyetfrqywgrwefyrvkasjbdf;jskldbkjasfduyashcfjkgs]]',
  },
  2: {
    name: 'Correspondence System',
    tools: ['Html', 'CSS', 'JavaScript'],
    image: './Contents/Resources/Pictures/Correspondence_img.jpg',
    text: 'This is test text for project 2,  dsadfasuwagifwafffffffffffffffffffafgvyibtdvwaiugdbauiwogbfipuwafgvbiagvuwyiiwuapfgb[waouigfiwapfgvuiwapgfbwauigfboui[waofnsegjrvyetfrqywgrwefyrvkasjbdf;jskldbkjasfduyashcfjkgs]]',
  },
};

function createProjects() {
  const htmlString = `<div class="project">
        <img src="" alt="" />
        <h2></h2>
        <ul>
        </ul>
        <button type="button" onclick='openProject(this)' class="dark">See this project &#8594;</button>
      </div>`;

  const projects = document.getElementById('Projects');
  // eslint-disable-next-line no-restricted-syntax
  for (const project in projectsObject) {
    projects.insertAdjacentHTML('beforeend', htmlString);
    const newElement = projects.lastChild;
    newElement.id = project;
    newElement.childNodes[1].src = projectsObject[project].image;
    newElement.childNodes[1].alt = projectsObject[project].name;

    newElement.childNodes[3].innerHTML = projectsObject[project].name;

    // eslint-disable-next-line no-restricted-syntax
    for (const li in projectsObject[project].tools) {
      const tool = projectsObject[project].tools[li];
      const htmlString2 = `<li>${tool}</li>`;

      newElement.childNodes[5].insertAdjacentHTML('beforeend', htmlString2);
    }
  }
}

createProjects();

// eslint-disable-next-line no-unused-vars
function openProject(btn) {
  const projectID = btn.parentElement.id;
  const projectData = projectsObject[projectID];
  const popupHeader = document.getElementById('popupHeader');
  const popupTools = document.getElementById('popupTools');
  const popupText = document.getElementById('popupText');
  const popupImage = document.getElementById('popupImage');
  const popup = document.getElementById('popup');

  popupHeader.innerHTML = projectData.name;
  popupImage.alt = projectData.name;
  popupImage.src = projectData.image;
  popupText.innerHTML = projectData.text;
  popupTools.innerHTML = '';
  for (let tool in projectData.tools) {
    tool = projectData.tools[tool];
    const htmlString = `<li>${tool}</li>`;
    popupTools.insertAdjacentHTML('beforeend', htmlString);
  }
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
const closePopupbtn = document.getElementById('closePopup');
closePopupbtn.addEventListener('click', closePopup);