import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useFieldArray, useForm } from "react-hook-form";
import "react-dropdown/style.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { createcatag } from '../services/api/catagoryApi';
import { createsubcatag } from '../services/api/subcatagApi';

export const Route = createFileRoute("/addCatagory")({
  component: () => <CatagAdd />,
});

interface Props {
  onClose: () => void;
}

function CatagAdd({ onClose }: Props) {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcategories",
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const categoryResponse = await createcatag(data.categoryName, data.categoryDescription); // changed to categoryName and categoryDescription
      console.log("Category Response:", categoryResponse);

      // Extract category ID from the category response
      const categoryId = categoryResponse.data._id;

      // Create subcategories
      for (const subcategory of data.subcategories) {
        const subcategoryResponse = await createsubcatag(subcategory.name,  data.categoryDescription,categoryId); // removed subcategory.description and sent only name and categoryId
        console.log("Subcategory Response:", subcategoryResponse);
      }

      onClose();
    } catch (error) {
      console.error('Error creating category:', error);
      // Handle error here
    }
  };

  return (
    <div className="mx-auto max-w-md mt-8 border border-gray-300 rounded-md p-4 bg-white z-50">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={onClose}
          className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <img src="/asset/icons/back-arrow.svg" className="w-8 h-8 mr-2" />
          <h2 className="text-[#4A176D] text-3xl font-bold">
            Add New Category
          </h2>
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="categoryName" className="text-[#00B0AD] block font-medium mb-1">Category Name <span className="text-red-500">*</span></label>
          <input type="text" id="categoryName" {...register("categoryName", { required: true })} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="categoryDescription" className="text-[#00B0AD] block font-medium mb-1">Description</label>
          <textarea id="categoryDescription" {...register("categoryDescription")} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="text-[#00B0AD] block font-medium mb-1">Subcategories</label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center mb-2">
              <input
                type="text"
                {...register(`subcategories.${index}.name`, { required: true })}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Subcategory Name"
              />
              <button type="button" onClick={() => remove(index)} className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => append({ name: "" })} className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-base py-2 px-4 rounded">Add Subcategory</button>
        </div>
        <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-base py-2 px-4 rounded">Add Category</button>
      </form>
    </div>
  );
}

export default CatagAdd;
