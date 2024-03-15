import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/webhook/upoladthing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();