import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id="clickup-integration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d) {
                function l() {
                  var s = d.createElement("script");
                  s.type = "text/javascript";
                  s.async = true;
                  s.src = "https://ilocx-widget.vercel.app/inject/index.js";
                  var x = d.getElementsByTagName("script")[0];
                  x.parentNode.insertBefore(s, x);
                }
                w.addEventListener("load", l, false);
              })(window, document);
                                `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
