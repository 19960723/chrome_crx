// 监听background页面发来的消息
chrome.runtime.onMessage.addListener((request) => {
  console.log("接收到background消息：", request);
  let { todo, data } = request
  switch(todo) {
    case "addLog":
      showAddLogModal(data)
      break
    case "closeModal":
      closeAddLogModal()
      break
  }
})

function showAddLogModal(data) {
  const image = chrome.runtime.getURL("images/icon.png");
  const modal_dom = `
    <div id="modal_container" style="position:relative;">
      <div id="mask" style="position: fixed;top: 0;bottom: 0;left: 0;right: 0;width: 100%;height: 100%;background-color: #333333;opacity: 0.8;z-index:9998"></div>
      <div id="modal" style="position: fixed;top: 50%;left: 50%;width: 400px;height: 200px;margin-left: -200px;margin-top: -100px;background-color: #ffffff;border-radius: 8px;z-index: 9999;display: flex;flex-direction: column;align-items: center;padding: 20px">
        <img src="${image}" alt="" width="60" height="60" style="border-radius: 4px" />
        <input id="input" placeholder="请输入" required value="${data}" style="width: 320px;height: 46px;margin-top: 20px;border: 1px solid #000;border-radius: 4px;padding: 0 6px" />
        <button id="submit" style="width: 320px;height: 34px;margin-top: 20px;cursor: pointer;">保存</button>
      </div
    </div>
  `
  $(modal_dom).appendTo(document.body)
  $('#mask').click(closeAddLogModal)
  $('#submit').click(onSave)
} 

function closeAddLogModal() {
  $('#modal_container').remove()
}

function onSave() {}