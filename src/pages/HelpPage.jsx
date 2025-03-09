import React from 'react';

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-card-bg-weak py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Help Center</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-3">1. How to Mark Exams</h2>
            <p className="text-gray-700 text-sm">
              To mark exams, navigate to the "Admin" section of your dashboard. Select the exam to mark from the list and enter the scores for each student.
              You can also adjust grading criteria as needed, and finalize marks with a single click.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-3">2. Viewing Student Results</h2>
            <p className="text-gray-700 text-sm">
              To view student results, go to the "Results" tab. You can filter results by subject, student name, or date. You also have the option to export data to CSV for further analysis.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-3">3. Exam Scheduling</h2>
            <p className="text-gray-700 text-sm">
              In the "Exams" section, click on the "Schedule Exam" button. Here, you can define the exam date, duration, and the specific subjects to be included. Be sure to review the schedule before confirming the exam dates.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-3">4. User Management</h2>
            <p className="text-gray-700 text-sm">
              Admins can manage users by going to the "User Management" section. Here, you can add new users, assign roles, and deactivate accounts as necessary. Ensure to keep user information up to date.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-800 mb-3">5. Technical Support</h2>
            <p className="text-gray-700 text-sm">
              If you encounter any technical issues, please contact our support team through the "Support" page. We are available 24/7 to assist you with any technical challenges.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
