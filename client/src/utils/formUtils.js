// formUtils.js

export const addItem = (setFormData, field, template) => {
  setFormData((prev) => ({
    ...prev,
    [field]: [...(prev[field] || []), { ...template }],
  }));
};

export const removeItem = (setFormData, field, index) => {
  setFormData((prev) => ({
    ...prev,
    [field]: prev[field].filter((_, i) => i !== index),
  }));
};

export const updateItem = (setFormData, field, index, key, value) => {
  setFormData((prev) => {
    const updated = [...prev[field]];
    updated[index][key] = value;
    return {
      ...prev,
      [field]: updated,
    };
  });
};
