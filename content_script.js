function clickFunction() {
  let connectButtons = document.getElementsByClassName(
    'artdeco-button--2 artdeco-button--secondary invitation-card__action-btn'
  )
  if (connectButtons.length) {
    for (const connectButton of connectButtons) {
      connectButton.click()
    }
  } else {
    alert('No Connections to accept!')
  }
}

clickFunction()
