export function loadRemoteAssets({manifestUrl}) {
  const origin = new URL(manifestUrl).origin

  /*
  * Here we read the manifest file (JSON), load and execute JavaScript,
  * and load stylesheets.
  * */
  fetch(manifestUrl)
    .then(res => res.json())
    .then(json => {
      const {javaScriptsSet, stylesheetsSet} = extractAssetsFromManifest(json)

      javaScriptsSet.forEach(javascriptFile => {
        const javascriptUrl = `${origin}/${javascriptFile}`
        runJavaScriptFromUrl(javascriptUrl)
      })
      stylesheetsSet.forEach(stylesheetFile => {
        const stylesheetsUrl = `${origin}/${stylesheetFile}`
        runStylesheetFromUrl(stylesheetsUrl)
      })
    })
}

function runJavaScriptFromUrl(url) {
  const script = document.createElement('script')
  script.src = url
  script.type = 'module'
  document.body.appendChild(script)
}

function runStylesheetFromUrl(url) {
  const link = document.createElement('link')
  link.href = url
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

function extractAssetsFromManifest(json) {
  const javaScriptsSet = new Set()
  const stylesheetsSet = new Set()
  Object.entries(json).forEach(([, value]) => {
    if (value.file.endsWith('.js')) {
      javaScriptsSet.add(value.file)
    } else if (value.file.endsWith('.css')) {
      stylesheetsSet.add(value.file)
    }

    if (value.css) {
      value.css.forEach(css => stylesheetsSet.add(css))
    }
  })
  return {javaScriptsSet, stylesheetsSet}
}
