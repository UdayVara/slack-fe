    // types/next-auth.d.ts or types/auth.d.ts
    import { DefaultSession } from "next-auth"; // or "@auth/core/types"

    declare module "next-auth" { // or "@auth/core"
      interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
          id: string; // Add custom properties here, e.g., 'id'
          username:string;
          role:string;
          image: string;
          token:string;
          password:string
        };
      }
    }