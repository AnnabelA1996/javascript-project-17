var section = document.querySelector('section')

var p = document.createElement('p')
p.innerHTML = 'i just created this element'
section.append(p)

var names = ['john', 'mary', 'tom', 'steve']
var numbers = ['1', '2', '3']
var ul = document.createElement('ul')
document.body.appendChild(ul)

names.forEach(function (name){
   var li = document.createElement('li')
   li.innerHTML =  name
   ul.append(li)
})

function add() {
    var text = document.querySelector('[name="text"').value
    // var ol = document.createElement('ol')
    // document.body.appendChild(ol)
    ol = document.querySelector ('ol')
    var li = document.createElement('li')
    li.innerHTML = text
    ol.append(li)
    document.querySelector('[name="text"').value =''
}