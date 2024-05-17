import { ReactElement } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStepFormStore = create(
  persist(
    (set) => ({
      stepFormData: [],
      setStepFormData: (data: any) => set({ stepFormData: data }),
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
