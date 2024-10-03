import React, { useState } from "react";
import { formatSortCodeString } from "../../utils/formatSortCodeString";

const AccountInformation = () => {
  return (
    <div>
      sort code:
      <span>{formatSortCodeString("12345678")}</span>
    </div>
  );
};

export default AccountInformation;
