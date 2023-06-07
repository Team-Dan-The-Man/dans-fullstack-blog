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

