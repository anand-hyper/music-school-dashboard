import React from "react";
import ScrollableCardContainer from "../StudPages/ScrollableCardContainer";
import Page from "../StudPages/Beststudents/Latestenroll/Page";
import Pages from "../StudPages/Beststudents/pages";

const EnrollmentPage: React.FC = () => (
  <div className="h-screen overflow-y-scroll">
    <div className="flex items-center justify-center">
      <ScrollableCardContainer />
    </div>
    <div className="">
      <Page />
    </div>
    <div className="">
      <Pages />
    </div>
  </div>
);

export default EnrollmentPage;