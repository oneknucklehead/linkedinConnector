function clickFunction() {
  let connectButtons = document.getElementsByClassName(
    'artdeco-button--2 artdeco-button--secondary invitation-card__action-btn'
  )
  if (connectButtons.length) {
    connectButtons.forEach((connectButton) => {
      connectButton.click()
      console.log('All connections accepted successfully!')
    })
  } else {
    alert('No Connections to accept!')
  }
}

clickFunction()
