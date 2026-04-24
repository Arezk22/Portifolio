import React from "react";
import "./BtnDownloadSection.css";

const DownloadCV = () => {
  return (
    <div className="download-container mt-4">
      <a
        href="/assets/Your_CV.pdf" // تأكد من وضع ملف الـ PDF في فولدر public/assets
        download="My_Professional_CV.pdf" // الاسم اللي هيظهر للمستخدم لما الملف يتحمل
        className="btn btn-download d-inline-flex align-items-center gap-2"
      >
        <i className="bi bi-file-earmark-arrow-down-fill"></i>
        <span>Download CV</span>
      </a>
    </div>
  );
};

export default DownloadCV;
