import React, { ComponentType, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/db";
import { Session } from "@supabase/supabase-js";

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  const WithAuth: ComponentType<P> = (props: P) => {
	const router = useRouter();
    useEffect(() => {
		checkSession();

		    async function checkSession() {
		      const {
		        data,
		        error,
		      }: {
		        data: { session: Session | null };
		        error: Error | null;
		      } = await supabase.auth.getSession();
		
		      if (error || !data?.session) {
		        router.push("/404");
		      }
		    }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;

// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { supabase } from "../lib/db";
// import { Session } from "@supabase/supabase-js";

// export default function WithAuth<T>(Component: React.ComponentType<T>) {
//   const router = useRouter();

//   useEffect(() => {
//     checkSession();

//     async function checkSession() {
//       const {
//         data,
//         error,
//       }: {
//         data: { session: Session | null };
//         error: Error | null;
//       } = await supabase.auth.getSession();

//       if (error || !data?.session) {
//         router.push("/404");
//       }
//     }
//   }, [router]);

//   return {Component};
// }


// import {
//   useSession,
//   useSupabaseClient,
//   useUser,
// } from "@supabase/auth-helpers-react";
// import { useRouter } from "next/router";
// import { supabase } from "../lib/db";

// export default async function WithAuth(Component: any) {
//   const router = useRouter();
//   const session = useSession();

//   if (session) {
//     return <>{Component}</>;
//   } else {
//     router.push("/404");
//   }

//   //  we will have logic in this component that will check if the user is signed in.
//   // if the user is signed in -> we will just render component
//   // if the user is not signed in -> redirect them to a 404 page
// }
