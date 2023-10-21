const Skeleton = () => {
  return (
    <div
      className="bg-white rounded-4 d-flex p-2 shadow gap-4"
      style={{ width: 400 }}
    >
      <div
        className="rounded-4 bg-secondary-subtle"
        style={{ height: 180, width: 280 }}
      ></div>

      <div className="d-flex flex-column p-1 w-100 justify-content-center placeholder-glow">
        <p className="lh-sm fs-5 fw-semibold mb-1">
          <span className="placeholder col-9 rounded-4"></span>
        </p>
        <p className="lh-sm text-secondary mb-4" style={{ fontSize: 14 }}>
          <span className="placeholder col-6 rounded-2"></span>
        </p>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-secondary-subtle rounded-1"
              style={{ height: 20, width: 20 }}
            ></div>
            <span className="placeholder col-6 rounded-2"></span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-secondary-subtle rounded-1"
              style={{ height: 20, width: 20 }}
            ></div>
            <span className="placeholder col-6 rounded-2"></span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div
              className="bg-secondary-subtle rounded-1"
              style={{ height: 20, width: 20 }}
            ></div>
            <span className="placeholder col-6 rounded-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skeleton };
