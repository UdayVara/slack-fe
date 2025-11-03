"use client";
import { useState } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CloudUpload, Paperclip, Loader2 } from "lucide-react"
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "@/components/ui/FileUpload"
import { useCreateWorkspace } from "@/api/workspace.query";

const formSchema = z.object({
  workspace_name: z.string().min(1, { message: "Workspace name is required" }),
  workspace_image: z.any().refine((files) => files && files.length > 0, { message: "Workspace image is required" }),
});

export default function MyForm({handleClose}:any) {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { workspace_name: "", workspace_image: "" },
    mode: "onChange",
  });

  const { mutate, isPending } = useCreateWorkspace();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("name", values.workspace_name);
    formData.append("workspaceImage", files![0]); // attach file

    mutate(formData, {
      onSuccess: () => {
        toast.success("Workspace created!");
        form.reset();
        setFiles(null);
        
        handleClose()
      },
      onError: (err: any) => {
        toast.error(err?.message || "Error creating workspace");
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mx-auto pt-3">

        <FormField
          control={form.control}
          name="workspace_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workspace Name</FormLabel>
              <FormControl>
                <Input placeholder="Workspace Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workspace_image"
          render={() => (
            <FormItem>
              <FormLabel>Select File</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={(f) => {
                    setFiles(f);
                    form.setValue("workspace_image", f);
                  }}
                  dropzoneOptions={dropZoneConfig}
                  className="relative bg-background rounded-lg p-2"
                >
                  <FileInput id="fileInput" className="outline-dashed outline-1 outline-slate-500">
                    <div className="flex items-center justify-center flex-col p-8 w-full ">
                      <CloudUpload className='text-gray-500 w-10 h-10' />
                      <p className="mb-1 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>&nbsp; or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, JPEG</p>
                    </div>
                  </FileInput>

                  <FileUploaderContent>
                    {files?.map((file, i) => (
                      <FileUploaderItem key={i} index={i}>
                        <Paperclip className="h-4 w-4" />
                        <span>{file.name}</span>
                      </FileUploaderItem>
                    ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} 
          {isPending ? "Creating..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
