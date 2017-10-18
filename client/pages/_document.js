import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleTags()

    return (
      <html>
        <Head>
          <script src='/static/js/google-tag-manager.js'></script>
          <script src='/static/js/google-phone-call-tracking.js'></script>

          <title>My page</title>
          <style dangerouslySetInnerHTML={{ __html: styleTags }} />
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
