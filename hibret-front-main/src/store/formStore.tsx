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

export default useStepFormStore;
