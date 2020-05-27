import React, { Fragment } from "react";
import ChangedIcon from "../ChangedIcon/ChangedIcon";
const RowData = ({
  total,
  active,
  recovered,
  deaths,
  additionalTotal,
  additionalDeaths,
  additionalRecovery,
  additionalActive,
}) => {
  const bug =
    additionalTotal === total &&
    additionalRecovery === recovered &&
    additionalDeaths === deaths;

  return (
    <Fragment>
      <td>
        {additionalTotal !== undefined && additionalTotal !== 0 && !bug && (
          <ChangedIcon data={additionalTotal} mama="is-confirmed" />
        )}
        <span className="total">{total}</span>
      </td>
      <td>
        {additionalActive !== undefined && additionalActive !== 0 && !bug && (
          <ChangedIcon data={additionalActive} mama="is-active" />
        )}
        <span className="total">{active}</span>
      </td>
      <td>
        {additionalRecovery !== undefined &&
          additionalRecovery !== 0 &&
          !bug && <ChangedIcon data={additionalRecovery} mama="is-recovered" />}
        <span className="total">{recovered}</span>
      </td>
      <td>
        {additionalDeaths !== undefined && additionalDeaths !== 0 && !bug && (
          <ChangedIcon data={additionalDeaths} mama="is-deaths" />
        )}
        <span className=" total">{deaths}</span>
      </td>
    </Fragment>
  );
};

export default RowData;
