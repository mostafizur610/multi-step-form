"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const FormSummary = () => {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-lg">Personal Information</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mt-2">
            <p>
              <span className="font-medium">Full Name:</span>{" "}
              {formData.fullName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {formData.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {formData.phone}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg">Address Details</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mt-2">
            <p>
              <span className="font-medium">Street:</span>{" "}
              {formData.streetAddress}
            </p>
            <p>
              <span className="font-medium">City:</span> {formData.city}
            </p>
            <p>
              <span className="font-medium">Zip Code:</span> {formData.zipCode}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg">Account Information</h3>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mt-2">
            <p>
              <span className="font-medium">Username:</span> {formData.username}
            </p>
            <p>
              <span className="font-medium">Password:</span>{" "}
              {"•".repeat(formData.password?.length || 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSummary;
