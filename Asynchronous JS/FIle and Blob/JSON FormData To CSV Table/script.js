APP = {
    data: [],
    init () {
        APP.addListeners()
    },
    addListeners () {
        const form = document.getElementById('form')
        form.addEventListener('submit',APP.saveData)
        
        document
        .getElementById('export')
        .addEventListener('click',APP.exportData)

        document
        .querySelector('#table tbody')
        .addEventListener('dblclick',APP.editCell)

        document.getElementById('firstName').focus()
    },
    saveData (ev) {
        ev.preventDefault()
        const form = ev.target;
        
        const fd = new FormData(form)
        //clear form data
        form.reset()
        //focus on first Input
        
        // ----------------------------------------------You have to make shift next field by arrow keys
        
        //save in APP.data
        APP.cacheData(fd);
        //build row
        APP.buildRow(fd);
        
        document.getElementById('firstName').focus()
    },
    cacheData: (fd) => {
        APP.data.push(Array.from(fd.values()))
        // console.table(APP.data);
        // console.log(APP.data);
    },
    buildRow: (fd) =>{
        const tbody = document.querySelector('#table tbody')
        const tr = document.createElement('tr')
        tr.innerHTML = ''
        tr.setAttribute('data-row',document.querySelectorAll('tbody tr').length)
        let col = 0;
        for(entry of fd.entries()){
            tr.innerHTML += `<td data-col="${col}" data-name="${entry[0]}"> ${entry[1]}</td>`
            col++
        }
        tbody.append(tr)
    },
    exportData: () => {
        //add header in data array
        APP.data.unshift(['First Name','Last Name','Email','User Name'])
        // covert array to string with \n at the end
        let str = '';
        APP.data.forEach(row=>{
            str += row.map(col => JSON.stringify(col)).join(',').concat('\n')
        });
        
        //create File
        let filename = `dataexport${Date.now()}.csv`
        let file = new File([str],filename,{type:'text/csv'})
        let url = URL.createObjectURL(file)
        let a = document.createElement('a') 
        a.href = url;
        a.download = filename;
        a.click();

    },
    editCell: (ev) => {
        let cell = ev.target.closest('td')
        // console.log(ev.target);
        // console.log(cell);
        let row = +cell.parentElement.getAttribute('data-row') //it will give 0,1,2 and + will convert to string
       let col = +cell.getAttribute('data-col')
       
       cell.contentEditable = true;
       cell.focus()
    //    let text = cell.textContent;
       cell.addEventListener('keydown', function save(ev){
            if(ev.key ==='Enter'|| ev.code === 'Enter'){
                cell.contentEditable = false
                cell.removeEventListener('keydown',save)
                APP.data[row][col] = cell.textContent
                // console.table(APP.data);
            }
       })
    }
}

document.addEventListener('DOMContentLoaded',APP.init)








// const fd = new FormData();
// fd.append('Name','Ali')

// const f = new File([JSON.stringify(fd)],'form',{type:'.json'})

// // f.arrayBuffer().then(json => {
// //     const json1 = new TextDecoder('utf-8').decode(json)
// //     console.log(json1);
// // })

// // const url = URL.createObjectURL(f);

// // fetch(url).then(res => res.text()).then(csv => {
// //     console.log(csv);
// // })