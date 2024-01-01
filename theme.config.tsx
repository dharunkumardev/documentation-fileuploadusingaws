import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import heartLogo from "./assets/heart.webp";
const config: DocsThemeConfig = {
  logo: (
    <span>
      <b>Files Upload and Retrieve at Fast and Secure Way Using AWS Services</b>
    </span>
  ),
  // project: {
  //   link: "https://github.com/shuding/nextra-docs-template",
  // },
  chat: {
    // link: "https://discord.com",
  },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  // chat: <span>hello</span>
  footer: {
    text: (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Maded With
          <img
            src={heartLogo.src}
            alt="Heart"
            width={20}
            style={{ marginLeft: "6px", marginRight: "6px" }}
          ></img>
          by
          <u>
            <a
              href="https://github.com/dharunkpr"
              style={{ color: "white", paddingLeft: "10px" }}
            >
              Dharun
            </a>
          </u>
        </div>
      </>
    ),
  },
};

export default config;
