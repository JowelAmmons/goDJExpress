var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-Down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const user = this.parentNode.parentNode.childNodes[1].innerText
        const song = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('/song', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'user': user,
            'song': song,
            'thumbUp': thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const user = this.parentNode.parentNode.childNodes[1].innerText
//     const song = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
//     fetch('/song', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'user': user,
//         'song': song,
//         'thumbUp':(thumbUp-1)-1
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const user = this.parentNode.parentNode.childNodes[1].innerText
        const song = this.parentNode.parentNode.childNodes[3].innerText
        const artist = this.parentNode.parentNode.childNodes[5].innerText
        fetch('/song', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'user': user,
            'song': song,
            'artist': artist
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
