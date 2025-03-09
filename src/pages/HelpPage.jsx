import React from "react";
import { BannerBlue } from "../assets";

const HelpPage = () => {
  return (
    <div className="w-full bg-body-bg p-5 max-lg:space-y-7">
      <div className="w-full max-w-4xl mx-auto rounded-3xl h-[250px] bg-main-color overflow-hidden relative">
        <h1 className="bg-white text-main-color font-bold tracking-tight text-2xl w-fit h-fit px-4 py-2 rounded-2xl shadow-sm absolute left-0 -bottom-5 right-0 mx-auto">GradeWave</h1>
        <img src={BannerBlue} className="w-full h-fit min-h-full object-cover" />
      </div>
      <div className="min-h-screen px-6 max-lg:px-2">
        <div className="max-w-4xl mx-auto p-6 max-lg:p-0">
          <div className="space-y-6">
            <section>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                1. How to Mark Exams
              </h2>
              <p className="text-gray-700 text-sm">
                To mark exams, navigate to the "Admin" section of your
                dashboard. Select the exam to mark from the list and enter the
                scores for each student. You can also adjust grading criteria as
                needed, and finalize marks with a single click.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                2. Viewing Student Results
              </h2>
              <p className="text-gray-700 text-sm">
                To view student results, go to the "Results" tab. You can filter
                results by subject, student name, or date. You also have the
                option to export data to CSV for further analysis.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                3. Exam Scheduling
              </h2>
              <p className="text-gray-700 text-sm">
                In the "Exams" section, click on the "Schedule Exam" button.
                Here, you can define the exam date, duration, and the specific
                subjects to be included. Be sure to review the schedule before
                confirming the exam dates.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                4. User Management
              </h2>
              <p className="text-gray-700 text-sm">
                Admins can manage users by going to the "User Management"
                section. Here, you can add new users, assign roles, and
                deactivate accounts as necessary. Ensure to keep user
                information up to date.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                5. Technical Support
              </h2>
              <p className="text-gray-700 text-sm">
                If you encounter any technical issues, please contact our
                support team through the "Support" page. We are available 24/7
                to assist you with any technical challenges.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
