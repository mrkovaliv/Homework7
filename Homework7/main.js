window.addEventListener('DOMContentLoaded', () => {
    const disk = document.querySelector('.disk');
    const diskItemMenu = document.querySelector('.disk-item-menu');
    const createMenu = document.querySelector('.create-menu');
    const renameBtn = document.querySelector('.rename');
    const deleteBtn = document.querySelector('.delete');


    const addElem = () => {
        const elem = document.createElement('div');
        let nameElem = '';
        while(nameElem == '' || nameElem == null){
            nameElem = prompt('Enter file name', '');
        }
        elem.innerHTML = nameElem;
        elem.classList.add('disk__item');
        disk.append(elem);
    };

    const contextMenu = (event) => {
        event.preventDefault();
        if (event.target.classList == 'disk__item') {
            diskItemMenu.style.display = 'block';
            diskItemMenu.style.left = event.pageX + 'px';
            diskItemMenu.style.top = event.pageY + 'px';
            renameBtn.onclick = () => {
                rename = '';
                while(rename== '' || rename == null){
                    rename = prompt('Enter file name', event.target.innerHTML);
                }
                event.target.innerHTML = rename;
            };
            deleteBtn.onclick = () => {
                event.target.remove();  
            };
        } else {

            createMenu.style.display = 'block';
            createMenu.style.left = event.pageX + 'px';
            createMenu.style.top = event.pageY + 'px';
            createMenu.onclick = addElem;
        }
    };

    const HidecontextMenu = () => {
        createMenu.style.display = 'none';
        diskItemMenu.style.display = 'none';
    };

    document.addEventListener('contextmenu', contextMenu);
    document.addEventListener('click', HidecontextMenu);
    
    
});