import styled from "@emotion/styled";

export default styled.blockquote({
  boxShadow: "none",
  position: "relative",
  color: "#FAFAFA",
  background: "#087EA4",
  fontStyle: "normal",
  padding: "32px",
  textAlign: "center",
  "&:after": {
    content: "''",
    position: "absolute",
    bottom: "0",
    left: "30%",
    width: "0",
    height: "0",
    border: "40px solid transparent",
    borderTopColor: "#087EA4",
    borderBottom: "0",
    borderLeft: "0",
    marginLeft: "-20px",
    marginBottom: "-40px",
  },
});
