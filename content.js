var extensionBtn = document.getElementById('acceptBtn')
extensionBtn.addEventListener('click', () => {
  var acceptButtons = document.getElementsByClassName(
    'artdeco-button--2 artdeco-button--secondary invitation-card__action-btn'
  )
  // for (let acceptButton of acceptButtons) {
  //   // acceptButton.click()
  //   console.log(acceptButton)
  // }
  chrome.permissions.request(
    {
      permissions: ['tabs'],
      origins: ['https://www.google.com/'],
    },
    (granted) => {
      // The callback argument will be true if the user granted the permissions.
      if (granted) {
        //   doSomething();
        console.log('granted')
      } else {
        //   doSomethingElse();
        console.log('not granted')
      }
    }
  )
})
