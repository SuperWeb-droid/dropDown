const items = [
    {title: 'Angular'},
    {title: 'Vue'},
    {title: 'React'},
    {title: 'Redux'},
    {title: 'Node'},
    {title: 'React native'},
    {title: 'Native Js'},
];

const selectItems = document.querySelector('.select_items');

const addSelectItem = (value) => {
    value.map(item => {
        let li = document.createElement('li');
        li.classList.add('select_body_item')
        li.textContent = item.title
        selectItems.append(li)
    })
}

addSelectItem(items)


const selectShowBtn = document.querySelector('.select_top')
const selectBody = document.querySelector('.select_body')
const selectArrow = document.querySelector('.select_arrow')

selectShowBtn.addEventListener('click', showSelectItem)

function showSelectItem(){
    selectBody.classList.toggle('show')
    selectArrow.classList.toggle('rotate')
}


const selectItem = document.querySelectorAll('.select_body_item');

const selectTitle = document.querySelector('.select_title')

selectItem.forEach((item,index) => {
    item.addEventListener('click',()=> selectElement(item,index))
})

function selectElement (item,index) {
    selectItem.forEach(item => item.classList.remove('active'))
    item.classList.add('active')
    selectTitle.textContent = items[index].title
    selectBody.classList.remove('show')
    selectArrow.classList.remove('rotate')
}

selectTitle.textContent = items[0].title