const readJSON = () => {
  return fetch('db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {
        return json;
      })
      .catch(function(e) {
        console.log(e);
      })
};

const filter = () => {
  document.querySelector('.list').addEventListener('click', event => {
    const target = event.target,
        listItems = document.querySelectorAll('.list_item');
    let targetId = target.dataset.id;

    if (target.classList.contains('list_item')) {
      listItems.forEach(listItem => listItem.classList.remove('active'));
      target.classList.add('active')
    }

    if (targetId === 'all') {
      targetId = 'blocks_item'
    }
    getItems(targetId);
  })
};

const getItems = (className) => {
  const items = document.querySelectorAll('.blocks_item');

  items.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block'
    }
    else {
      item.style.display = 'none'
    }
  })
};

const buildMenu = (items) => {
  const elem = document.getElementById('bundesList');

  elem.innerHTML += `<li class="list_item active list-group-item" data-id="all">Все земли</li>`;
  for (let i = 0; i < items.length; i++) {
    let item = `<li class="list_item list-group-item" data-id="${ items[i].id }">${ items[i].name } ${ items[i].rusName }</li>`;

    elem.innerHTML += item
  }
};

const buildHeimList = (items) => {
  const container = document.getElementById('heimContainer');

  for (let i = 0; i < items.length; i++) {
    let image = "img/" + items[i].bundesId + "/" + items[i].name + ".png";
    let item = `<div class="blocks_item ${ items[i].bundesId }">
                  <div class="item">
                    <div class="card">
                      <img src="${ image }" class="card-img-top" alt="${ items[i].name }">
                      <div class="card-body">
                        <h5 class="card-title">${ items[i].rusName }</h5>
                        <p class="card-text">${ items[i].desc }</p>
                        <a href="${ items[i].link }" class="btn btn-primary">Смотреть YouTube</a>
                      </div>
                    </div>
                  </div>
                </div>
    `;

    container.innerHTML += item
  }
};

readJSON().then(function(response) {
  buildMenu(response.bundesland);
  buildHeimList(response.heim);
});

filter();