import React from 'react';
import person from '../assets/person.jpg';
import { TbBuildingCommunity, TbMapPin, TbZip } from 'react-icons/tb';

const Card = () => {
  return (
    <div
      className="bg-white rounded-4 d-flex p-2 shadow gap-4"
      style={{ width: 400 }}
    >
      <img
        src={person}
        height={180}
        width={150}
        className="rounded-4"
        style={{ objectFit: 'cover' }}
      />
      <div className="d-flex flex-column p-1 w-100 justify-content-center">
        <p className="lh-sm fs-5 fw-semibold mb-1">Leanne Graham</p>
        <p className="lh-sm text-secondary mb-4" style={{ fontSize: 14 }}>
          Sincere@april.biz
        </p>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2">
            <TbMapPin className="fs-4" />
            <p className="lh-sm m-0 text-center">Kulas Light</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <TbBuildingCommunity className="fs-4" />
            <p className="lh-sm m-0 text-center">Gwenborough</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <TbZip className="fs-3" />
            <p className="lh-sm m-0 text-center">92998-3874</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
