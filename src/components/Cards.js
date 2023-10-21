import React from 'react';
import { TbBuildingCommunity, TbMapPin, TbZip } from 'react-icons/tb';

const Card = ({ index, name, email, street, city, zipcode }) => {
  return (
    <div
      className="bg-white rounded-4 d-flex p-2 shadow gap-4 align-items-center"
      style={{ width: 400 }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/${index}.jpg`}
        height={180}
        width={150}
        className="rounded-4"
        style={{ objectFit: 'cover' }}
        alt="avatar of a person"
      />
      <div className="d-flex flex-column p-1 w-100 justify-content-center">
        <p className="lh-sm fw-semibold mb-1 mw-100" style={{ fontSize: 18 }}>
          {name}
        </p>
        <p className="lh-sm text-secondary mb-4" style={{ fontSize: 14 }}>
          {email}
        </p>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2">
            <TbMapPin className="fs-4" />
            <p className="lh-sm m-0 text-center">{street}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <TbBuildingCommunity className="fs-4" />
            <p className="lh-sm m-0 text-center">{city}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <TbZip className="fs-3" />
            <p className="lh-sm m-0 text-center">{zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
