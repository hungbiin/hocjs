  //   var users = [
  //       {
  //       id: 1,
  //       name: 'Hung'
  //       },
  //       {
  //       id: 2,
  //       name: 'Biin'
  //       },
  //       {
  //       id: 3,
  //       name: 'Nam'
  //       }
  // ];
  
  // var comments = [
  //   {
  //     id: 1,
  //     user_id: 1,
  //     content: 'xin chao'
  //   },
  //   {
  //     id: 2,
  //     user_id: 2,
  //     content: 'hello'
  //   }
  // ];
  
  
  // function getCommnent() {
  //   return new Promise(function(resolve) {
  //     setTimeout(function() {
  //       resolve(comments)
  //     },2000)
  //   })
  // }
  
  // function getUserByid(userIds) {
  //   return new Promise(function(resolve) {
  //     var result = users.filter(function(user) {
  //       return userIds.includes(user.id)
  //     })
  //     setTimeout(function() {
  //       resolve(result)
  //     },2000)
  // })
  // };
  
  //   getCommnent()
  //       .then(function(comments) {
  //           var userIds = comments.map(function(comment) {
  //               return comment.user_id
  //           })
  //           // console.log(userIds)
  //           return getUserByid(userIds)
  //               .then(function(users) {
  //               return {
  //                   users: users,
  //                   comments: comments
  //               }
  //           })
  //           .then(function(data) {
  //               var commentBlock = document.getElementById('comment-block')
  //               var html = '';
  //               data.comments.forEach(function(comment) {
  //                   var user = data.users.find(function(user) {
  //                   return user.id === comment.user_id
  //                   })
  //                   html += `<li>${user.name}: ${comment.content}</li>`
  //               })
  //               commentBlock.innerHTML = html
  //           });
  //       })

// var postApi = 'https://jsonplaceholder.typicode.com/posts'

// fetch(postApi)
//   .then(function(posts) {
//     return posts.json()
//   })
//   .then(function(posts) {
//     var html = posts.map(function(post) {
//       return `
//         <li> 
//           <h1>${post.id}</h1>
//           <h2>${post.title}</h2>
//           <p>${post.body}</p>
//         </li>
//       `
//     })
//     document.querySelector('ul').innerHTML = html
//   })

// app todo

// var input = document.getElementById('input')
// input.oninput = function(e) {
//   console.log(e.target.value)
// }

// var button = document.getElementById('btn');
// button.addEventListener('click', function() {
//   var value = document.getElementById('input').value;
//   var ul = document.getElementById('ul');
//   var li = document.createElement('li');
//   li.appendChild(document.createTextNode(value))
//   ul.appendChild(li)
// })


// JSON server



// var nameApi = 'http://localhost:3000/inFor';

// function start() {
//   getNames(function callback(names) {
//     rederNames(names)
//   });
  
// }
// start();


// // function

// function getNames(callback) {
//   fetch(nameApi)
//     .then(function(reponse) {
//       return reponse.json();
//     })
//     .then(callback);
// }

// function rederNames(names) {
//   var listNameBlock = document.getElementById('listNames')
//   var html = names.map(function(repon) {
//     return `
//     <li>
//     <h3> ten: ${repon.name}</h3>
//     <p> tuoi: ${repon.age}</p>
//     <p> dia chi: ${repon.adderss}</p>
//     </li>
//     `
//   })
//   listNameBlock.innerHTML = html.join('')
// }


// var AIPlistname = 'http://localhost:3000/inFor'

// function start() {
//   Getlistname(renderlistname)
//   handleSumitform()
  
// }
// start()




// function Getlistname(callback) {
//   fetch(AIPlistname)
//     .then(function(name) {
//       return name.json()
//     })
//     .then(callback)
// }

// function summitName(data, callback) {
//   var options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data),
//   }

//   fetch(AIPlistname, options)
//     .then(function(response) {
//       response.json()
//     })
//     .then(callback)
// }

// function handleDeleteName(id) {
//   var options = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   }

//   fetch(AIPlistname + '/' + id, options)
//     .then(function(response) {
//       response.json()
//     })
//     .then(function() {
//       var nameIteam = document.querySelector('.name-item' + id)
//       if(nameIteam) {
//         nameIteam.remove()
//       }
//     })
// }

