document.querySelector('.addBtn').addEventListener('click', addNew)


let classno = 0
let idno = 0
let ar = []
let deleteBtnno = 0
let no =0
function addNew() {


    if (document.querySelector('.taskMsg').value) {

        let text = document.querySelector('.taskMsg').value

        let div = document.createElement('div');

        let input = document.createElement('input');
        input.type = 'checkbox'
        input.setAttribute('id', `id${idno}`)
        input.setAttribute('class', `checkbox`)

        let label = document.createElement('label');
        label.textContent = text
        label.setAttribute('for', `id${idno}`)


        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '-'
        deleteBtn.setAttribute('class', `deleteBtn dBtn${deleteBtnno}`)


        div.className = `div${classno}`
        document.querySelector('.listCon').append(div)
        unqDiv = `div${classno}`

        ar.push(classno)

        document.querySelector(`.${unqDiv}`).classList.add('taskDiv')
        let subunqDiv = document.createElement('div')

        subunqDiv.className = `subDiv${classno}`

        document.querySelector(`.${unqDiv}`).append(subunqDiv)
        document.querySelector(`.${subunqDiv.className
            }`).append(input)
        document.querySelector(`.${subunqDiv.className
            }`).append(label)

        document.querySelector(`.${unqDiv}`).append(deleteBtn)


        // Add event listener to the delete button


        ++deleteBtnno;
        ++classno;
        ++idno;


    } else {
        console.log('enter true value')
    }
}


document.querySelector('.listCon').addEventListener('click', removeTask)

function removeTask(e) {
    for (i = 0; i <= ar.length; i++)
        if (e.target.classList.contains(`dBtn${i}`)) {
            document.querySelector(`.div${i}`).remove()

        }



}


document.addEventListener("keypress", function (event) {


    if (event.key == 'Enter') {
        addNew()
    }

})


document.querySelector('.deleteAllBtn').addEventListener('click', deleteAll)


function deleteAll() {

    document.querySelectorAll('.taskDiv').forEach(element => {
        element.remove()
    });


}


document.querySelector('.noteAddBtn').addEventListener('click', noteCreate)


function noteCreate() {

    let notesDiv = document.createElement('div')
    let note = document.createElement('textarea')
    let dBtn = document.createElement('img')
    let parent = document.querySelector('.NotesCon')


    notesDiv.classList.add('notesDiv', `noteDiv${no}`)

    

    note.setAttribute('class', 'note')
dBtn.src = 'cross.svg'
    dBtn.classList.add('noteDbtn', `noteDbtn${no}`)

    parent.append(notesDiv)
    notesDiv.append(note)
    notesDiv.append(dBtn)

    no++




}


document.querySelector('.noteDeleteAllBtn').addEventListener('click', noteDeleteAll)


function noteDeleteAll() {

    let parent = document.querySelectorAll('.notesDiv')



    parent.forEach(element => {

        element.remove()
    });
}

document.querySelector('.NotesCon').addEventListener('click', removeNote)

function removeNote(e) {
    for (let i = 0; i <= no; i++)
        if (e.target.classList.contains(`noteDbtn${i}`)) {

            if(document.querySelector(`.noteDiv${i}`)){
            document.querySelector(`.noteDiv${i}`).remove()}

        }

}