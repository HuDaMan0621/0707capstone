import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, utilities } from "../styleVars";

const footer = css`
  .Footer-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    background-color: ${colors.darkColor};
    color: ${colors.lightColor};

    span {
      display: block;
      padding: 0.5rem 0;
    }
  }
`;

export default function Footer() {
  return (
    <div css={footer}>
      <div className="Footer-wrapper">
        <div>
          <h3>Mailing Address</h3>
          <span>SPHYN</span>
          <span>123 Business Address</span>
          <span>Atlanta, GA 30301</span>
        </div>
        <div>
          <h3>Call Us</h3>
          <span>(222) 222 - 2222</span>
        </div>
        <div>
          <h3>Email Us</h3>
          <span>saesha@sphyn.us</span>
          <span>princeton@sphyn.us</span>
          <span>harley@sphyn.us</span>
          <span>ying@sphyn.us</span>
          <span>nick@sphyn.us</span>
        </div>
      </div>
    </div>
  );
}
