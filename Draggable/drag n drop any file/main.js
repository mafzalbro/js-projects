const dragDrop = require('drag-drop')

dragDrop('#dropTarget', (files, pos, fileList, directories) => {
  console.log('Here are the dropped files', files) // Array of File objects
  console.log('Dropped at coordinates', pos.x, pos.y)
  console.log('Here is the raw FileList object if you need it:', fileList)
  console.log('Here is the list of directories:', directories)
})
