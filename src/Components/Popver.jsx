import React from "react";

export function CompanyInfoCard({
  companyName,
  location,
  logoUrl,
  ribbonImgUrl,
}) {
  return (
    <section className="flex flex-col text-sm text-center whitespace-nowrap rounded-lg shadow-md max-w-[113px]">
      <header className="flex flex-col items-center px-4 py-3 bg-white rounded-lg">
        <img
          loading="lazy"
          src={logoUrl}
          alt={`${companyName} logo`}
          className="w-5 aspect-square"
        />
        <h3 className="self-stretch mt-2 font-semibold text-slate-700">
          {companyName}
        </h3>
        <p className="mt-1 text-zinc-600">{location}</p>
      </header>
      <img
        loading="lazy"
        src={ribbonImgUrl}
        alt=""
        className="self-center w-4 aspect-[2.63]"
      />
    </section>
  );
}
