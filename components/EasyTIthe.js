import Script from "next/script";
import Col from "react-bootstrap/Col";

export const EasyTIthe = () => {
  return (
    <Col>
      <Script
        src="https://forms.ministryforms.net/embed.aspx?formId=0ec43da8-2b21-4484-85c1-df51c398d075"
        strategy="BeforePageInteractive"
      />
    </Col>
  );
};
