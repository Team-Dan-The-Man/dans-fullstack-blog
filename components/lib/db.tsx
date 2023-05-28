import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function insertBlog(document: any) {
  const { data, error } = await supabase.from("blogs").insert(document);

  if (error) {
    console.log("Error inserting blog:", error);
  } else {
    console.log("Blog inserted successfully:", data);
    return data;
  }
}

export async function getAllBlogs() {
  let { data: blogs, error } = await supabase.from("blogs").select("*");

  if (error) {
    console.log("Error getting blogs", error);
  } else {
    console.log(blogs);
    return blogs;
  }
}

export async function getOneBlog(id: number) {
  let { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log("Error getting blog:", error);
  } else {
    console.log("Blog received successfully:", data);
    return data;
  }
}

export async function updateBlog(blog: any) {
  const { id, title, description } = blog;

  const { data, error } = await supabase
    .from('blogs')
    .update({ title, description })
    .eq('id', id);

  if (error) {
    console.error('Error updating blog:', error.message);
    return;
  }

  console.log('Blog updated successfully:', data);
}


export async function deleteBlog(id: number) {
  const { data, error } = await supabase.from("blogs").delete().eq("id", id);

  if (error) {
    console.log("Error deleting blog:", error);
  } else {
    console.log("Blog deleted successfully:", data);
  }
}
