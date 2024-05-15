import { ReactElement } from "react";
import { create } from "zustand";

const useStepFormStore = create((set) => ({
    stepFormData: [], // Initial step form data
    setStepFormData: (data: any) => set({ stepFormData: data }),
    // setStepFormData: (form: any) =>  set((state: { stepFormData: any; }) => ({
    //   stepFormData: {
    //     ...state. stepFormData,
    //     ...form,
    //   },
    // })),
  }));

  export default useStepFormStore