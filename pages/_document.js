// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700|Nunito:400,600,700&display=swap" rel="stylesheet" />
          <script type="text/javascript" async src="//www.termsfeed.com/public/cookie-consent/4.0.0/cookie-consent.js" charset="UTF-8"></script>
          <script
            type="text/javascript"
            charset="UTF-8"
            dangerouslySetInnerHTML={{
              __html: `
document.addEventListener('DOMContentLoaded', function () {
cookieconsent && cookieconsent.run({"notice_banner_type":"simple","consent_type":"implied","palette":"light","language":"cs","page_load_consent_levels":["strictly-necessary","functionality","tracking","targeting"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"sbernakrmelin.cz","open_preferences_center_selector":"#open_preferences_center"});
});
 `,
            }}
          />

          <script type="text/plain" cookie-consent="tracking" async src="https://www.googletagmanager.com/gtag/js?id=UA-221702743-2"></script>
          <script
            type="text/plain"
            cookie-consent="tracking"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-221702743-2');
          `,
            }}
          />

          <script
            type="text/plain"
            cookie-consent="targeting"
            dangerouslySetInnerHTML={{
              __html: `
!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1301227753350853');
                fbq('track', 'PageView');
  `,
            }}
          />

          <noscript>
            Cookies management by{' '}
            <a href="https://www.termsfeed.com/cookie-consent/" rel="nofollow noopener">
              TermsFeed Cookie Consent
            </a>
          </noscript>
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125408616-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-125408616-1');
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1301227753350853');
                fbq('track', 'PageView');
              `,
            }}
          /> */}
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1301227753350853&ev=PageView&noscript=1" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
