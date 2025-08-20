    // types/next-auth.d.ts or types/auth.d.ts
    import { DefaultSession } from "next-auth"; // or "@auth/core/types"
import { PlatformType } from "../Models/user.model";

    declare module "next-auth" { // or "@auth/core"
      interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
          id: string; // Add custom properties here, e.g., 'id'
          username:string;
          email:string;
          verified:boolean;
          platform:PlatformType;
          token:string;
          image?:string
        };
      }
    }