import {
	useSession,
	useSupabaseClient,
	useUser,
} from "@supabase/auth-helpers-react";

export default function WithAuth(Component) {
	//  we will have logic in this component that will check if the user is signed in.
	// if the user is signed in -> we will just render component
	// if the user is not signed in -> redirect them to a 404 page
	return <>{Component}</>;
}
