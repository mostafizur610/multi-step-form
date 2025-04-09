"use client";

import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import PersonalInfoStep from "./form-steps/PersonalInfoStep";
import AddressDetailsStep from "./form-steps/AddressDetailsStep";
import AccountSetupStep from "./form-steps/AccountSetupStep";
import FormSummary from "./form-steps/FormSummary";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  accountSetupSchema,
  addressDetailsSchema,
  FormValues,
  personalInfoSchema,
} from "@/types/form";

const steps = [
  { id: "Personal Info", schema: personalInfoSchema },
  { id: "Address Details", schema: addressDetailsSchema },
  { id: "Account Setup", schema: accountSetupSchema },
  { id: "Summary" },
];

const submitFormData = async (data: FormValues) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Submitted data:", data);
      resolve({ success: true });
    }, 1000);
  });
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const methods = useForm<FormValues>({
    resolver:
      currentStep < steps.length - 1
        ? zodResolver(steps[currentStep].schema as never)
        : undefined,
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: submitFormData,
    onSuccess: () => {
      alert("Form submitted successfully!");
      methods.reset();
      setCurrentStep(0);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (currentStep === steps.length - 1) {
      mutation.mutate(data);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4 md:p-8">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Multi-Step Form</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm"
            >
              {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${
                    index < currentStep ? "text-green-500" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStep
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-600"
                    }`}
                  >
                    {index < currentStep ? "✓" : index + 1}
                  </div>
                  <span className="text-xs mt-1">{step.id}</span>
                </div>
              ))}
            </div>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {currentStep === 0 && <PersonalInfoStep />}
              {currentStep === 1 && <AddressDetailsStep />}
              {currentStep === 2 && <AccountSetupStep />}
              {currentStep === 3 && <FormSummary />}

              <div className="mt-6 flex justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500"
                  >
                    Previous
                  </button>
                )}
                <div className="ml-auto">
                  {currentStep < steps.length - 1 ? (
                    <button
                      type="submit"
                      disabled={!methods.formState.isValid}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
                    >
                      {mutation.isPending ? "Submitting..." : "Submit"}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
