$(function() {
  showlogList()
})

function showlogList() {
  const html_str = `<div>hello 你好</div>`
  $(html_str).appendTo($('#logList'))
  $("#react").click(() => {
    chrome.tabs.create({url: 'https://react.docschina.org'})
  })
}


function showNoLog() {}


function onClickList() {}

function deleteLog() {}