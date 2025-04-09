"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const AddressDetailsStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Street Address
          </label>
          <input
            {...register("streetAddress")}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.streetAddress.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            {...register("city")}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.city.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Zip Code</label>
          <input
            {...register("zipCode")}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.zipCode.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressDetailsStep;
