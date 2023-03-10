function getHotList() {
  return new Promise((resolve, reject) => {
    let listDom = $('#TopstoryContent .HotList-list .HotItem')
    let info_list = []
    listDom.each(function() {
      let title = $(this).find('.HotItem-content .HotItem-title').text()
      let link = $(this).find('.HotItem-content > a').attr('href')
      let content = $(this).find('.HotItem-content .HotItem-excerpt').text()
      let url = $(this).find('a.HotItem-img img').attr('src')
      info_list.push({
        title,
        link,
        content,
        url
      })
    })
    resolve(info_list)
  })
}

function showHotList(list) {
  let table_container = `<div></div>`
  console.log(list)
}

window.onload = function() {
  getHotList().then(res => {
    showHotList(res)
  })
}