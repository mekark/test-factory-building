"use client";

import { ChangeEvent, FormEvent, useState } from "react";

// Shared by every Figma enquiry form (hero + call-to-action): same seven
// fields, same validation, same API route and thank-you redirect.

const FORM_ENDPOINT = "/api/enquiry-form";
const THANK_YOU_URL = "/thank-you";

export const INDUSTRY_TYPES = [
  "Steel & Metal Industries",
  "Electronics Manufacturing",
  "Chemical & Process",
  "Power Plants",
  "Automobile Industry",
  "Pharmaceutical Facilities",
  "FMCG & Consumer Goods",
  "Textile & Processing Units",
  "Cold Storage Facilities",
  "Windmill Infrastructure",
  "Cleanroom Environments",
  "Industrial HVAC Systems",
];

export const SQFT_OPTIONS = [
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "50,000+ Sq.ft",
];

export type EnquiryValues = {
  name: string;
  projectLocation: string;
  phoneNumber: string;
  email: string;
  industryType: string;
  sqft: string;
  requirements: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const INITIAL_VALUES: EnquiryValues = {
  name: "",
  projectLocation: "",
  phoneNumber: "",
  email: "",
  industryType: "",
  sqft: "",
  requirements: "",
};

const validate = (values: EnquiryValues): EnquiryErrors => {
  const errors: EnquiryErrors = {};

  if (!values.name.trim()) errors.name = "Name is required";

  const phoneDigits = values.phoneNumber.replace(/\D/g, "");
  if (!phoneDigits) {
    errors.phoneNumber = "Mobile number is required";
  } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phoneNumber = "Enter a valid mobile number";
  }

  if (!values.industryType) errors.industryType = "Select industry type";
  if (!values.sqft) errors.sqft = "Select project sq. ft";

  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Enter a valid email";
  }

  return errors;
};

export function useEnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name as keyof EnquiryValues]) return current;
      const next = { ...current };
      delete next[name as keyof EnquiryValues];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitError(null);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      // Same payload shape as the original enquiry form; "service" carries the industry type.
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phoneNumber.trim(),
          location: values.projectLocation.trim(),
          company: "",
          sqf: values.sqft,
          startTimeline: "",
          budget: "",
          message: values.requirements.trim(),
          service: values.industryType,
          sourceUrl: window.location.href,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          payload?.message ||
            "We could not submit your enquiry right now. Please try again.",
        );
      }

      setValues(INITIAL_VALUES);
      window.location.assign(THANK_YOU_URL);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not submit your enquiry right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { values, errors, submitError, isSubmitting, handleChange, handleSubmit };
}
