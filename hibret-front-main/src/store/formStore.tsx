import { ReactElement } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const useStepFormStore = create(
  persist(
    (set) => ({
      stepFormData: [],
      setStepFormData: (data: any) => 
        set((state: any) => ({
          stepFormData: [
            ...state.stepFormData,
            data, // Directly add the whole data object
            
          ],
        })),
      clearFormData: () =>
        set(() => ({
          stepFormData: [],
        })),
    }),

    {
      name: "stepperData",
    }
  )
);


const useStore = create(
  persist(
    (set) => ({
      files: [], // Initial state with empty files array
      addFile: (file:any) =>
        set((state :any) => ({
          files: [...state.files, file], // Add the file to the files array
        })),
        clearFile: () =>
          set(() => ({
               files: [],
          })),
    }),


    {
      name: "files",
    }
  )
 
 
);
export const useFiles = () => useStore((state:any) => state.files);

export {useStepFormStore as default, useStore};

