import React from "react";
import { addItem, removeItem, updateItem } from "../utils/formUtils";

const DynamicInputSection = ({
  title,
  field,
  formData,
  setFormData,
  schema,
  labels = {},
  fieldWidths = {},
}) => {
  return (
    <div className="flex flex-col gap-4 text-sm md:text-base">
      <p className="text-lg md:text-2xl font-semibold mb-0">{title}</p>

      <div className="flex flex-col gap-4">
        {formData[field]?.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-3 items-start w-full"
          >
            {Object.keys(schema).map((key) => (
              <div
                key={key}
                className={`flex flex-col`}
                style={{
                  width:
                    fieldWidths[key] ||
                    "100%", // default to full width on mobile
                }}
              >
                <label className="mb-1 font-medium">
                  {labels[key] || key}
                </label>
                <input
                  type={typeof schema[key] === "number" ? "number" : "text"}
                  className="input"
                  value={item[key]}
                  onChange={(e) =>
                    updateItem(setFormData, field, index, key, e.target.value)
                  }
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => removeItem(setFormData, field, index)}
              className="text-red-600 font-bold !text-2xl hover:text-red-800 !mt-7"
              title="Delete"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => addItem(setFormData, field, schema)}
        className="generate_pdf button self-start"
      >
        + Add Details
      </button>
    </div>
  );
};

export default DynamicInputSection;
