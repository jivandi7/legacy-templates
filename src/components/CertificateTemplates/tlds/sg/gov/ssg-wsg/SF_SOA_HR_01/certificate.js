import {
  renderLogoWSQ,
  renderIssuingDate,
  renderAwardTextSOAHR,
  renderSignatureSOAHR,
  effectiveDateFontColorFunction
} from "../common/functions";
import fonts from "../common/fonts";

/* eslint-disable */
// Disabled eslint as there's no way to add proptypes to an anonymous function like this
export default ({ logo }) => ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid", width:"100%", paddingRight:"6%", paddingBottom:"100px", paddingTop:"100px", paddingLeft:"6%", fontFamily:"Arial" }}
    >
      {fonts()}
      {effectiveDateFontColorFunction(certificate)}
      {renderLogoWSQ(certificate)}
      {renderAwardTextSOAHR(certificate)}
      {renderIssuingDate(certificate)}
      {certificate.additionalData.certSignatories
        ? renderSignatureSOAHR(certificate)
        : ""}
    </div>
  </div>
);
