const list = document.querySelector('.list'),
      items = document.querySelectorAll('.blocks_item')
      listItems = document.querySelectorAll('.list_item')
function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target
        if(target.classList.contains('list_item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }
        
        switch(targetId) {
            case 'all': 
            getItems('blocks_item') 
            break
            case 'Baden':  
            getItems(targetId)
            break
            case 'Bayern':
                getItems(targetId)    
            break
            case 'Berlin':
                getItems(targetId)  
            break
            case 'Brandenburg':
                getItems(targetId) 
            break
            case 'Bremen':
                getItems(targetId) 
            break
            case 'Hamburg':
                getItems(targetId) 
            break
            case 'Hessen':
                getItems(targetId) 
            break
            case 'Mecklenburg':
                getItems(targetId) 
            break
            case 'Niedersachsen':
                getItems(targetId) 
            break
            case 'Nordrhein':
                getItems(targetId)
            break
            case 'Rheinland':
                getItems(targetId) 
            break
            case 'Saarland':
                getItems(targetId) 
            break
            case 'Sachsen': 
            getItems(targetId) 
            break
            case 'Anhalt':
                getItems(targetId) 
            break
            case 'Schleswig':
                getItems(targetId) 
            break
            case 'Thuringen':
                getItems(targetId) 
            break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}