import { ReactElement } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FormImageState {
  formImage: FormData;
  setFormImage: (data: Record<string, any>) => void;
  clearFormImage: () => void;
}

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

const useFormImage = create(
  persist(
    (set) => ({
      formImage: [],
      setFormImage: (data: any) => 
        set((state: any) => ({
          formImage: [
            ...state.formImage,
            data,
            
          ],
        })),
      clearFormImage: () => {
        set({ formImage: new FormData() });
      },
    }),
    {
      name: 'stepperImage',
    }
  )

);


export {useStepFormStore as default, useFormImage};
