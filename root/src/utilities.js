import '@hotwired/turbo'

export function loadRemoteAssets({manifestUrl, javascriptUrlCallback, stylescheetUrlsCallback}) {
  fetch(manifestUrl)
    .then(res => res.json())
    .then(json => {
      const javascriptUrl = javascriptUrlCallback(json)
      _runJavaScriptFromUrl(javascriptUrl)
      const stylesheetsUrls = stylescheetUrlsCallback(json)
      stylesheetsUrls.forEach(url => _runStylesheetFromUrl(url))
    })
}

function _runJavaScriptFromUrl(url) {
  const script = document.createElement('script')
  script.src = url
  script.type = 'module'
  document.body.appendChild(script)
}

function _runStylesheetFromUrl(url) {
  const link = document.createElement('link')
  link.href = url
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}
