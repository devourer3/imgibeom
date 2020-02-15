/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from './wrap-with-provider'
export const wrapRootElement = wrapWithProvider

import React from "react";
import { Helmet } from "react-helmet/es/Helmet"

export function onRenderBody(
  { setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {
  setHeadComponents([
    // <script
    //   data-cfasync="false"
    //   src="form-submission-handler.js"/>
    // <script
    //   type="text/javascript"
    //   src="https://abc.com/abc/abc0123.js"
    // />,
    // <script
      // dangerouslySetInnerHTML={{
      //   __html=`
        // javascript code
   	 // `
      // }}
    // />,
  ]);

  setPreBodyComponents([
    // <script
    //   key="xyz"
    //   type="text/javascript"
    //   src="https://xyz.com/xyz/xyz1345.js"
    // />,
    // <script
    // data-cfasync="false"
    // src="form-submission-handler.js"/>
  ]);

  setPostBodyComponents([
    <script
      data-cfasync="true"
      src="form-submission-handler.js"/>
    // <script
    //   key="pqr"
    //   type="text/javascript"
    //   src="https://pqr.com/pqr/pqr12345.js"
    // />,
  ]);

}