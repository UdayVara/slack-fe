// hooks/useCreateWorkspace.ts
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios"; // your shared axios file

const createWorkspace = async (formData: FormData) => {
  return await api.post("/workspace", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useCreateWorkspace = () => {
  return useMutation({
    mutationFn: createWorkspace,
  });
};
