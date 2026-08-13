import React from "react";

const AuthForm = ({
  formData,
  errors,
  isLoading,
  onInputChange,
  onSubmit,
  submitText,
  fields,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={onInputChange}
            className={`
              appearance-none relative block w-full px-3 py-3 border rounded-md 
              placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 
              focus:ring-blue-500 focus:border-blue-500 transition-colors
              ${
                errors[field.name]
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }
            `}
            placeholder={field.placeholder || field.label}
          />
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isLoading}
        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          submitText
        )}
      </button>
    </form>
  );
};

export default AuthForm;