// function renderlistname(name) {
//   var ulElement = document.querySelector('#listNames')
//   var listnames = name.map(function(e) {
//     return `
//       <li class="name-item${e.id}"> 
//         <h2>${e.name}</h2>
//         <p>${e.adderss}</p>
//         <p>${e.age}</p>
//         <button onclick="handleDeleteName(${e.id})">xóa</button>
//       </li>
//     `
//   })

//   ulElement.innerHTML = listnames.join('')
// }

// function handleSumitform() {
//   var btnElement = document.querySelector('#summit')
//     btnElement.onclick = function() {
      
//       var nameElement = document.querySelector('#name').value;
//       var adderssElement = document.querySelector('#adderss').value;
//       var ageElement = document.querySelector('#age').value;
//       console.log(nameElement)
  
//       var formdata = {
//         name: nameElement,
//         adderss: adderssElement,
//         age: ageElement
//       }

//       summitName(formdata, function() {
//         Getlistname(renderlistname)
//       });
//     }
// }


// var AIPlistname = 'http://localhost:3000/inFor'


// function start () {
//   Getlistname(renderlistname);
//   handlesummitName();
  
// }
// start()

// function Getlistname(callback) {
//   fetch(AIPlistname)
//     .then(function(reponse) {
//       return reponse.json()
//     })
//     .then(callback)
// }

// function renderlistname(names) {
//   var ulElement = document.querySelector('#listNames')
//   var dataname = names.map(function(e) {
//     return `
//     <li id="name-item${e.id}">
//       <h3>${e.name}</h3>
//       <p>${e.adderss}</p>
//       <p>${e.age}</p>
//       <button onclick="handleDelete(${e.id})">xóa</button>
//     </li>
//     `
//   })

//   ulElement.innerHTML = dataname.join('')
// }
// // thêm summit vào dom
// function rendersummitName(data, callback) {
//   var opption = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data),
//   }
//   fetch(AIPlistname, opption)
//     .then(function(reponse) {
//       return reponse.json()
//     })
//     .then(callback)
// }


// function handlesummitName() {

//   var summit = document.querySelector('#summit')
//     summit.onclick = function() {
//       var name = document.querySelector('#name').value
//       var adderss = document.querySelector('#adderss').value
//       var age = document.querySelector('#age').value
  
//       var valuedata = {
//         name: name,
//         adderss: adderss,
//         age: age
//       }
//       rendersummitName(valuedata, function() {
//         Getlistname(renderlistname);
//       })
//     }
// }
// // end summit

// //  xóa list name 

// function handleDelete(id) {
//   var opption = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   }
//   fetch(AIPlistname + '/' + id, opption)
//     .then(function(reponse) {
//       return reponse.json()
//     })
//     .then(function() {
//       var xoaElement = document.querySelector('#name-item' + id)
//       if(xoaElement) {
//         xoaElement.remove()
//       }
//     })
// }


//end list name



// phần lực làm

// var add = document.querySelector('.add')

//   add.onclick = function() {
    
//     var input = document.querySelector('input')
//     var value = input.value;
//     var ul = document.querySelector('.ul')
//     var li = document.createElement("li")
//     // li.appendChild(document.createTextNode(input))
//     li.innerHTML = 
//       `<div class="flex">
//         <h2>${value}</h2>
//         <button class="delete">Delete</button>
//       </div>`
//     ul.appendChild(li)
//     input.value = ""
// }



var input = document.querySelector('input')
var button = document.querySelector('button')
var ul = document.querySelector('.todo')
var form = document.querySelector('form')

form.addEventListener('submit', function(event) {
  event.preventDefault()
  let val = input.value.trim()
  if(val) {
    addtodoElement({
      text: val
    })
  }
  input.value = ''
})

function addtodoElement(todo) {
  var li = document.createElement('li')

  li.innerHTML = `
    <span>${todo.text}</span>
    <i class="ti-trash"></i>
  `
  ul.appendChild(li)
  

  li.addEventListener('click', function() {
    this.classList.toggle('completed')
  })

  li.querySelector('i').addEventListener('click', function() {
    this.parentElement.remove()
  })

}